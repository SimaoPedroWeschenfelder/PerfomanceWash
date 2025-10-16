import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/performancewash/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/rafael.weschenfelder.54"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/554891450243?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Performance%20Wash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      <p className="copyright">Copyright © 2023 Performance Wash</p>
      <p className="dev-credit">
        Developed by{" "}
        <a
          href="https://www.instagram.com/simao_weschenfelder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simão P. Weschenfelder
        </a>
      </p>

      <div className="get-in-touch">
        <a href="/contato">Fale conosco</a>
      </div>
    </footer>
  );
};

export default Footer;
