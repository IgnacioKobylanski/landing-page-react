import React from "react";
import Card from "../Card/Card";
import "../Beneficios/Beneficios.css"
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";




const funcionalidadesData = [
  {
    icon: <FaRegCalendarAlt size={40} />,
    title: "Centraliza y planifica tu producción con diagramas de Gantt",
    text: ""
  },
  {
    icon: <FaClipboardCheck size={40} />,
    title: " Asegura trazabilidad total habilitando tareas por usuario",
    text: ""
  },
  {
    icon: <FaCogs size={40} />,
    title: "Automatiza la captura de datos desde máquinas",
    text: ""
  },
  {
    icon: <FaDesktop size={40} />,
    title: "Controla en tiempo real tu planta con alertas visuales y pantallas mobile",
    text: ""
  },
  {
    icon: <FaTools size={40} />,
    title: "Gestiona mermas, scrap, insumos y mantenimiento preventivo",
    text: ""
  },
  {
    icon: <FaChartBar size={40} />,
    title: "Decide con información confiable gracias al registro histórico",
    text: ""
  }
];

const Beneficios = () => {
  return (
    <section id="funcionalidades" className="funcionalidades">
      <h2 className="underline-title">Imagina visualizar todos tus procesos
        en un solo sistema de gestión de producción</h2>
      <div className="cards-container">
        {funcionalidadesData.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default Beneficios;
