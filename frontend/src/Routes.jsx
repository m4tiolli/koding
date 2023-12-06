import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import Cadastro from "./Screens/Cadastro/Cadastro";
import Login from "./Screens/Login/Login";
import Materiais from "./Screens/Materiais/Materiais";
import Home from "./Screens/Home/Home";
import Aulas from "./Screens/Aulas/Aulas";
import Perfil from "./Screens/Perfil/Perfil";
import Ajuda from "./Screens/Ajuda/Ajuda";
import Aprender from "./Screens/Aprender/Aprender";
import Configuracao from "./Screens/Configuracao/Configuracao";
import Flexbox from "./Screens/Jogos/Flexbox/Flexbox";
import Sentenca from "./Screens/Jogos/Sentenca/Sentenca";
import Input from "./Screens/Jogos/Input/Input";
import Quiz from "./Screens/Jogos/Quiz/Quiz";
import Desempenho from "./Screens/Desempenho/Desempenho";
import ConfiguracaoR from "./Screens/ConfiguracaoR/ConfiguracaoR";
import HomeR from "./Screens/HomeR/HomeR";
import PerfilR from "./Screens/PerfilR/PerfilR";
import CadastroCrianca from "./Screens/CadastroCrianca/CadastroCrianca";
import Desafios from "./Screens/Desafios/Desafios";
import Hc1a1 from "./Screens/Conteudo/HTML/cap1/aula1/hc1a1";
import Hc1a2 from "./Screens/Conteudo/HTML/cap1/aula2/hc1a2";
import Hc1a3 from "./Screens/Conteudo/HTML/cap1/aula3/hc1a3";
import Hc2a1 from "./Screens/Conteudo/HTML/cap2/aula1/hc2a1";
import Hc2a2 from "./Screens/Conteudo/HTML/cap2/aula2/hc2a2";
import Hc2a3 from "./Screens/Conteudo/HTML/cap2/aula3/hc2a3";
import Hc3a1 from "./Screens/Conteudo/HTML/cap3/aula1/hc3a1";
import Hc3a2 from "./Screens/Conteudo/HTML/cap3/aula2/hc3a2";
import Hc3a3 from "./Screens/Conteudo/HTML/cap3/aula3/hc3a3";
import Cc1a1 from "./Screens/Conteudo/CSS/cap1/aula1/cc1a1";
import Cc1a2 from "./Screens/Conteudo/CSS/cap1/aula2/cc1a2";
import Cc1a3 from "./Screens/Conteudo/CSS/cap1/aula3/cc1a3";
import Cc2a1 from "./Screens/Conteudo/CSS/cap2/aula1/cc2a1";
import Cc2a2 from "./Screens/Conteudo/CSS/cap2/aula2/cc2a2";
import Cc2a3 from "./Screens/Conteudo/CSS/cap2/aula3/cc2a3";
import Cc3a1 from "./Screens/Conteudo/CSS/cap3/aula1/cc3a1";
import Cc3a2 from "./Screens/Conteudo/CSS/cap3/aula2/cc3a2";
import Cc3a3 from "./Screens/Conteudo/CSS/cap3/aula3/cc3a3";
import Jc1a1 from "./Screens/Conteudo/JS/cap1/aula1/jc1a1";
import Jc1a2 from "./Screens/Conteudo/JS/cap1/aula2/jc1a2";
import Jc1a3 from "./Screens/Conteudo/JS/cap1/aula3/jc1a3";
import Jc2a1 from "./Screens/Conteudo/JS/cap2/aula1/jc2a1";
import Jc2a2 from "./Screens/Conteudo/JS/cap2/aula2/jc2a2";
import Jc2a3 from "./Screens/Conteudo/JS/cap2/aula3/jc2a3";
import Jc3a1 from "./Screens/Conteudo/JS/cap3/aula1/jc3a1";
import Jc3a2 from "./Screens/Conteudo/JS/cap3/aula2/jc3a2";
import Jc3a3 from "./Screens/Conteudo/JS/cap3/aula3/jc3a3";
import Pc1a1 from "./Screens/Conteudo/PHP/cap1/aula1/pc1a1";
import Pc1a2 from "./Screens/Conteudo/PHP/cap1/aula2/pc1a2";
import Pc1a3 from "./Screens/Conteudo/PHP/cap1/aula3/pc1a3";
import Pc2a1 from "./Screens/Conteudo/PHP/cap2/aula1/pc2a1";
import Pc2a2 from "./Screens/Conteudo/PHP/cap2/aula2/pc2a2";
import Pc2a3 from "./Screens/Conteudo/PHP/cap2/aula3/pc2a3";
import Pc3a1 from "./Screens/Conteudo/PHP/cap3/aula1/pc3a1";
import Pc3a2 from "./Screens/Conteudo/PHP/cap3/aula2/pc3a2";
import Pc3a3 from "./Screens/Conteudo/PHP/cap3/aula3/pc3a3";
import SelectCrianca from "./Screens/SelectCrianca/SelectCrianca";
import Flexbox2 from "./Screens/Jogos/Flexbox/Flexbox2";
import RecuperarSenha from "./Screens/RecuperarSenha/RecuperarSenha";

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
        <Route exact path="/flexbox/nivel2" element={<Flexbox2 />} />
        <Route exact path="/sentenca" element={<Sentenca />} />
        <Route exact path="/input" element={<Input />} />;
        <Route exact path="/quiz" element={<Quiz />} />;
        <Route exact path="/desempenho" element={<Desempenho />} />
        <Route exact path="/pais/configuracao" element={<ConfiguracaoR />} />
        <Route exact path="/pais/home" element={<HomeR />} />
        <Route exact path="/pais/perfil" element={<PerfilR />} />
        <Route exact path="/pais/criar-conta" element={<CadastroCrianca />} />
        <Route exact path="/desafios" element={<Desafios />} />
        <Route exact path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route exact path="/pais/selecionar" element={<SelectCrianca />} />
        <Route exact path="/aulas/html/cap1/aula0" element={<Hc1a1 />} />
        <Route exact path="/aulas/html/cap1/aula1" element={<Hc1a2 />} />
        <Route exact path="/aulas/html/cap1/aula2" element={<Hc1a3 />} />
        <Route exact path="/aulas/html/cap2/aula0" element={<Hc2a1 />} />
        <Route exact path="/aulas/html/cap2/aula1" element={<Hc2a2 />} />
        <Route exact path="/aulas/html/cap2/aula2" element={<Hc2a3 />} />
        <Route exact path="/aulas/html/cap3/aula0" element={<Hc3a1 />} />
        <Route exact path="/aulas/html/cap3/aula1" element={<Hc3a2 />} />
        <Route exact path="/aulas/html/cap3/aula2" element={<Hc3a3 />} />
        <Route exact path="/aulas/css/cap1/aula0" element={<Cc1a1 />} />
        <Route exact path="/aulas/css/cap1/aula1" element={<Cc1a2 />} />
        <Route exact path="/aulas/css/cap1/aula2" element={<Cc1a3 />} />
        <Route exact path="/aulas/css/cap2/aula0" element={<Cc2a1 />} />
        <Route exact path="/aulas/css/cap2/aula1" element={<Cc2a2 />} />
        <Route exact path="/aulas/css/cap2/aula2" element={<Cc2a3 />} />
        <Route exact path="/aulas/css/cap3/aula0" element={<Cc3a1 />} />
        <Route exact path="/aulas/css/cap3/aula1" element={<Cc3a2 />} />
        <Route exact path="/aulas/css/cap3/aula2" element={<Cc3a3 />} />
        <Route exact path="/aulas/javascript/cap1/aula0" element={<Jc1a1 />} />
        <Route exact path="/aulas/javascript/cap1/aula1" element={<Jc1a2 />} />
        <Route exact path="/aulas/javascript/cap1/aula2" element={<Jc1a3 />} />
        <Route exact path="/aulas/javascript/cap2/aula0" element={<Jc2a1 />} />
        <Route exact path="/aulas/javascript/cap2/aula1" element={<Jc2a2 />} />
        <Route exact path="/aulas/javascript/cap2/aula2" element={<Jc2a3 />} />
        <Route exact path="/aulas/javascript/cap3/aula0" element={<Jc3a1 />} />
        <Route exact path="/aulas/javascript/cap3/aula1" element={<Jc3a2 />} />
        <Route exact path="/aulas/javascript/cap3/aula2" element={<Jc3a3 />} />
        <Route exact path="/aulas/php/cap1/aula0" element={<Pc1a1 />} />
        <Route exact path="/aulas/php/cap1/aula1" element={<Pc1a2 />} />
        <Route exact path="/aulas/php/cap1/aula2" element={<Pc1a3 />} />
        <Route exact path="/aulas/php/cap2/aula0" element={<Pc2a1 />} />
        <Route exact path="/aulas/php/cap2/aula1" element={<Pc2a2 />} />
        <Route exact path="/aulas/php/cap2/aula2" element={<Pc2a3 />} />
        <Route exact path="/aulas/php/cap3/aula0" element={<Pc3a1 />} />
        <Route exact path="/aulas/php/cap3/aula1" element={<Pc3a2 />} />
        <Route exact path="/aulas/php/cap3/aula2" element={<Pc3a3 />} />

      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
