import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import ExclusiveLookbook from "@/components/ExclusiveLookbook";
import FeatureStrip from "@/components/FeatureStrip";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Fazal Zari | Heritage Luxury, Handcrafted for Royalty",
  description:
    "Discover timeless bridal lehengas, peshwas, and luxury formal wear handcrafted with zardozi, crystals, and pure silk. Faisalabad's premier bridal couture since 1999.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Reveal>
          <ShopByCategory />
        </Reveal>
        <Reveal>
          <ExclusiveLookbook />
        </Reveal>
        <Reveal>
          <FeatureStrip />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
