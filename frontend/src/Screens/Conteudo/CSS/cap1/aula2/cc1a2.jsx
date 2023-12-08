import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation  } from "react-router-dom";

import css1 from "../../../../../assets/css/comando-2.svg";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../../../../Components/ColorBlind";
import BotaoDesbloquear from "../../../../../Components/BotaoDesbloquear/BotaoDesbloquear";

function Cc1a2() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.nivel === "responsavel"
      ? navigate("/pais/home")
      : localStorage.nivel !== "crianca"
      ? navigate("/")
      : "";
  }, [navigate]);

  const mode = localStorage.getItem("theme");
  const location = useLocation();
  const object = location.state.object;

  function Color(mode, color) {
    var newcolor;
    if (mode === "protanomaly") {
      newcolor = protanomaly(color);
    } else if (mode === "deuteranomaly") {
      newcolor = deuteranomaly(color);
    } else if (mode === "tritanomaly") {
      newcolor = tritanomaly(color);
    } else newcolor = color;
    return newcolor;
  }

  return (
    <div
      className="flex h-full w-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <Menu />

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro dark:text-white">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="flex mt-28 ml-8 text-3xl cursor-pointer dark:text-white"
        />
        <div className="flex flex-col ml-20 mt-16">
          <span className="text-4xl font-semibold">
            Aula 01 - Estilização de Layout com CSS
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#438ADD") }}
                >
                  1. Estilizando Texto
                </h1>
                <span className="flex text-justify">
                  Vamos aprender alguns feitiços para deixar o texto bonito!
                  <br /> <br />
                  text-align: Alinha o texto à esquerda, direita, no centro ou
                  justificado. <br />
                  text-transform: Transforma o texto em maiúsculas, minúsculas
                  ou capitaliza as primeiras letras. <br />
                  text-decoration: Adiciona sublinhado, sobrelinha, riscado ou
                  faz o texto piscar (cuidado, nem todos os navegadores gostam
                  disso!). <br />
                  font-family: Escolhe a fonte mágica para o texto. font-size:
                  Define o tamanho da fonte.
                </span>
              </div>
              <span
                className="text-xl font-semibold mb-3 mt-5"
                style={{ color: Color(mode, "#438ADD") }}
              >
                Exemplo:
              </span>
              <div className="mb-5">
                <img src={css1} alt="" />
              </div>

              <div className="flex flex-col w-10/12 mt-10">
                <div className="">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#438ADD") }}
                  >
                    2. Estilizando com Cores
                  </h1>
                  <span className="flex text-justify">
                    Em CSS, podemos usar várias formas para escolher cores!{" "}
                    <br /> <br />
                    Por nome: blue, red, etc. <br /> Código hexadecimal: #00ff00
                    (verde), #ff4500 (laranja), etc. <br /> RGB: rgb(255, 0, 0)
                    (vermelho puro). <br />
                    HSL: hsl(120, 100%, 50%) (verde puro).
                  </span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-64 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Estilizando Texto
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  Estilizando com Cores
                </div>
              </div>
            </div>
          </div>
          <BotaoDesbloquear
            linguagem={object.linguagem}
            capitulo={object.capitulo}
            numeroaula={object.numeroaula}
          />
        </div>
      </main>
    </div>
  );
}

export default Cc1a2;
