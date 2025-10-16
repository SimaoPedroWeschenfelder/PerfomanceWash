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
      </section>
      {/*Proteçao com nano tecnologia */}
      <section className="servico-bloco">
        <h2>Proteçao com nano tecnologia</h2>
        <p>
          A aplicação de nanotecnologia cria uma camada protetora altamente
          resistente à água e à salinidade, retardando o desgaste da pintura e
          facilitando futuras limpezas. É ideal também para embarcações novas,
          servindo como uma barreira preventiva de longa duração.
        </p>
      </section>

      {/*Revitalizaçao Inox */}
      <section className="servico-bloco">
        <h2>Revitalizaçao Inox</h2>
        <p>
          A maresia e o tempo comprometem o brilho e a aparência dos metais. A
          revitalização de inox remove oxidação, manchas e pontos de corrosão,
          restaurando o aspecto original das peças e garantindo proteção contra
          a ferrugem. Indicada para guarda-mancebos, escadas, grades e
          acabamentos metálicos.
        </p>
      </section>
      {/*Pintura Náutica*/}
      <section className="servico-bloco">
        <h2>Pintura Náutica</h2>
        <p>
          Realizamos reparos e repintura de partes metálicas, de fibra ou
          madeira, utilizando tintas e vernizes náuticos de alta performance,
          resistentes à radiação UV e à água salgada. Ideal para recuperar a
          estética e prolongar a vida útil da embarcação.
        </p>
      </section>
      {/*Conserto da Casa de Máquinas*/}
      <section className="servico-bloco">
        <h2>Conserto da Casa de Máquinas</h2>
        <p>
          O sistema mecânico da embarcação exige cuidado constante. Oferecemos
          serviços de reparo e revitalização da casa de máquinas, incluindo
          limpeza técnica, repintura, revisão de suportes e adequação estética.
          O objetivo é manter o ambiente limpo, funcional e seguro, preservando
          o valor do barco.
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

      {/* Galeria Instagram */}
      <section className="galeria-instagram">
        <h2>Veja nossos serviços no Instagram</h2>
        <p>
          Acompanhe os bastidores, resultados e técnicas aplicadas pela
          Performance Wash.
        </p>

        <div className="instagram-embed">
          <iframe
            src="https://www.instagram.com/performancewash/embed"
            title="Instagram Performance Wash"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
          ></iframe>
        </div>

        <a
          href="https://www.instagram.com/performancewash/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-instagram"
        >
          Ver mais no Instagram
        </a>
      </section>
    </div>
  );
};

export default Servicos;
