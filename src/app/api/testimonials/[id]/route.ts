import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await params;

    const testimonial =
      await prisma.testimonial.findUnique({
        where: {
          id,
        },
      });

    if (!testimonial) {
      return NextResponse.json(
        {
          success: false,
          error: "Testimonial not found",
        },
        {
          status: 404,
        }
      );
    }

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
          "Failed to fetch testimonial",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const testimonial =
      await prisma.testimonial.update({
        where: {
          id,
        },
        data: {
          author: body.author,
          role: body.role,
          hospital:
            body.hospital || null,
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
          "Failed to update testimonial",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await params;

    await prisma.testimonial.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message:
        "Testimonial deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to delete testimonial",
      },
      {
        status: 500,
      }
    );
  }
}