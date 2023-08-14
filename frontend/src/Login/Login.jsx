import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import BackgroundCircles from "../assets/BackgroundCircles";
import Logo from "../assets/Logo";
import './Login.css'

function Login() {
  const [isResponsavel, setIsResponsavel] = useState(false);
  const [isPassVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginError, setLoginError] = useState(null);

  const TogglePassVisible = () => {
    setPassVisible(!isPassVisible);
  }

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3005/${isResponsavel ? "responsavel" : "crianca"}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        console.log("Login efetuado")
      } else {
        const data = await response.json();
        setLoginError(data.error);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

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
        <div className="w-2/5 h-1/4 justify-evenly flex items-center">
          <button
            className={
              `text-2xl font-bold text-cinza hover:opacity-80 active:translate-y-1 active:shadow-inner px-3 py2 rounded-2xl after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${!isResponsavel ? "after:bg-cinza" : "after:bg-transparent"}`
            }
            onClick={() => setIsResponsavel(false)}
          >
            Criança
          </button>
          <button
            className={
              `text-2xl font-bold text-cinza hover:opacity-80 active:translate-y-1 active:shadow-inner px-3 py2 rounded-2xl after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${isResponsavel ? "after:bg-cinza" : "after:bg-transparent"}`
            }
            onClick={() => setIsResponsavel(true)}
          >
            Responsável
          </button>
        </div>
        <div className="h-4/5">
          <div className={`${isResponsavel ? "before:bg-verdeclaro bg-verde" : "before:bg-roxoclaro bg-roxo"} z-10 relative w-40vw h-35vh rounded-2xl flex flex-col items-center justify-center before:block before:absolute before:top-0 before:content-[' '] before:w-40vw before:h-35vh before:rotate-[-8deg] before:radius-x before:-z-50 before:shadow-lg shadow-lg before:rounded-2xl`}>
            <input
              type="text"
              className="bg-input px-10 py-5 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black my-8 outline-0 text-cinza"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="bg-input px-10 py-5 w-3/4 placeholder:opacity-70 rounded-lg text-xl flex items-center justify-between">
              <input
                type={isPassVisible ? "text" : "password"}
                className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-black text-cinza"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              {isPassVisible ? (
                <AiFillEyeInvisible
                  className="text-2xl text-cinza cursor-pointer"
                  onClick={TogglePassVisible}
                />
              ) : (
                <AiFillEye
                  className="text-2xl text-cinza cursor-pointer"
                  onClick={TogglePassVisible}
                />
              )}
            </div>
            {loginError && (
              <p className="text-red-500 my-2">{loginError}</p>
            )}
            <button
              className="bg-input rounded-xl w-2/5 h-16 my-8 text-xl text-cinza hover:opacity-70 active:shadow-inner active:translate-y-1"
              onClick={handleLogin}
            >
              Entrar
            </button>
            <p className=" text-xl">
              Não tem conta?
              <Link
                to={"/criar-conta"}
                className={`${isResponsavel ? "linkresponsavel" : "linkcrianca"} cursor-pointer font-bold hover:opacity-70`}
              >
                &nbsp;Registre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;