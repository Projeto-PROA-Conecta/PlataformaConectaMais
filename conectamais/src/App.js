import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  BAIXO,
  CadastroEmpresas1,
  CadastroUsuario1,
  CadastroUsuario2,
  CadastroUsuario3,
  CadastroUsuario4,
  CadastroUsuario5,
  Configs,
  ConfigsAcessibilidade,
  ConfigsNotificacoes1,
  ConfigsPersonalizacao,
  EscolhaDeConta,
  Home1,
  Home2,
  MensagensNotificaes,
  MeuPerfil,
  Premium1,
  Premium2,
  TelaDeLogin,
  TesteHome1,
  TTela,
  Vagas1,
  Vagas2,
} from "./ui-components";
import Home6 from "./ui-components/Home6";

function App() {
  return (
    <Router> {/* O Router agora envolve toda a aplicação */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home1/>} />
          <Route path="/TelaDeLogin" element={<TelaDeLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
