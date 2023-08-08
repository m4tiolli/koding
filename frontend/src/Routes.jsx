import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Cadastro from './Cadastro/Cadastro';

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/criar-conta" element={<Cadastro />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
