import React from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import "../Ventajas/Ventajas.css";
import { FaUsers, FaSlidersH, FaHeadset, FaCogs, FaLightbulb, FaChartLine } from "react-icons/fa";

const ventajasData = [
  {
    icon: <FaUsers size={40} />,
    title: "Implementación adaptada",
    description: "Conformamos un equipo interdisciplinario involucrado en el asesoramiento y la capacitación"
  },
  {
    icon: <FaSlidersH size={40} />,
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
    icon: <FaLightbulb size={40} />,
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ width: "100%" }}
          >
            <Card
              icon={item.icon}
              title={item.title}
              description={item.description}
              backgroundColor="white"
              textColor="var(--dark-blue)"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ventajas;
