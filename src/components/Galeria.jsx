import React, { useState, useEffect } from "react";
import "./Galeria.css";

const imagens = [
  "/roll.jpg",
  "/roll2.jpg",
  "/roll3.jpg",
  "/roll4.jpg",
  "/roll5.jpg",
  "/roll6.jpg",
  "/roll7.jpg",
];

const Galeria = () => {
  const [fotoAtual, setFotoAtual] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);

  // Autoplay: troca de imagem a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoAtual((prev) => (prev + 1) % imagens.length);
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(intervalo); // limpa intervalo ao desmontar
  }, []);

  const abrirModal = (index) => {
    setFotoAtual(index);
    setModalAberto(true);
  };

  const fecharModal = () => setModalAberto(false);

  const proxima = () => setFotoAtual((fotoAtual + 1) % imagens.length);
  const anterior = () =>
    setFotoAtual((fotoAtual - 1 + imagens.length) % imagens.length);

  return (
    <div className="galeria">
      <h2>Galeria de Serviços</h2>

      {/* Imagem destaque com autoplay */}
      <img
        src={imagens[fotoAtual]}
        alt={`Imagem ${fotoAtual + 1}`}
        className="imagem-destaque"
        onClick={() => abrirModal(fotoAtual)}
      />

      {/* Pontinhos indicadores */}
      <div className="pontinhos">
        {imagens.map((_, index) => (
          <span
            key={index}
            className={`ponto ${index === fotoAtual ? "ativo" : ""}`}
            onClick={() => abrirModal(index)}
          ></span>
        ))}
      </div>

      {/* Modal com navegação */}
      {modalAberto && (
        <div className="modal">
          <span className="fechar" onClick={fecharModal}>
            ×
          </span>
          <button className="seta esquerda" onClick={anterior}>
            ‹
          </button>
          <img
            src={imagens[fotoAtual]}
            alt={`Serviço ${fotoAtual + 1}`}
            className="foto-ampliada"
          />
          <button className="seta direita" onClick={proxima}>
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Galeria;
