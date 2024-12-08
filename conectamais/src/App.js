import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NovaHome, TelaDeLogin } from "./ui-components";
import Home from "./ui-components/Home";

function App() {
  return (
    <Router>
      {" "}
      {/* O Router agora envolve toda a aplicação */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TelaDeLogin" element={<TelaDeLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
