import React, { useEffect } from "react";
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

// Páginas
import Home from "./pages/Homes";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";
import Feedbacks from "./pages/Feedbacks";
import Contato from "./pages/Contato";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isReload =
      window.performance.getEntriesByType("navigation")[0]?.type === "reload";
    const alreadyRedirected = sessionStorage.getItem("redirected");

    if (isReload && location.pathname !== "/" && !alreadyRedirected) {
      sessionStorage.setItem("redirected", "true");
      navigate("/");
    }
  }, [location, navigate]);

  return (
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
