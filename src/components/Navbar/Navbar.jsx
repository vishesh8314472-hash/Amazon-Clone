import React from "react";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
function Navbar({ cartCount }) {
  return (
    <>
      <Topbar cartCount={cartCount} />
      <BottomBar />
    </>
  );
}

export default Navbar;
