import React from "react";
import { Link } from "react-router-dom";
import styles from "./Heroimage.module.css";
function Heroimage() {
  return (
    <Link to="/product" className="no-underline block">
      <div
        className={`w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[500px] ${styles.container} cursor-pointer`}
      ></div>
    </Link>
  );
}

export default Heroimage;
