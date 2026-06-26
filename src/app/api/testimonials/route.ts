import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const testimonials =
    await prisma.testimonial.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return NextResponse.json({
    success: true,
    data: testimonials,
  });
}

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const testimonial =
      await prisma.testimonial.create({
        data: {
          author: body.author,
          role: body.role,
          hospital: body.hospital,
          rating: Number(body.rating),
          content: body.content,
          isApproved:
            body.isApproved ?? false,
        },
      });

    return NextResponse.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to create testimonial",
      },
      {
        status: 500,
      }
    );
  }
}