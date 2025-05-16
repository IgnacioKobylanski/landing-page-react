import React from "react";
import { FaRegLightbulb, FaRegFileExcel, FaClipboardCheck } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";
import "../OtrasFunciones/OtrasFunciones.css"

const funcionesData = [
  { id: 1, icon: <FaRegLightbulb size={48} />, title: "Gestión de órdenes de trabajo interno" },
  { id: 2, icon: <BsBuildings size={48} />, title: "Registro de planos de impresión" },
  { id: 3, icon: <TbReportSearch size={48} />, title: "Reportes con filtros" },
  { id: 4, icon: <FaRegFileExcel size={48} />, title: "Exportación a excel" },
  { id: 5, icon: <IoCloudUploadOutline size={48} />, title: "Guardado en la nube o servidor local" },
  { id: 6, icon: <FaClipboardCheck size={48} />, title: "Registro de historial de cambios" },
];

const OtrasFunciones = () => {
  return (
    <section id="otras" className="otras-funciones">
      <h2 className="underline-title">Otras Funciones</h2>
      <div className="funciones-grid">
        {funcionesData.map(({ id, icon, title }, index) => (
          <div 
            key={id} 
            className={`funcion-card zigzag-${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="icon-container">{icon}</div>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtrasFunciones;
