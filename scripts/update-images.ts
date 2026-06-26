import { prisma } from "../src/lib/prisma";

async function main() {
  const updates = [
    // RECORDERS
    {
      name: "BMS-CCP-1000",
      image: "/products/recorders/bms-ccp-1000.jpg",
    },
    {
      name: "SRG-HD3385X",
      image: "/products/recorders/srg-hd3385x.jpg",
    },
    {
      name: "SRG-HD-2385X",
      image: "/products/recorders/srg-hd2385x.jpg",
    },

    // HEADLAMPS
    {
      name: "3.5x Surgical Loupe",
      image:
        "/products/headlamps/surgical-loupe-3-5x.jpg",
    },
    {
      name: "10W Surgical Wireless Headlamp",
      image:
        "/products/headlamps/wireless-headlamp-10w.jpg",
    },
    {
      name: "10W ENT LED Wireless Headlamp",
      image:
        "/products/headlamps/ent-led-wireless-headlamp.jpg",
    },

    // MICROSCOPE
    {
      name: "OTCAM-2136HD",
      image: "/products/microscope/otcam-2136hd.jpg",
    },
    {
      name: "HDMICAM-16MP",
      image: "/products/microscope/hdmicam-16mp.jpg",
    },
    {
      name: "HDMICAM-13MP",
      image: "/products/microscope/hdmicam-13mp.jpg",
    },

    // CAUTERY
    {
      name: "Monopolar ESU",
      image: "/products/cautery/monopolar-esu.jpg",
    },
    {
      name: "400W Vessel Sealer",
      image:
        "/products/cautery/vessel-sealer-400w.jpg",
    },
    {
      name: "400W Electrosurgical Cautery",
      image:
        "/products/cautery/electrosurgical-cautery-400w.jpg",
    },

    // UROLOGY
    {
      name: "Nephroscope",
      image: "/products/urology/nephroscope.jpg",
    },
    {
      name: "Cystoscope",
      image: "/products/urology/cystoscope.jpg",
    },
    {
      name: "Rigid Ureteroscope",
      image:
        "/products/urology/rigid-ureteroscope.jpg",
    },

    // LAPAROSCOPIC
    {
      name: "Laparoscopic Grasper",
      image:
        "/products/laparoscopic/laparoscopic-grasper.jpg",
    },
    {
      name: "Laparoscopic Scissor",
      image:
        "/products/laparoscopic/laparoscopic-scissor.jpg",
    },
    {
      name: "Laparoscopic Trocar",
      image:
        "/products/laparoscopic/laparoscopic-trocar.jpg",
    },

    // ENDOSCOPES
    {
      name: "ESC-165R",
      image: "/products/endoscopes/esc-165r.jpg",
    },
    {
      name: "ESC-265R",
      image: "/products/endoscopes/esc-265r.jpg",
    },
    {
      name: "ESC-365R",
      image: "/products/endoscopes/esc-365r.jpg",
    },

    // ENDOSCOPY CAMERA SYSTEMS
    {
      name: "ENT-2000P-USB",
      image:
        "/products/endoscopy/ent-2000p-usb.jpg",
    },
    {
      name: "FHD-LP-4000R",
      image:
        "/products/endoscopy/fhd-lp-4000r.jpg",
    },
    {
      name: "FHD-LP-5000",
      image:
        "/products/endoscopy/fhd-lp-5000r.jpg",
    },

    // LIGHT SOURCES
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
        images: [
          {
            url: item.image,
          },
        ],
      },
    });

    console.log(`✅ Updated ${item.name}`);
  }

  console.log("🎉 All product images updated successfully");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });