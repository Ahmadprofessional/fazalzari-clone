import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGallery from "@/components/ProductGallery";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const BASE_URL = "https://fazalzari.com";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const price = formatPrice(product.price);

  return {
    title: `${product.name}`,
    description: product.description.slice(0, 160),
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Fazal Zari`,
      description: product.description.slice(0, 200),
      url: `${BASE_URL}/products/${product.slug}`,
      images: product.images.map((img) => ({
        url: img,
        width: 800,
        height: 1067,
        alt: product.name,
      })),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Fazal Zari`,
      description: product.description.slice(0, 160),
      images: [product.images[0]],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const price = formatPrice(product.price);

  /** Product structured data (JSON-LD) for Google rich results */
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${BASE_URL}${img}`),
    brand: {
      "@type": "Brand",
      name: "Fazal Zari",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "PKR",
      availability: "https://schema.org/PreOrder",
      url: `${BASE_URL}/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Fazal Zari",
      },
    },
    category: product.category,
    material: "100% Pure Silk",
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <Header />
      <main className="flex flex-1 flex-col">

        <div className="border-b border-gold-border/30 bg-cream py-3 sm:py-4">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-7xl px-4 sm:px-6 font-sans text-[10px] sm:text-xs uppercase tracking-[1px] text-body-gray"
          >
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/products" className="hover:text-gold">
                  {product.category}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>
        </div>

        <Reveal>
          <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:gap-12 px-4 sm:px-6 py-8 sm:py-12 md:py-16 md:grid-cols-2">
            {/* Interactive 4-Image Gallery */}
            <ProductGallery images={product.images} name={product.name} />

            {/* Details */}
            <div className="flex flex-col gap-5">
              <span className="font-sans text-[11px] uppercase tracking-[2px] text-gold">
                {product.category}
              </span>
              <h1 className="font-serif-alt text-[26px] sm:text-[32px] md:text-[40px] font-medium leading-tight text-ink">
                {product.name}
              </h1>
              <p className="font-sans text-xl sm:text-2xl text-body-gray">
                Contact Us for Price
              </p>

              <ul className="flex flex-col gap-2 border-y border-gold-border/40 py-5">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 font-sans text-sm text-body-gray"
                  >
                    <span className="text-gold" aria-hidden="true">&bull;</span>
                    {h}
                  </li>
                ))}
              </ul>

              <p className="font-sans text-sm leading-6 text-body-gray">
                {product.description}
              </p>

              <p className="font-italic text-sm italic text-gold-muted">
                {product.productionNote}
              </p>

              <WhatsAppButton
                variant="inline"
                message={`Hi, I'm interested in the ${product.name}. Could you please share the price?`}
                label="Enquire on WhatsApp"
                className="mt-4 inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-[3px] border-[1.6px] border-gold-light px-6 sm:px-8 py-3 sm:py-3.5 font-serif text-[14px] sm:text-[15px] font-semibold uppercase text-ink transition-all duration-300 ease-in-out hover:bg-gold-light"
              />
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
