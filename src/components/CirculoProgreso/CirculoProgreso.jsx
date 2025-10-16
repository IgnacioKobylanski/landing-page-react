import React, { useState, useEffect, useRef } from "react";

const CirculoProgreso = ({
  porcentajeFinal = 75,
  duracion = 2000,
  size = 150,
  strokeWidth = 10,
  color = "var(--orange)",
  fondoColor = "var(--gray-blue)",
  textoColor = "var(--color-white)",
  numeroCentral, // ej: "100%", "60%", "95%", "83%"
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [numeroAnimado, setNumeroAnimado] = useState(0);
  const [colorTexto, setColorTexto] = useState(textoColor);
  const ref = useRef();
  const intervalRef = useRef();

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Extrae solo el número, elimina signos y espacios
  const numeroFinal = Number(numeroCentral.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearInterval(intervalRef.current);
          setPorcentaje(0);
          setNumeroAnimado(0);
          setColorTexto(textoColor);

          let start = 0;
          const incremento = numeroFinal / (duracion / 20);

          intervalRef.current = setInterval(() => {
            start += incremento;
            if (start >= numeroFinal) {
              start = numeroFinal;
              clearInterval(intervalRef.current);
              setColorTexto("var(--orange)");
            }
            setPorcentaje((start / numeroFinal) * porcentajeFinal);
            setNumeroAnimado(Math.round(start));
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [numeroFinal, porcentajeFinal, duracion, textoColor]);

  return (
    <svg ref={ref} width={size} height={size}>
      {/* Fondo */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={fondoColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Progreso */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (porcentaje / 100) * circumference}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      {/* Texto central */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size * 0.25}
        fill={colorTexto}
      >
        {numeroAnimado}%
      </text>
    </svg>
  );
};

export default CirculoProgreso;
