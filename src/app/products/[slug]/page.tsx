import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProductDetails from "@/components/products/ProductDetails";

interface Props {
params: Promise<{
slug: string;
}>;
}

export async function generateMetadata({
params,
}: Props) {
const { slug } = await params;

const product =
await prisma.product.findUnique({
where: {
slug,
},
});

return {
title: product?.name
? `${product.name} | Mpliance INC`
: "Product",
description: product?.description,
};
}

export default async function ProductPage({
params,
}: Props) {
const { slug } = await params;

const product =
await prisma.product.findUnique({
where: {
slug,
},
include: {
category: true,
},
});

if (!product) {
notFound();
}

return ( <main className="min-h-screen bg-[#020817]"> <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> <ProductDetails product={product} /> </div> </main>
);
}
