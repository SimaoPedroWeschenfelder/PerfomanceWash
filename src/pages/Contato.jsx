import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import "./Contato.css";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h2>Fale Conosco</h2>
      <p className="descricao">
        Estamos prontos para atender você com excelência. Entre em contato pelos
        nossos canais oficiais ou venha nos visitar.
      </p>

      <div className="contato-links">
        <a
          href="https://wa.me/554891450243?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="contato-btn whatsapp"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </a>

        <a
          href="https://www.facebook.com/rafael.weschenfelder.54"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-btn facebook"
        >
          <FaFacebook size={20} />
          Facebook
        </a>

        <a
          href="https://www.instagram.com/performancewash"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-btn instagram"
        >
          <FaInstagram size={20} />
          Instagram
        </a>
      </div>

      <div className="info-extra">
        <p>
          <FaMapMarkerAlt /> Rua das Embarcações, 123 – Florianópolis, SC
        </p>
        <p>
          <FaClock /> Atendimento: Segunda a sexta, das 8h às 18h
        </p>
        <p>Sábado das 8 às 12 h</p>
      </div>

      <div className="orcamento-box">
        <p>
          Solicite um orçamento sem compromisso e descubra como podemos cuidar
          da sua embarcação com excelência.
        </p>
        <a
          href="https://wa.me/554891450243?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-orcamento"
        >
          💬 Solicitar Orçamento
        </a>
      </div>
    </section>
  );
};

export default Contato;
