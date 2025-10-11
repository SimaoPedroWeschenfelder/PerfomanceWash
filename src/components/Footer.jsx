import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rodape">
      <p>© 2025 PerformanceWash. Todos os direitos reservados.</p>

      <nav className="footer-links">
        <a
          href="https://www.instagram.com/performancewash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ marginRight: "10px" }} /> PerformanceWash
        </a>

        <a
          href="https://www.instagram.com/simao_weschenfelder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ marginRight: "10px" }} /> Desenvolvido por Simao
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
