import React from "react";
import Card from "../Card/Card";
import "../Ventajas/Ventajas.css";
import { PiUsersFourLight } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { GrCubes } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";


import { FaUsers } from "react-icons/fa6";
import { FaSliders } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";








const ventajasData = [
  {
    icon: <FaUsers size={40} />,
    title: "Implementación personalizada",
    description: "Conformamos un equipo interdisciplinario involucrado en el asesoramiento inicial y la capacitación de tu personal"
  },
  {
    icon: <FaSliders size={40} />,
    title: "Adaptación a tus procesos",
    description: "Diseñamos un sistema que se ajusta a tu realidad productiva para que la transición sea natural y sin fricciones"
  },
  {
    icon: <FaHeadset size={40} />,
    title: "Soporte y actualizaciones",
    description: "Brindamos un soporte remoto ágil y actualizaciones permanentes que no interrumpen tu producción"
  },
  {
    icon: <FaCogs size={40} />,
    title: "Módulos especializados",
    description: "Ofrecemos una gestión integral y especializada con control de insumos, reservas, mantenimiento y calidad"
  },
  {
    icon: <FaRegLightbulb size={40} />,
    title: "Herramientas innovadoras",
    description: "Optimizamos tu planta con Data Relay, etiquetas QR y panel de producción disponible en versión móvil"
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Evolución constante",
    description: "Innovamos de forma permanente para responder a las nuevas demandas del mercado"
  }
];

const Ventajas = () => {
  return (
    <section className="ventajas" id="ventajas">
      <h2 className="underline-title">
        Descubre las ventajas de nuestro sistema integral
      </h2>
      <div className="cards-container">
        {ventajasData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            backgroundColor="white"
            textColor="var(--dark-blue)"
          />
        ))}
      </div>
    </section>
  );
};

export default Ventajas;