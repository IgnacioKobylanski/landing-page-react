import React from "react";
import "./Hero.css";
import heroImage from "../../assets/equisys_home_img.png";

const Hero = () => {
  return (
    <section id= "hero"className="hero">
      <h1>Innovación que transforma tu empresa.</h1>
      <img src={heroImage} alt="Innovación y tecnología" className="hero-image" />
      <p>Impulsamos tu negocio con soluciones tecnológicas fáciles de usar y de alto impacto.</p>
    </section>
  );
};

export default Hero;
