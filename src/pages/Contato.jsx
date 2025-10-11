import React from "react";
import "./Contato.css";
const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h2>Fale Conosco</h2>
      <p>
        Entre em contato pelo WhatsApp ou Instagram para agendar seu
        atendimento.
      </p>
      <a
        href="https://wa.me/5591999998888?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-contato"
      >
        WhatsApp PerformanceWash
      </a>
    </section>
  );
};

export default Contato;
