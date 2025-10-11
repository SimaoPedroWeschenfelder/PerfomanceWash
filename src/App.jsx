import React from "react";
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Páginas
import Home from "./pages/Homes";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";
import Feedbacks from "./pages/Feedbacks";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <img src="/tumb.png" alt="PerformanceWash" className="logo" />
          <nav className="menu">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/feedbacks">Feedbacks</Link>
            <Link to="/contato">Contato</Link>
          </nav>
          <WhatsAppButton />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
