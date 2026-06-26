
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch categories",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    if (!body.name || !body.slug) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Name and slug are required",
        },
        {
          status: 400,
        }
      );
    }

    const existing =
      await prisma.category.findUnique({
        where: {
          slug: body.slug,
        },
      });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Category slug already exists",
        },
        {
          status: 400,
        }
      );
    }

    const category =
      await prisma.category.create({
        data: {
          name: body.name,
          slug: body.slug,
        },
      });

    return NextResponse.json(
      {
        success: true,
        data: category,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to create category",
      },
      {
        status: 500,
      }
    );
  }
}