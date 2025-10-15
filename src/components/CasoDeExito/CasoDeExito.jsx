import React from "react";
import "../CasoDeExito/CasoDeExito.css"

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";

const casos = [
  { id: 1, img: img1, texto: "Trazabilidad de órdenes digitales en tiempo real" },
  { id: 2, img: img2, texto: "Reposición de fotopolímeros/clichés" },
  { id: 3, img: img3, texto: "Confiabilidad del inventario y su ubicación" },
  { id: 4, img: img4, texto: "Minutos para la carga de partes diarios" },
];

const CasoDeExito = () => {
  return (
    <section id="caso-de-exito" className="caso-de-exito">
      <h2 className="underline-title">Caso de Éxito</h2>

      <div className="casos-container">
        {casos.map(({ id, img, texto }) => (
          <div key={id} className="caso-item">
            <img src={img} alt={texto} className="caso-imagen" />
            <p>{texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasoDeExito;