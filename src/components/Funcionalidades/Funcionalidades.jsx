import React from "react";
import Card from "../Card/Card";
import "../Funcionalidades/Funcionalidades.css"


import "./Funcionalidades.css";
import { PiUsersFourLight } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { GrCubes } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaRegLightbulb } from "react-icons/fa";

const funcionalidadesData = [
  {
    icon: <PiUsersFourLight size={40} />,
    title: "Gestión de Usuarios",
    text: "Administra fácilmente usuarios y permisos."
  },
  {
    icon: <BsBuildings size={40} />,
    title: "Entidades Asociadas",
    text: "Vincula organizaciones o instituciones relevantes."
  },
  {
    icon: <GrCubes size={40} />,
    title: "Módulos Personalizables",
    text: "Activa o desactiva funcionalidades según tu necesidad."
  },
  {
    icon: <FaRegCalendarAlt size={40} />,
    title: "Agenda Inteligente",
    text: "Organiza eventos y reuniones con facilidad."
  },
  {
    icon: <SlLocationPin size={40} />,
    title: "Geolocalización",
    text: "Ubica usuarios, eventos o recursos en el mapa."
  },
  {
    icon: <FaRegLightbulb size={40} />,
    title: "Ideas y Sugerencias",
    text: "Recoge feedback e ideas de forma colaborativa."
  }
];

const Funcionalidades = () => {
  return (
    <section id="funcionalidades" className="funcionalidades">
      <h2 className="underline-title">Funcionalidades</h2>
      <div className="cards-container">
        {funcionalidadesData.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default Funcionalidades;
