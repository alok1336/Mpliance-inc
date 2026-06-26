import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import CallNowButton from "@/components/home/CallNowButton";

import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  let products = await prisma.product.findMany({
    where: {
      isFeatured: true,
    },

    include: {
      category: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 6,
  });

  // fallback if no featured products exist
  if (products.length === 0) {
    products = await prisma.product.findMany({
      include: {
        category: true,
      },

      orderBy: {
        createdAt: "desc",
      },

      take: 6,
    });
  }

  return (
    <>
      <Hero />

      <CategoryGrid />

      <FeaturedProducts
        products={products}
      />

      <ServicesSection />

      <Testimonials />

      <CallNowButton />
    </>
  );
}