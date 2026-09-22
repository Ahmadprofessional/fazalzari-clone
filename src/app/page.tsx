import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import ExclusiveLookbook from "@/components/ExclusiveLookbook";
import FeatureStrip from "@/components/FeatureStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ShopByCategory />
        <ExclusiveLookbook />
        <FeatureStrip />
      </main>
      <Footer />
    </div>
  );
}
