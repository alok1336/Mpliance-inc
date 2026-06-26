
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const featured = searchParams.get("featured");
    const popular = searchParams.get("popular");
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const products = await prisma.product.findMany({
      where: {
        ...(featured === "true" && {
          isFeatured: true,
        }),

        ...(popular === "true" && {
          isPopular: true,
        }),

        ...(category && {
          category: {
            slug: category,
          },
        }),

        ...(search && {
          name: {
            contains: search,
            mode: "insensitive",
          },
        }),
      },

      include: {
        category: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch products",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: body.slug,
        sku: body.sku,
        description: body.description,
        price: Number(body.price),
        dealerPrice: Number(body.dealerPrice),
        stock: Number(body.stock),

        isFeatured: body.isFeatured ?? false,
        isPopular: body.isPopular ?? false,
        isVerified: body.isVerified ?? false,

        categoryId: body.categoryId,

        images: [],
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: product,
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
        error: "Failed to create product",
      },
      {
        status: 500,
      }
    );
  }
}