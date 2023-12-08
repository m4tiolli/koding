import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation } from "react-router-dom";

import php1 from "../../../../../assets/php/comando-2.svg";
import php2 from "../../../../../assets/php/comando-3.svg";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../../../../Components/ColorBlind";
import BotaoDesbloquear from "../../../../../Components/BotaoDesbloquear/BotaoDesbloquear";

function Pc1a2() {
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
        <div className="flex flex-col ml-20 mt-16 mb-5">
          <span className="text-4xl font-semibold">
            Aula 01 - Estruturas de Controle em PHP
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#5D6CC2") }}
                >
                  1. Comandos Mágicos
                </h1>
                <span className="flex text-justify mb-5">
                  O PHP entende comandos especiais, como "if" e "else". É como
                  dar ordens ao computador! Se algo é verdadeiro, ele faz uma
                  coisa, se não for, faz outra.
                </span>
              </div>
              <span
                className="text-xl font-semibold mb-3"
                style={{ color: Color(mode, "#5D6CC2") }}
              >
                Exemplo:
              </span>
              <div className="mb-5">
                <img src={php1} alt="" />
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-5">
                <div className="">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#5D6CC2") }}
                  >
                    2. Coleções Mágicas chamadas Arrays
                  </h1>
                  <span className="flex text-justify">
                    Os Arrays são como varinhas mágicas que guardam muitas
                    coisas juntas. Por exemplo, uma lista de cores mágicas!
                  </span>
                </div>
              </div>
              <span
                  className="text-xl font-semibold mb-3"
                  style={{ color: Color(mode, "#5D6CC2") }}
                >
                  Exemplo:
                </span>
                <div className="mb-5">
                  <img src={php2} alt="" />
                </div>
            </div>

            {/* Menu */}
            <div className="flex w-64 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Comandos Mágicos
                </div>
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Coleções Mágicas chamadas Arrays
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

export default Pc1a2;
