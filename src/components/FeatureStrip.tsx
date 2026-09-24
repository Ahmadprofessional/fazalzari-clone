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
    <section className="bg-ink py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-gold-border/15 md:divide-x md:divide-y-0 gap-y-8 sm:gap-y-10 px-4 sm:px-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center px-3 sm:px-6 md:px-8 gap-2 sm:gap-3"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
            />
            <h3 className="font-serif text-base sm:text-xl md:text-2xl font-medium leading-tight text-gold-muted uppercase">
              {feature.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm font-normal leading-[18px] sm:leading-[21px] text-body-gray text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
