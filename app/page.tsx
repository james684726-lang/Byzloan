"use client";
import Simplebydesign from "./components/Simplebydesign";
import Findyourfit from "./components/Findyourfit";
import Builtforbusiness from "./components/Builtforbusiness";
import Goodtoknow from "./components/Goodtoknow";
import Peopleoverpaperwork from "./components/Peopleoverpaperwork";
import Hero from "./components/hero";
import Advisor from "./components/Advisor";
import FundingUsesSection from "./components/FundingUsesSection";
import ProductsSection from "./components/ProductsSection";

export default function Page() {
  return (
    <main id="top" className="overflow-x-hidden bg-[#00587E] text-white">
      <Hero />
      <Advisor/>
      <Simplebydesign />
      <ProductsSection/>
      <FundingUsesSection/>
      {/* <Findyourfit /> */}
      <Builtforbusiness />
      <Peopleoverpaperwork />
      <Goodtoknow />
    </main>
  );
}
