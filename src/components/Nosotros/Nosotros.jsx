import React, { useEffect, useRef, useState } from 'react';
import "../Nosotros/Nosotros.css";

const Nosotros = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      }, 
      { threshold: 0.3 }
    );

    if(ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="esencia" 
      className={`nuestra-esencia ${visible ? 'visible' : ''}`} 
      ref={ref}
    >
      <h2 className="titulo">Único sistema desarrollado por ingenieros y expertos del rubro</h2>
      <p>
        Nuestra historia comienza con una consultoría en el sector del packaging. De una simple planilla de cálculos nació un ERP/MES integral, modular y escalable.
        EquiSystem es un sistema que integra todos los procesos de la producción, especializado en convertidores, gráficas y empresas de envases.
      </p>
    </section>
  );
};

export default Nosotros;
