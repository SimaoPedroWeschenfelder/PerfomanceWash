import React from "react";
import Galeria from "../components/Galeria";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <Galeria />
        <h1>Estética Náutica com Alto Padrão</h1>
        <p>
          Lavagem, polimento e revitalização para embarcações que merecem
          excelência.
        </p>
        <a href="/servicos" className="btn-servicos">
          Conheça nossos serviços
        </a>
      </section>

      <section className="servicos">
        <h2>Serviços</h2>
        <p className="text">
          Performance Wash - Estética Náutica & Automotiva. Especialistas em
          estética de embarcações e veículos, oferecemos serviços de polimento
          técnico, proteção de pintura, higienização e manutenção completa.
          Atendemos com produtos premium e tecnologia de ponta para garantir
          brilho, durabilidade e proteção tanto no mar quanto na estrada.
        </p>
        <p className="text">
          Para garantir sua satisfação, a Performance Wash trabalha com produtos
          e máquinas aprovadas pela ANVISA e INMETRO. Assim conseguimos
          higienizar sem desbotar ou desgastar, dando uma vida útil mais longa.
        </p>
      </section>

      <section className="servico-final">
        <div className="imagem-container">
          <img
            src="/expo.jpg"
            alt="Serviço em embarcação"
            className="imagem-full"
          />
          <div className="overlay">
            <a
              href="https://wa.me/554891450243?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20de%20estética%20náutica."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orcamento"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
