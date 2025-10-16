import React from "react";
import "../CasoDeExito/CasoDeExito.css";
import CirculoProgreso from "../CirculoProgreso/CirculoProgreso";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";

// ====== Datos de los casos ======
const casos = [
  { id: 1, img: img1, texto: "Trazabilidad de órdenes digitales en tiempo real", numero: "100%", porcentaje: 100 },
  { id: 2, img: img2, texto: "Reposición de fotopolímeros/clichés", numero: "-60%", porcentaje: 60 },
  { id: 3, img: img3, texto: "Confiabilidad del inventario y su ubicación", numero: "+95%", porcentaje: 95 },
  { id: 4, img: img4, texto: "Minutos para la carga de partes diarios", numero: "83", porcentaje: 83 },
];

const CasoDeExito = () => {
  return (
    <section id="caso-de-exito" className="caso-de-exito">

      {/* ====== Título y subtítulo ====== */}
      <h2 className="underline-title">Beneficios concretos en tu planta</h2>
      <p id="Text-under-h2">Casos reales de éxito en la digitalización de plantas industriales</p>

      {/* ====== Círculos animados ====== */}
      <div className="casos-container">
        {casos.map(({ id, texto, numero, porcentaje }) => (
          <div key={id} className="caso-item">
            <CirculoProgreso
              porcentajeFinal={porcentaje}
              numeroCentral={numero}
              size={150}
              strokeWidth={10}
              color="var(--orange)"
              fondoColor="#eee"
              textoColor="var(--color-white)"
              duracion={2000}
            />
            <p>{texto}</p>
          </div>
        ))}
      </div>

      {/* ====== Ahorro anual ====== */}
      <h3 id="h3-text">Ahorro anual de U$S 11.094</h3>
      <p id="text-below-h2">* Caso de éxito de empresa argentina en 2024</p>

    </section>
  );
};

export default CasoDeExito;
