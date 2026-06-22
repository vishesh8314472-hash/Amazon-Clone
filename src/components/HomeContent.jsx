import React from "react";

import Heroimage from "./Heroimage";
import QuadBoxSection from "./sections/QuadBoxSection";
import ProductBarSection from "./sections/ProductBarSection";
import ProductBoxSection from "./sections/ProductBoxSection";
const HomeContent = () => {
  return (
    <main className="bg-[#EAEDED]">

      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#EAEDED] z-[1]" />
        <Heroimage />
      </div>

      <div className="relative -mt-28 z-10">
        <QuadBoxSection />
      </div>

      <div className="mt-3">
        <ProductBarSection />
      </div>

      <div className="mt-3">
        <ProductBoxSection />
      </div>


    </main>
  );
};

export default HomeContent;
