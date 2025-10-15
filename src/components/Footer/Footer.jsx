import React from "react";
import "../Footer/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Equi System. All rights reserved.</p>
      <div className="social-media">
        <a 
          href="http://instagram.com/equi_system/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://ar.linkedin.com/company/equi-system" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <CiLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
