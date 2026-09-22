import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("public/images");

const assets = [
  { url: "https://fazalzari.com/wp-content/uploads/2026/04/Logo-removebg-preview.png", name: "logo.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/Divider-2.png", name: "divider-hero.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/Hero-Section-img-1.jpeg", name: "hero-bg.jpeg" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/New-Arrivals-1-e1785893688743-702x1024.png", name: "category-new-arrivals.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/Bridal-arch-Image-688x1024.png", name: "category-bridal.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/formal-arch-image-690x1024.png", name: "category-formals.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/Ready-To-Deliver-689x1024.png", name: "category-ready-deliver.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/Unstich-Arch-image-695x1024.png", name: "category-unstitched.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/Jewllery-arch-image-688x1024.png", name: "category-jewellery.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/08/Divider-S58.png", name: "divider-category.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/Banner-final-1.jpeg", name: "lookbook-banner.jpeg" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-26-2026-07_54_13-PM-1.png", name: "icon-premium-quality.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/download-1.png", name: "icon-custom-tailoring.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/secure-payment.png", name: "icon-secure-payment.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/download-1.3-e1785080281495.png", name: "icon-nationwide-delivery.png" },
  { url: "https://fazalzari.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-26-at-8.14.22-PM-1024x404.jpeg", name: "footer-texture-bg.jpeg" },
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
