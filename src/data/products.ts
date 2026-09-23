import type { Product } from "@/types/content";

// Real product data scraped from fazalzari.com/product/golden-bloom-mehndi-dress/.
// The live store currently lists only this single product across both the
// "Products" and "Bridal Wear" catalog pages.
export const products: Product[] = [
  {
    slug: "golden-bloom-mehndi-dress",
    name: "Emerald Green Gold Mehndi Suit",
    category: "Bridal Wear",
    price: 50000,
    currency: "PKR",
    images: [
      "/images/product-mehndi-suit-1.png",
      "/images/product-mehndi-suit-2.png",
      "/images/product-mehndi-suit-3.png",
      "/images/product-mehndi-suit-4.png",
      "/images/product-mehndi-suit-5.png",
    ],
    highlights: [
      "Hand-embellished emerald green shirt with intricate gold embroidery",
      "Detailed floral and vertical gold embroidery on the front",
      "Heavily embellished bell sleeves with diagonal and floral detailing",
      "Ornate gold embroidered borders on the shirt",
      "Coordinating emerald green straight-cut trousers",
      "Delicate scattered gold motifs throughout the shirt",
      "Elegant traditional design suitable for festive and wedding occasions",
    ],
    description:
      "Emerald Green Gold Mehndi is an elegant three-piece Pakistani festive ensemble crafted in a rich emerald green shade and adorned with intricate gold handwork. The long shirt features elaborate floral motifs, refined vertical embroidery, and delicate scattered embellishments across the fabric. The statement bell sleeves are finished with diagonal gold detailing and intricate floral embroidery, while the ornate borders add a luxurious finishing touch. Paired with coordinating emerald green trousers, this ensemble creates a sophisticated and graceful look for mehndi celebrations, weddings, festive occasions, and evening events.",
    productionNote:
      "Each Emerald Green Gold Mehndi ensemble is handcrafted exclusively upon order. Please allow 12–16 weeks for production and delivery.",
  },
];
