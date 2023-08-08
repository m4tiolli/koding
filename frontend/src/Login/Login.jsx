import "./Login.css";
import logo from "../assets/logo.png";
import elipse1 from "../assets/elipse1.png";
import elipse2 from "../assets/elipse2.png";
import elipse3 from "../assets/elipse3.png";
import logoa from "../assets/logoa.png";
import elipse1a from "../assets/elipse1a.png";
import elipse2a from "../assets/elipse2a.png";
import elipse3a from "../assets/elipse3a.png";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
  const [isResponsavel, setIsResponsavel] = useState(false);
  const [isPassVisible, setPassVisible] = useState(false);

  const TogglePassVisible = () => {
    setPassVisible(!isPassVisible)
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: isResponsavel
          ? "linear-gradient(108deg, #C6D6FF 0%, #FFF 100%)"
          : "linear-gradient(108deg, #e5c6ff 0%, #fff 100%)",
      }}
    >
      <img
        className="svg topleft"
        src={isResponsavel ? elipse2a : elipse2}
        alt=""
      />
      <img
        className="svg botleft"
        src={isResponsavel ? elipse1a : elipse1}
        alt=""
      />
      <img
        className="svg botright"
        src={isResponsavel ? elipse3a : elipse3}
        alt=""
      />
      <div className="logotitle">
        <img src={isResponsavel ? logoa : logo} alt="" className="logo" />
        <p className="titlelogo">Faça seu login</p>
      </div>
      <div className="block">
        <div className="buttons">
          <button
            className={
              isResponsavel ? "button btnresponsavel" : "button btncrianca"
            }
            onClick={() => setIsResponsavel(false)}
          >
            Criança
          </button>
          <button
            className={
              isResponsavel ? "button btnresponsavel" : "button btncrianca"
            }
            onClick={() => setIsResponsavel(true)}
          >
            Responsável
          </button>
        </div>
        <div className={isResponsavel ? "form responsavel" : "form crianca"}>
          <input type="text" className="input" placeholder="E-mail" />
          <div className="senha">
            <input type={isPassVisible ? "text" : "password"} className="input password" placeholder="Senha" />
            {isPassVisible ? <AiFillEyeInvisible className="eye" onClick={TogglePassVisible} /> : <AiFillEye className="eye" onClick={TogglePassVisible} />}
          </div>
          <button className="buttonform">Entrar</button>
          <p className="sublink">Não tem conta?
            <Link to={"/criar-conta"} className={
              isResponsavel ? "link linkresponsavel" : "link linkcrianca"
            }>
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
