import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  CadastroEmpresas,
  CadastroUsuario1,
  CadastroUsuario2,
  CadastroUsuario3,
  CadastroUsuario4,
  CadastroUsuario5,
  Comunidade,
  Configs,
  ConfigsAcessibilidade,
  ConfigsNotificacoes,
  ConfigsPersonalizacao,
  EscolhaDeConta,
  MensagensNotificacoes,
  MeuPerfil,
  Premium,
  TelaDeLogin,
  Vagas,
} from "./ui-components";
import Home from "./ui-components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Comunidade />} />
          <Route path="/" element={<Vagas />} />
          <Route path="/" element={<TelaDeLogin />} />
          <Route path="/" element={<Premium />} />
          <Route path="/" element={<MensagensNotificacoes />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<EscolhaDeConta />} />
          <Route path="/" element={<ConfigsPersonalizacao />} />
          <Route path="/" element={<ConfigsNotificacoes />} />
          <Route path="/" element={<Configs />} />
          <Route path="/" element={<ConfigsAcessibilidade />} />
          <Route path="/" element={<CadastroUsuario5 />} />
          <Route path="/" element={<CadastroUsuario4 />} />
          <Route path="/" element={<CadastroUsuario3 />} />
          <Route path="/" element={<CadastroUsuario2 />} />
          <Route path="/" element={<CadastroUsuario1 />} />
          <Route path="/" element={<CadastroEmpresas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
