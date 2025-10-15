import React from "react";
import "./Servicos.css";

const Servicos = () => {
  return (
    <div className="servicos-page">
      <h1>Serviços Especializados</h1>
      <p className="intro">
        Conheça nossas técnicas profissionais para estética e conservação de
        embarcações.
      </p>

      {/* Polimento Técnico */}
      <section className="servico-bloco">
        <h2>Polimento Técnico</h2>
        <p>
          Existem quatro principais técnicas de polimento: enceramento manual,
          polimento simples, polimento técnico e proteção com nanotecnologia.
        </p>
        <p>
          O polimento técnico é dividido em três fases: corte, refino e lustro.
          Recomendado semestralmente para embarcações escuras e anualmente para
          claras.
        </p>
        <p>
          A proteção com nanotecnologia utiliza ceras especiais que criam uma
          camada durável e preventiva, ideal até para embarcações novas.
        </p>
      </section>

      {/* Higienização Profunda */}
      <section className="servico-bloco">
        <h2>Higienização Profunda</h2>
        <p>
          Mau cheiro, ácaros e umidade são problemas comuns em barcos parados.
          Uma higienização apropriada da sua lancha ou veleiro é essencial para
          conservação e saúde.
        </p>
        <p>
          O processo exige maquinário e produtos específicos, como extratoras,
          pulverizadores, tornadores e detergentes apropriados. É um serviço
          técnico, realizado por profissionais especializados.
        </p>
        <p>
          Os locais mais críticos são banheiros, quartos e armários — ambientes
          fechados e úmidos que favorecem mofo e fungos. O tratamento pode
          incluir gás ozônio, um germicida natural que elimina fungos, vírus e
          mau cheiro.
        </p>
        <p>
          A recomendação é realizar essa higienização profunda antes do verão e
          a cada seis meses, além da manutenção mensal regular.
        </p>
        <div className="orcamento-box">
          <p>Solicite hoje um orçamento sem compromisso.</p>
          <a
            href="https://wa.me/554891450243?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20de%20estética%20náutica."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orcamento"
          >
            💬 Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
