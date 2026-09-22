import Image from "next/image";
import type { FeatureItem } from "@/types/content";

const features: FeatureItem[] = [
  {
    icon: "/images/icon-premium-quality.png",
    title: "PREMIUM QUALITY",
    description: "Finest Fabrics & Impeccable Craftsmanship",
  },
  {
    icon: "/images/icon-custom-tailoring.png",
    title: "CUSTOM TAILORING",
    description: "Perfect Fit. Your Style. Our Expertise.",
  },
  {
    icon: "/images/icon-secure-payment.png",
    title: "SECURE PAYMENT",
    description: "100% Safe & Reliable Checkout",
  },
  {
    icon: "/images/icon-nationwide-delivery.png",
    title: "NATIONWIDE DELIVERY",
    description: "Bringing Luxury To Your Doorstep",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-ink py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center px-8 py-6 gap-3"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <h3 className="font-serif text-2xl font-medium leading-6 text-gold-muted uppercase">
              {feature.title}
            </h3>
            <p className="font-sans text-sm font-normal leading-[21px] text-body-gray text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
