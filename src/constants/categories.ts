export const PRODUCT_CATEGORIES = [
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
] as const;

export type ProductCategory =
  (typeof PRODUCT_CATEGORIES)[number];