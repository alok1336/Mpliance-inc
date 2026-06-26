import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/validations";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function POST(
  request: NextRequest
): Promise<
  NextResponse<ApiResponse<{ userId: string }>>
> {
  try {
    const body = await request.json();

    const validated =
      RegisterSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request data",
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      password,
      role,
    } = validated.data;

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error:
            "User already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password:
            hashedPassword,
          role,
        },
      });

    return NextResponse.json(
      {
        success: true,
        data: {
          userId: user.id,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Register Error:",
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