import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const quote =
      await prisma.quoteRequest.create({
        data: {
          productName:
            body.productName,
          name: body.name,
          email: body.email,
          phone: body.phone,
          message: body.message,
        },
      });

    return NextResponse.json(
      {
        success: true,
        data: quote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to submit quote request",
      },
      { status: 500 }
    );
  }
}