import { Link } from "react-router-dom";

function App() {
  return (
    <header className="header">
      <img src="/tumb.png" alt="PerformanceWash" className="logo" />
    </header>
  );
}

<nav className="menu">
  <Link to="/sobre">Sobre Nós</Link>
  <Link to="/servicos">Serviços</Link>
  <Link to="/feedbacks">Feedbacks</Link>
  <Link to="/contato">Contato</Link>
</nav>;
