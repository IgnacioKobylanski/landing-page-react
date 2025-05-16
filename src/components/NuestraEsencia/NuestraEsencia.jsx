import React, { useEffect, useRef, useState } from 'react';
import "../NuestraEsencia/NuestraEsencia.css";

const NuestraEsencia = () => {
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
      <h2 className="titulo">Nuestra Esencia</h2>
      <p>
        Creamos plataformas de gestión de negocios simples de operar, de alto impacto en los resultados, 
        tanto operacionales como económicos, y que promueven una excelente comunicación con sus usuarios.
      </p>
    </section>
  );
};

export default NuestraEsencia;
