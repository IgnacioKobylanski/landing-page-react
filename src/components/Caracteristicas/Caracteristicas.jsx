import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "../Caracteristicas/Caracteristicas.css";
import { FaSignal, FaVectorSquare, FaUsersCog } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import "swiper/css/effect-fade";


const caracteristicasData = [
  { id: 1, icon: <FaSignal size={40} />, title: "Identif. clara de los estados de producción" },
  { id: 2, icon: <TfiReload size={40} />, title: "Trazabilidad" },
  { id: 3, icon: <BiSolidHappyBeaming size={40} />, title: "Interfaz Amigable" },
  { id: 4, icon: <FaVectorSquare size={40} />, title: "Interacción con otros Softwares" },
  { id: 5, icon: <FaUsersCog size={40} />, title: "Multitasking Multiusuario" },
  { id: 6, icon: <MdOutlineSecurity size={40} />, title: "Control de accesos y permisos" },
];

const Caracteristicas = () => {
  return (
    <section id="caracteristicas" className="caracteristicas">
      <h2 className="underline-title">Características</h2>
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
          delay: 3000,
          disableOnInteraction: false,
        }}    
      >
        {caracteristicasData.map(({ id, icon, title }) => (
          <SwiperSlide key={id}>
            <div className="caracteristica-card">
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Caracteristicas;