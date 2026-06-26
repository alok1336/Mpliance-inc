
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

    const category =
      await prisma.category.findUnique({
        where: {
          id,
        },
      });

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          error: "Category not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch category",
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

    const category =
      await prisma.category.update({
        where: {
          id,
        },

        data: {
          name: body.name,
          slug: body.slug,
        },
      });

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update category",
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

    const productsCount =
      await prisma.product.count({
        where: {
          categoryId: id,
        },
      });

    if (productsCount > 0) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Cannot delete category because products are assigned to it.",
        },
        {
          status: 400,
        }
      );
    }

    await prisma.category.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete category",
      },
      {
        status: 500,
      }
    );
  }
}