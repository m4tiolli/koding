import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Cadastro from './Cadastro/Cadastro';
import Landing from './Landing/Landing';
import Materiais from './Materiais/Materiais';

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/criar-conta" element={<Cadastro />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/materiais" element={<Materiais />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
