import React from "react";
import "../Soluciones/Soluciones.css";
import {
  FaUserCog,
  FaHeadset,
  FaLightbulb,
  FaWindowRestore,
  FaHandshake,
  FaCogs,
  FaProjectDiagram
} from "react-icons/fa";

const servicios = [
  { icon: <FaUserCog size={32} />, title: "Personalización del sistema" },
  { icon: <FaHeadset size={32} />, title: "Asistencia técnica remota" },
  { icon: <FaLightbulb size={32} />, title: "Innovación constante" },
  { icon: <FaWindowRestore size={32} />, title: "Actualizaciones permanentes" },
  { icon: <FaHandshake size={32} />, title: "Implementación presencial" }
];

const vinculaciones = [
  "Envío de Órdenes de producción a partir de la habilitación de NDP",
  "Envío de PDF de ET y Planos",
  "Envío de info de Reserva de materiales y NDP",
  "Envío de información de consumo de MP",
  "Envío de información de Sobrantes",
  "Envío de información de Producto Terminado"
];

const Soluciones = () => {
  return (
    <section className="soluciones" id="soluciones">
      <h2 >Soluciones</h2>
      <div className="soluciones-bloque">
        <div className="soluciones-texto">
          <h3>Servicios pensados para vos</h3>
          <ul>
            {servicios.map((servicio, index) => (
              <li key={index}>
                <span className="icon">{servicio.icon}</span>
                {servicio.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="soluciones-imagen hoverable">
          <FaCogs size={80} className="imagen-icono" />
        </div>
      </div>

      <div className="soluciones-bloque reverse">
        <div className="soluciones-imagen hoverable">
          <FaProjectDiagram size={80} className="imagen-icono" />
        </div>
        <div className="soluciones-texto">
          <h3>Vinculaciones inteligentes</h3>
          <ul>
            {vinculaciones.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
