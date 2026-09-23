import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import ExclusiveLookbook from "@/components/ExclusiveLookbook";
import FeatureStrip from "@/components/FeatureStrip";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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
