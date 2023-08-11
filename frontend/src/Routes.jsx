import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Cadastro from './Cadastro/Cadastro';
import Landing from './Landing/Landing';

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/criar-conta" element={<Cadastro />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
