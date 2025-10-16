import React from "react";
import "../Footer/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} EquiSystem. All rights reserved.</p>
      <div className="social-media">
        <a 
          href="https://ar.linkedin.com/company/equi-system" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <CiLinkedin />
        </a>
        <a 
          href="https://www.facebook.com/equisystemargentina" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a 
          href="http://instagram.com/equi_system/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
