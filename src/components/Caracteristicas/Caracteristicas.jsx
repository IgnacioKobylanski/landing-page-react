import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "../Caracteristicas/Caracteristicas.css";
import "swiper/css/effect-fade";
import logoAnca from "../../assets/Logos/LogoAncaPlast.png";
import logoOtero from "../../assets/Logos/LogoCotillonOtero.png";
import logoFlexy from "../../assets/Logos/LogoFlexyplas.png";
import logoProveedores from "../../assets/Logos/LogoProveedoresIndustrales.png";


const caracteristicasData = [
  { id: 1, icon: <img src={logoAnca} alt="Anca Plast" className="logo-slide" />, title: "Anca Plast" },
  { id: 2, icon: <img src={logoOtero} alt="Cotillon Otero" className="logo-slide" />, title: "Cotillon Otero" },
  { id: 3, icon: <img src={logoFlexy} alt="Flexyplas" className="logo-slide" />, title: "Flexyplas" },
  { id: 4, icon: <img src={logoProveedores} alt="Proveedores Industrales" className="logo-slide" />, title: "Proveedores Industrales" },
];


const Caracteristicas = () => {
  return (
    <section id="caracteristicas" className="caracteristicas">
      <div className="caracteristicas-contenido">
        <h3 className="carousel-title">Empresas que confian en nosotros</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }} 
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}    
        >
          {caracteristicasData.map(({ id, icon, title }) => (
            <SwiperSlide key={id}>
              <div className="caracteristica-card">
                <div className="icon">{icon}</div>
                {/* <h3>{title}</h3> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="boton-contacto-wrapper">
            <a href="#contacto" className="boton-contacto">
              Contacta un asesor
            </a>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;