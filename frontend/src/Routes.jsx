import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from './Screens/Landing/Landing';
import Cadastro from './Screens/Cadastro/Cadastro';
import Login from './Screens/Login/Login';
import Materiais from './Screens/Materiais/Materiais';
import Home from "./Screens/Home/Home";
import Aulas from "./Screens/Aulas/Aulas";
import Ajuda from "./Screens/Ajuda/Ajuda";


function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/criar-conta" element={<Cadastro />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/materiais" element={<Materiais />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aulas" element={<Aulas />} />
        <Route exact path="/ajuda" element={<Ajuda />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
