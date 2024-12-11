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
      {" "}
      {/* O Router agora envolve toda a aplicação */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Comunidade />} />
          <Route path="/TelaDeLogin" element={<TelaDeLogin />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
