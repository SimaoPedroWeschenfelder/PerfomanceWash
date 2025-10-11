import React from "react";
import "./Feedbacks.css";
const Feedbacks = () => {
  return (
    <section className="feedbacks">
      <h2>Depoimentos</h2>
      <div className="feedback-card">
        <p>"Serviço impecável! Meu barco parece novo. Recomendo demais!"</p>
        <span>— João, cliente de Porto Alegre</span>
      </div>
      <div className="feedback-card">
        <p>"Atendimento rápido e profissional. Voltarei com certeza."</p>
        <span>— Marina, cliente de Tramandaí</span>
      </div>
    </section>
  );
};

export default Feedbacks;
