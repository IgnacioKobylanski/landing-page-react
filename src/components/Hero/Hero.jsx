import React from "react";
import "./Hero.css";
import heroImage from "../../assets/equisys_home_img.png";

const Hero = () => {
  return (
    <section id= "hero"className="hero">
      <img src={heroImage} alt="Innovación y tecnología" className="hero-image" />
      <p>Todo tu proceso industrial en un Software ERP/MES integral especializado en convertidores, gráficas y empresas de envases.</p>
    </section>
  );
};

export default Hero;