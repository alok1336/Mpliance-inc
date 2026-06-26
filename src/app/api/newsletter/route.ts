
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<any>>> {
  try {
    const body = await request.json();

    const existing =
      await prisma.newsletterSubscriber.findUnique({
        where: {
          email: body.email,
        },
      });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: "Email already subscribed",
        },
        { status: 409 }
      );
    }

    const subscriber =
      await prisma.newsletterSubscriber.create({
        data: {
          email: body.email,
        },
      });

    return NextResponse.json(
      {
        success: true,
        data: subscriber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Subscription failed",
      },
      { status: 500 }
    );
  }
}