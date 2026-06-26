import { prisma } from "../src/lib/prisma";

async function main() {
  const updates = [
    // Endoscopy Camera Systems

    {
      name: "ENT-2000P-USB",
      image: "/products/endoscopy/ent-2000p-usb.jpg",
    },

    {
      name: "FHD-LP-4000R",
      image: "/products/endoscopy/fhd-lp-4000r.jpg",
    },

    {
      name: "FHD-LP-5000",
      image: "/products/endoscopy/fhd-lp-5000r.jpg",
    },

    // Light Sources

    {
      name: "Portable 10W Cold LED Light Source",
      image:
        "/products/light-sources/portable-10w-led-light-source.jpg",
    },

    {
      name: "80W Cold LED Light Source",
      image:
        "/products/light-sources/80w-led-light-source.jpg",
    },

    {
      name: "120W LED TrueImage",
      image:
        "/products/light-sources/120w-led-trueimage.jpg",
    },
  ];

  for (const item of updates) {
    await prisma.product.updateMany({
      where: {
        name: item.name,
      },
      data: {
        images: [{ url: item.image }],
      },
    });

    console.log(`Updated ${item.name}`);
  }

  console.log("✅ Missing images fixed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });