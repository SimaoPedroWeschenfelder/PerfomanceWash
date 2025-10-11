import React from "react";
import "./App.css"; // Estilos personalizados
import WhatsAppButton from "./components/WhatsAppButton";
import Galeria from "./components/Galeria";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src="/tumb.png" alt="PerformanceWash" className="logo" />
        <nav>
          <a href="#sobre">Sobre Nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>

        <WhatsAppButton />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <Galeria />
        <h1>Estética Náutica com Alto Padrão</h1>
        <p>
          Lavagem, polimento e revitalização para embarcações que merecem
          excelência.
        </p>
        <a href="#servicos" className="btn-servicos">
          Conheça nossos serviços
        </a>
      </section>

      {/* Breve descrição dos serviços */}
      <section id="servicos" className="servicos">
        <h2>Serviços</h2>
        <p className="text">
          Performance Wash - Estética Náutica & Automotiva Especialistas em
          estética de embarcações e veículos, oferecemos serviços de polimento
          técnico, proteção de pintura, higienização e manutenção completa.
          Atendemos com produtos premium e tecnologia de ponta para garantir
          brilho, durabilidade e proteção tanto no mar quanto na estrada.
          <p className="text">
            Para garantir a sua satisfação a Performance Wash, trabalha com
            produtos e maquinas aprovadas pela ANVISA e INMETRO, assim
            conseguimos higienizar sem desbotar ou desgastar, dando uma vida
            útil mais longa.
          </p>
        </p>
      </section>

      {/* Foto de serviço + botão */}

      <section className="servico-final">
        <img
          src="/expo.jpg" // Substitua pelo nome da imagem que você quer usar
          alt="Serviço em embarcação"
          className="imagem-servico"
        />
        <a href="#orcamento" className="btn-orcamento-azul">
          Solicitar Orçamento
        </a>
      </section>

      {/* Rodapé */}
      <footer className="rodape">
        <p>© 2025 PerformanceWash. Todos os direitos reservados.</p>
        <nav>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Instagram</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
