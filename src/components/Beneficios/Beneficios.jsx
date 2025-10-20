import React from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import "../Beneficios/Beneficios.css";
import { FaRegCalendarAlt, FaClipboardCheck, FaCogs, FaDesktop, FaTools, FaChartBar } from "react-icons/fa";

const funcionalidadesData = [
  { icon: <FaRegCalendarAlt size={40} />, title: "Centraliza y planifica tu producción con diagramas de Gantt" },
  { icon: <FaClipboardCheck size={40} />, title: "Asegura trazabilidad total habilitando tareas por usuario" },
  { icon: <FaCogs size={40} />, title: "Automatiza la captura de datos desde máquinas" },
  { icon: <FaDesktop size={40} />, title: "Controla en tiempo real tu planta con alertas visuales y pantallas mobile" },
  { icon: <FaTools size={40} />, title: "Gestiona mermas, scrap, insumos y mantenimiento preventivo" },
  { icon: <FaChartBar size={40} />, title: "Decide con información confiable gracias al registro histórico" },
];

const Beneficios = () => {
  return (
    <section id="funcionalidades" className="funcionalidades">
      <h2 className="underline-title">
        Imagina visualizar todos tus procesos en un solo sistema de gestión de producción
      </h2>

      <div className="cards-container">
        {funcionalidadesData.map((item, index) => (
          <motion.div
            key={index}
            style={{ width: "100%", display: "flex" }} // asegura que Card se estire
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              icon={item.icon}
              title={item.title}
              description={item.text}
              style={{ flex: 1, width: "100%" }} // fuerza ancho completo
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;
