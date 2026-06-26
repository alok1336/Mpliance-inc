import { PrismaClient, DealerTier, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ==========================================
  // USERS
  // ==========================================

  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@mpliance.com",
    },
    update: {},
    create: {
      name: "System Admin",
      email: "admin@mpliance.com",
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  const dealerUser = await prisma.user.upsert({
    where: {
      email: "dealer@mpliance.com",
    },
    update: {},
    create: {
      name: "Gold Dealer",
      email: "dealer@mpliance.com",
      password: hashedPassword,
      role: Role.DEALER,
    },
  });

  const hospitalUser = await prisma.user.upsert({
    where: {
      email: "hospital@mpliance.com",
    },
    update: {},
    create: {
      name: "Apollo Hospital",
      email: "hospital@mpliance.com",
      password: hashedPassword,
      role: Role.HOSPITAL,
    },
  });

  // ==========================================
  // DEALER PROFILE
  // ==========================================

  await prisma.dealerProfile.upsert({
    where: {
      userId: dealerUser.id,
    },
    update: {},
    create: {
      userId: dealerUser.id,
      companyName: "Mpliance Gold Partner",
      gstNumber: "27ABCDE1234F1Z5",
      tier: DealerTier.GOLD,
      discountPercentage: 15,
      creditLimit: 500000,
      subscriptionExpiry: new Date("2027-12-31"),
    },
  });

  // ==========================================
  // CATEGORIES
  // ==========================================

  const categories = [
    {
      name: "Endoscopy Camera Systems",
      slug: "endoscopy-camera-systems",
      icon: "Camera",
    },
    {
      name: "Light Sources",
      slug: "light-sources",
      icon: "Lightbulb",
    },
    {
      name: "Endoscopes",
      slug: "endoscopes",
      icon: "ScanSearch",
    },
    {
      name: "Laparoscopic Instruments",
      slug: "laparoscopic-instruments",
      icon: "Scissors",
    },
    {
      name: "Urology Instruments",
      slug: "urology-instruments",
      icon: "Activity",
    },
    {
      name: "Electrosurgical & Cautery",
      slug: "electrosurgical-cautery",
      icon: "Zap",
    },
    {
      name: "Microscope & OT Light Cameras",
      slug: "microscope-ot-light-cameras",
      icon: "Microscope",
    },
    {
      name: "Wireless Headlamps",
      slug: "wireless-headlamps",
      icon: "Headphones",
    },
    {
      name: "Medical Recorders",
      slug: "medical-recorders",
      icon: "Video",
    },
  ];

  const categoryMap: Record<string, string> = {};

  for (const category of categories) {
    const created = await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      update: {},
      create: category,
    });

    categoryMap[category.slug] = created.id;
  }

  // ==========================================
  // PRODUCTS
  // ==========================================

  const products = [
    {
      name: "FHD-LP-5000",
      slug: "fhd-lp-5000",
      sku: "ESC-FHD-5000",
      categorySlug: "endoscopy-camera-systems",
      price: 850000,
      dealerPrice: 780000,
    },

    {
      name: "FHD-LP-4000R",
      slug: "fhd-lp-4000r",
      sku: "ESC-FHD-4000R",
      categorySlug: "endoscopy-camera-systems",
      price: 760000,
      dealerPrice: 700000,
    },

    {
      name: "ENT-2000P-USB",
      slug: "ent-2000p-usb",
      sku: "ESC-ENT-2000",
      categorySlug: "endoscopy-camera-systems",
      price: 350000,
      dealerPrice: 320000,
    },

    {
      name: "120W LED TrueImage",
      slug: "120w-led-trueimage",
      sku: "ESC-LS-120W",
      categorySlug: "light-sources",
      price: 125000,
      dealerPrice: 110000,
    },

    {
      name: "80W Cold LED Light Source",
      slug: "80w-cold-led-light-source",
      sku: "ESC-LS-80W",
      categorySlug: "light-sources",
      price: 95000,
      dealerPrice: 85000,
    },

    {
      name: "Portable 10W Cold LED Light Source",
      slug: "portable-10w-cold-led-light-source",
      sku: "ESC-LS-10W",
      categorySlug: "light-sources",
      price: 45000,
      dealerPrice: 39000,
    },

    {
      name: "ESC-365R",
      slug: "esc-365r",
      sku: "ESC-365R",
      categorySlug: "endoscopes",
      price: 185000,
      dealerPrice: 165000,
    },

    {
      name: "ESC-265R",
      slug: "esc-265r",
      sku: "ESC-265R",
      categorySlug: "endoscopes",
      price: 165000,
      dealerPrice: 145000,
    },

    {
      name: "ESC-165R",
      slug: "esc-165r",
      sku: "ESC-165R",
      categorySlug: "endoscopes",
      price: 145000,
      dealerPrice: 130000,
    },

    {
      name: "Laparoscopic Grasper",
      slug: "laparoscopic-grasper",
      sku: "LAP-GR-01",
      categorySlug: "laparoscopic-instruments",
      price: 25000,
      dealerPrice: 22000,
    },

    {
      name: "Laparoscopic Scissor",
      slug: "laparoscopic-scissor",
      sku: "LAP-SC-01",
      categorySlug: "laparoscopic-instruments",
      price: 28000,
      dealerPrice: 24000,
    },

    {
      name: "Laparoscopic Trocar",
      slug: "laparoscopic-trocar",
      sku: "LAP-TR-01",
      categorySlug: "laparoscopic-instruments",
      price: 18000,
      dealerPrice: 15000,
    },

    {
      name: "Rigid Ureteroscope",
      slug: "rigid-ureteroscope",
      sku: "URO-001",
      categorySlug: "urology-instruments",
      price: 95000,
      dealerPrice: 82000,
    },

    {
      name: "Cystoscope",
      slug: "cystoscope",
      sku: "URO-002",
      categorySlug: "urology-instruments",
      price: 110000,
      dealerPrice: 95000,
    },

    {
      name: "Nephroscope",
      slug: "nephroscope",
      sku: "URO-003",
      categorySlug: "urology-instruments",
      price: 135000,
      dealerPrice: 118000,
    },

    {
      name: "400W Electrosurgical Cautery",
      slug: "400w-electrosurgical-cautery",
      sku: "ESC-EC-400",
      categorySlug: "electrosurgical-cautery",
      price: 175000,
      dealerPrice: 155000,
    },

    {
      name: "400W Vessel Sealer",
      slug: "400w-vessel-sealer",
      sku: "ESC-VS-400",
      categorySlug: "electrosurgical-cautery",
      price: 295000,
      dealerPrice: 260000,
    },

    {
      name: "Monopolar ESU",
      slug: "monopolar-esu",
      sku: "ESU-100",
      categorySlug: "electrosurgical-cautery",
      price: 98000,
      dealerPrice: 86000,
    },

    {
      name: "HDMICAM-13MP",
      slug: "hdmicam-13mp",
      sku: "HDMICAM13",
      categorySlug: "microscope-ot-light-cameras",
      price: 145000,
      dealerPrice: 128000,
    },

    {
      name: "HDMICAM-16MP",
      slug: "hdmicam-16mp",
      sku: "HDMICAM16",
      categorySlug: "microscope-ot-light-cameras",
      price: 175000,
      dealerPrice: 155000,
    },

    {
      name: "OTCAM-2136HD",
      slug: "otcam-2136hd",
      sku: "OTCAM2136",
      categorySlug: "microscope-ot-light-cameras",
      price: 195000,
      dealerPrice: 172000,
    },

    {
      name: "10W ENT LED Wireless Headlamp",
      slug: "10w-ent-wireless-headlamp",
      sku: "WHL-10W",
      categorySlug: "wireless-headlamps",
      price: 35000,
      dealerPrice: 29000,
    },

    {
      name: "10W Surgical Wireless Headlamp",
      slug: "10w-surgical-wireless-headlamp",
      sku: "WHL-SURG",
      categorySlug: "wireless-headlamps",
      price: 42000,
      dealerPrice: 36000,
    },

    {
      name: "3.5x Surgical Loupe",
      slug: "3-5x-surgical-loupe",
      sku: "LOUPE35",
      categorySlug: "wireless-headlamps",
      price: 25000,
      dealerPrice: 21000,
    },

    {
      name: "SRG-HD-2385X",
      slug: "srg-hd-2385x",
      sku: "SRG2385X",
      categorySlug: "medical-recorders",
      price: 225000,
      dealerPrice: 198000,
    },

    {
      name: "SRG-HD3385X",
      slug: "srg-hd3385x",
      sku: "SRG3385X",
      categorySlug: "medical-recorders",
      price: 285000,
      dealerPrice: 255000,
    },

    {
      name: "BMS-CCP-1000",
      slug: "bms-ccp-1000",
      sku: "BMS1000",
      categorySlug: "medical-recorders",
      price: 145000,
      dealerPrice: 128000,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: {
        slug: product.slug,
      },
      update: {},
      create: {
        name: product.name,
        slug: product.slug,
        sku: product.sku,
        description: `${product.name} medical equipment from Mpliance INC`,
        price: product.price,
        dealerPrice: product.dealerPrice,
        stock: 50,
        isFeatured: true,
        isPopular: true,
        isVerified: true,
        images: [
          {
            url: "/products/default.jpg",
          },
        ],
        categoryId: categoryMap[product.categorySlug],
      },
    });
  }

  // ==========================================
  // TESTIMONIALS
  // ==========================================

  await prisma.testimonial.createMany({
    data: [
      {
        author: "Dr. Sharma",
        role: "Surgeon",
        hospital: "Apollo Hospital",
        rating: 5,
        content: "Excellent quality products and service.",
        isApproved: true,
      },
      {
        author: "Dr. Mehta",
        role: "ENT Specialist",
        hospital: "Care Hospital",
        rating: 5,
        content: "Reliable endoscopy solutions.",
        isApproved: true,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Database seeded successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });