import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import BackgroundCircles from "../assets/BackgroundCircles";
import Logo from "../assets/Logo";

function Login() {
  const [isResponsavel, setIsResponsavel] = useState(false);
  const [isPassVisible, setPassVisible] = useState(false);

  const TogglePassVisible = () => {
    setPassVisible(!isPassVisible)
  }

  return (
    <div
      className="absolute w-full h-full z-20 flex items-center justify-center"
      style={{
        backgroundImage: isResponsavel
          ? "linear-gradient(108deg, #C6D6FF 0%, #FFF 100%)"
          : "linear-gradient(108deg, #e5c6ff 0%, #fff 100%)",
      }}
    >
      <BackgroundCircles isResponsavel={isResponsavel} />
      <div className="logotitle z-20 h-full w-1/3 flex items-center justify-center flex-col">
        <Logo isResponsavel={isResponsavel} />

        <p className="titlelogo">Faça seu login</p>
      </div>
      <div className="block z-20 h-full w-2/3">
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
