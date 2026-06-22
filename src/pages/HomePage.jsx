import React from "react";

import Navbar from "../components/Navbar/Navbar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer/Footer";
function HomePage({ cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <HomeContent />
      <Footer />
    </>
  );
}

export default HomePage;
