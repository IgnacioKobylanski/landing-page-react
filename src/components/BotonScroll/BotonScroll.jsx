import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "../BotonScroll/BotonScroll.css";

const BotonScroll = () => {
  const scrollToTop = () => {
    const navb = document.getElementById("navb");
    if (navb) {
      navb.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className="boton-scroll" onClick={scrollToTop} aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  );
};

export default BotonScroll;
