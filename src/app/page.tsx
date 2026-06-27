import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import CallNowButton from "@/components/home/CallNowButton";

import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    take: 6,
  });

  console.log("Products found:", products.length);
  console.log(products);

  return (
    <>
      <Hero />

      <CategoryGrid />

      <FeaturedProducts products={products} />

      <ServicesSection />

      <Testimonials />

      <CallNowButton />
    </>
  );
}