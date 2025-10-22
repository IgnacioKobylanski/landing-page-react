import React from "react";
import { FaPhone, FaEnvelope, FaUserTie } from "react-icons/fa";
import "../Contancto/Contacto.css"

const contactos = [
  {
    nombre: "Ezequiel Iglicki - Socio Gerente",
    telefono: "+54 11 5756 5321",
    email: "eiglicki@equisystem.com.ar",
  },
  {
    nombre: "Diego Micozzi - Comercial Argentina",
    telefono: "+54 11 7631 8713",
    email: "dmicozzi@equisystem.com.ar",
  },
  {
    nombre: "Tomas Pereyra - Comercial LATAM",
    telefono: "+54 11 3174 8554",
    email: "tpereyra@equisystem.com.ar",
  },
];

const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <h2 id="contact-title">¿Listo para transformar tu producción?</h2>
      <p id="p-contact">Contacta con un ejecutivo comercial para coordinar una charla con nuestros expertos</p>
      <div className="contacto-lista">
        {contactos.map((c, i) => (
          <div className="contacto-item" key={i}>
            <FaUserTie size={24} className="icon" />
            <div className="contacto-detalle">
              <p className="nombre">{c.nombre}</p>
              <p>
                <FaPhone className="icon-small" />{" "}
                <a href={`tel:${c.telefono.replace(/\s+/g, "")}`}>
                  {c.telefono}
                </a>
              </p>
              <p>
                <FaEnvelope className="icon-small" />{" "}
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacto;
