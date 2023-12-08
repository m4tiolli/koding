import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation  } from "react-router-dom";

import html1 from "../../../../../assets/comando1.svg";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../../../../Components/ColorBlind";
import BotaoDesbloquear from "../../../../../Components/BotaoDesbloquear/BotaoDesbloquear";

function Jc1a1() {
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
        <div className="flex flex-col ml-20 mt-16 mb-10">
          <span className="text-4xl font-semibold">
            Aula 00 - Introdução a Frameworks Front-end em JavaScript
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E8BE2A") }}
                >
                  1. O que São Frameworks Front-end?
                </h1>
                <span className="flex text-justify">
                  Frameworks são como livros de feitiços que ajudam a construir
                  interfaces mágicas para as aplicações web. Eles tornam tarefas
                  comuns mais fáceis!
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#E8BE2A") }}
                  >
                    2. React e Angular - Dois Poderosos Feitiços
                  </h1>
                  <span className="flex text-justify">
                    React: Uma biblioteca para criar interfaces de usuário
                    modulares e reutilizáveis. Usa componentes para tornar o
                    desenvolvimento eficiente. <br /> <br />
                    Angular: Um framework completo para construir aplicações web
                    robustas. Usa TypeScript e orientação a objetos.
                  </span>
                </div>
                <span
                  className="text-xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E8BE2A") }}
                >
                  Exemplo:
                </span>
                <div className="mb-5">
                  <img src={html1} alt="" />
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-72 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  O que São Frameworks Front-end?
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  React e Angular - Dois Poderosos Feitiços
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

export default Jc1a1;
