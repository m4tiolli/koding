import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from './Screens/Landing/Landing';
import Cadastro from './Screens/Cadastro/Cadastro';
import Login from './Screens/Login/Login';
import Materiais from './Screens/Materiais/Materiais';
import Home from "./Screens/Home/Home";
import Aulas from "./Screens/Aulas/Aulas";
import Perfil from "./Screens/Perfil/Perfil";
import Ajuda from "./Screens/Ajuda/Ajuda";
import Aprender from "./Screens/Aprender/Aprender";
import Configuracao from "./Screens/Configuracao/Configuracao";
import Flexbox from "./Screens/Jogos/Flexbox/Flexbox";
import Desempenho from "./Screens/Desempenho/Desempenho";
import ConfiguracaoR from "./Screens/ConfiguracaoR/ConfiguracaoR";
import HomeR from "./Screens/HomeR/HomeR";
import PerfilR from "./Screens/PerfilR/PerfilR";
import CadastroCrianca from "./Screens/CadastroCrianca/CadastroCrianca";
import Desafios from "./Screens/Desafios/Desafios";
import Conteudo from "./Screens/Conteudo/Conteudo";


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
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/ajuda" element={<Ajuda />} />
        <Route exact path="/aprender" element={<Aprender />} />
        <Route exact path="/configuracao" element={<Configuracao />} /> 
        <Route exact path="/flexbox" element={<Flexbox />} /> 
        <Route exact path="/desempenho" element={<Desempenho />} /> 
        <Route exact path="/pais/configuracao" element={<ConfiguracaoR />} /> 
        <Route exact path="/pais/home" element={<HomeR />} /> 
        <Route exact path="/pais/perfil" element={<PerfilR />} /> 
        <Route exact path="/pais/criar-conta" element={<CadastroCrianca />} /> 
        <Route exact path="/desafios" element={<Desafios />} /> 
        <Route exact path="/conteudo" element={<Conteudo />} /> 

      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
