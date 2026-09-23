import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("public/images");

const assets = [
  // About Us page
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/BG-Hero-Sec.jpeg", name: "about-hero-bg.jpeg" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-12-2026-01_29_50-AM-1-1024x683.png", name: "about-story.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-26-at-7.50.21-PM-1024x426.jpeg", name: "about-quote-bg.jpeg" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/heritiege-removebg-preview.png", name: "icon-heritage.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/stiching_-removebg-preview-e1786510717263.png", name: "icon-craftsmanship.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/1-1024x683.png", name: "about-hand-embroidery.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/3-1024x683.png", name: "about-perfect-tailoring.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/4-1024x683.png", name: "about-exclusive-designs.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/2-1024x683.png", name: "about-trusted-by-brides.png" },

  // Product: Emerald Green Gold Mehndi Suit
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/Front-Close-1.png", name: "product-mehndi-suit-1.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/img-1-1.png", name: "product-mehndi-suit-2.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/Side-Angle-2-1.png", name: "product-mehndi-suit-3.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/Side-Angle-1.png", name: "product-mehndi-suit-4.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/Back-1.png", name: "product-mehndi-suit-5.png" },

  // Contact Us page
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/plane.png", name: "icon-free-shipping.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/discount.png", name: "icon-big-discount.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/card.png", name: "icon-secure-payment-2.png" },
];

async function downloadOne({ url, name }) {
  const dest = path.join(OUT_DIR, name);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`OK   ${name} (${(buf.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`FAIL ${name}: ${err.message}`);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
}

main();
