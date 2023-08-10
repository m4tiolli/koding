import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import BackgroundCircles from "../assets/BackgroundCircles";
import Logo from "../assets/Logo";
import './Login.css'

function Login() {
  const [isResponsavel, setIsResponsavel] = useState(false);
  const [isPassVisible, setPassVisible] = useState(false);

  const TogglePassVisible = () => {
    setPassVisible(!isPassVisible)
  }

  return (
    <div
      className="absolute w-full h-full z-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: isResponsavel
          ? "linear-gradient(108deg, #C6D6FF 0%, #FFF 100%)"
          : "linear-gradient(108deg, #e5c6ff 0%, #fff 100%)",
      }}
    >
      <BackgroundCircles isResponsavel={isResponsavel} />
      <div className="logotitle z-20 h-full w-1/4 m-auto flex items-center justify-center flex-col">
        <Logo isResponsavel={isResponsavel} />

        <p className="text-7xl text-cinza font-bold">Faça seu login</p>
      </div>
      <div className="z-20 h-full w-2/3 flex items-center justify-center flex-col relative">
        <div className="absolute top-16 w-2/5 justify-evenly flex items-center">
          <button
            className={
              `text-2xl font-bold text-cinza hover:opacity-80 after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${!isResponsavel ? "after:bg-cinza" : "after:bg-transparent"}`
            }
            onClick={() => setIsResponsavel(false)}
          >
            Criança
          </button>
          <button
            className={
              `text-2xl font-bold text-cinza hover:opacity-80 after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${isResponsavel ? "after:bg-cinza" : "after:bg-transparent"}`
            }
            onClick={() => setIsResponsavel(true)}
          >
            Responsável
          </button>
        </div>
        <div className={`${isResponsavel ? "before:bg-verdeclaro bg-verde" : "before:bg-roxoclaro bg-roxo"} z-10 relative w-40vw h-35vh rounded-2xl flex flex-col items-center justify-center before:block before:absolute before:top-0 before:content-[' '] before:w-40vw before:h-35vh before:rotate-[-8deg] before:radius-x before:-z-50 before:shadow-lg shadow-lg before:rounded-2xl`}>
          <input type="text" className="bg-input px-10 py-5 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black my-8 outline-0 text-cinza" placeholder="E-mail" />
          <div className="bg-input px-10 py-5 w-3/4 placeholder:opacity-70 rounded-lg text-xl flex items-center justify-between">
            <input type={isPassVisible ? "text" : "password"} className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-black text-cinza" placeholder="Senha" />
            {isPassVisible ? <AiFillEyeInvisible className="text-2xl text-cinza cursor-pointer" onClick={TogglePassVisible} /> : <AiFillEye className="text-2xl text-cinza cursor-pointer" onClick={TogglePassVisible} />}
          </div>
          <button className="bg-input rounded-xl w-2/5 h-16 my-8 text-xl text-cinza">Entrar</button>
          <p className=" text-xl">Não tem conta?
            <Link to={"/criar-conta"} className={`${isResponsavel ? "linkresponsavel" : "linkcrianca"} cursor-pointer`
            }>
              &nbsp;Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
