import React from "react";
import "./Feedbacks.css";

const Feedbacks = () => {
  return (
    <section className="feedbacks-page">
      <h1>Depoimentos Visuais</h1>
      <p className="intro">
        Acompanhe os resultados reais dos nossos serviços em embarcações e
        veículos.
      </p>

      <div className="feedbacks-grid">
        {/* Fotos reais */}
        <img src="/feedback.jpg" alt="Serviço realizado 1" />
        <img src="/feedback2.jpg" alt="Serviço realizado 2" />
        <img src="/feedback3.jpg" alt="Serviço realizado 3" />
        <img src="/feedback4.jpg" alt="Serviço realizado 3" />
        <img src="/feedback5.jpg" alt="Serviço realizado 3" />
        <img src="/feedback6.jpg" alt="Serviço realizado 3" />
        <img src="/feedback7.jpg" alt="Serviço realizado 3" />
        <img src="/feedback8.jpg" alt="Serviço realizado 3" />

        {/* Vídeos locais */}
        <video src="/fedback.mp4" controls />
        <video src="/fedbak2.mp4" controls />
      </div>

      <p className="compromisso">
        Cada serviço é realizado com atenção aos detalhes e respeito ao que mais
        importa: a satisfação de quem confia na Performance Wash.
      </p>
    </section>
  );
};

export default Feedbacks;
