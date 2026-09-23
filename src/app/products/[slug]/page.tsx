import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const price = new Intl.NumberFormat("en-PK").format(product.price);

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <div className="border-b border-gold-border/30 bg-cream py-4">
          <p className="mx-auto max-w-7xl px-6 font-sans text-xs uppercase tracking-[1px] text-body-gray">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/products" className="hover:text-gold">
              {product.category}
            </Link>{" "}
            / {product.name}
          </p>
        </div>

        <Reveal>
          <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2">
            {/* Gallery */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.slice(1).map((img) => (
                  <div
                    key={img}
                    className="relative aspect-square overflow-hidden bg-cream"
                  >
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-5">
              <span className="font-sans text-[11px] uppercase tracking-[2px] text-gold">
                {product.category}
              </span>
              <h1 className="font-serif-alt text-[32px] font-medium leading-tight text-ink md:text-[40px]">
                {product.name}
              </h1>
              <p className="font-sans text-2xl text-body-gray">
                Rs {price}
              </p>

              <ul className="flex flex-col gap-2 border-y border-gold-border/40 py-5">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 font-sans text-sm text-body-gray"
                  >
                    <span className="text-gold">&bull;</span>
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
                message={`Hi, I'm interested in the ${product.name} (Rs ${price}).`}
                label="Enquire on WhatsApp"
                className="mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-[3px] border-[1.6px] border-gold-light px-8 py-3.5 font-serif text-[15px] font-semibold uppercase text-ink transition-all duration-300 ease-in-out hover:bg-gold-light"
              />
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
