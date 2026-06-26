import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "@/lib/prisma";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function POST(
  request: NextRequest
): Promise<
  NextResponse<
    ApiResponse<{
      token: string;
    }>
  >
> {
  try {
    const body =
      await request.json();

    const {
      email,
      password,
    } = body;

    if (
      !email ||
      !password
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Email and password required",
        },
        { status: 400 }
      );
    }

    const user =
      await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          dealerProfile:
            true,
        },
      });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Dealer not found",
        },
        { status: 404 }
      );
    }

    if (
      user.role !==
      "DEALER"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Not a dealer account",
        },
        { status: 403 }
      );
    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (
      !validPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid credentials",
        },
        { status: 401 }
      );
    }

    const profile =
      user.dealerProfile;

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Dealer profile missing",
        },
        { status: 400 }
      );
    }

    const isExpired =
      profile.subscriptionExpiry &&
      new Date(
        profile.subscriptionExpiry
      ) < new Date();

    if (isExpired) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Dealer subscription expired",
        },
        { status: 403 }
      );
    }

    const token =
      jwt.sign(
        {
          userId:
            user.id,

          email:
            user.email,

          role:
            user.role,

          dealerTier:
            profile.tier,

          subscriptionExpiry:
            profile.subscriptionExpiry,
        },
        process.env
          .JWT_SECRET!,
        {
          expiresIn:
            "7d",
        }
      );

    return NextResponse.json({
      success: true,

      data: {
        token,
      },
    });
  } catch (error) {
    console.error(
      "Dealer Login Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Internal Server Error",
      },
      { status: 500 }
    );
  }
}