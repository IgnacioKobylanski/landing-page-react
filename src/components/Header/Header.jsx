import React,{useState} from 'react';
import logo from "../../assets/equisys_logo.png";
import '../Header/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar" id='navb'>

      <div className="nav_logo"> <img src={logo} alt="Logo" />
      </div>

      <div className={`nav_items ${isOpen && "open"}`} >
  <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
  <a href="#esencia" onClick={() => setIsOpen(false)}>Nuestra Esencia</a>
  <a href="#funcionalidades" onClick={() => setIsOpen(false)}>Funcionalidades</a>
  <a href="#caracteristicas" onClick={() => setIsOpen(false)}>Características</a>
  <a href="#otras" onClick={() => setIsOpen(false)}>Otras Funciones</a>
  <a href="#soluciones" onClick={() => setIsOpen(false)}>Soluciones</a>
  <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
</div>

      <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
