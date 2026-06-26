
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

    const serviceRequest =
      await prisma.serviceRequest.create({
        data: {
          userId: body.userId,
          type: body.type,
          description: body.description,
          status: "PENDING",
        },
      });

    return NextResponse.json(
      {
        success: true,
        data: serviceRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create service request",
      },
      { status: 500 }
    );
  }
}