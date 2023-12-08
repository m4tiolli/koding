import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation  } from "react-router-dom";

import css1 from "../../../../../assets/css/comando-3.svg";

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
            Aula 02 - Estilização Avançada com CSS
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#438ADD") }}
                >
                  1. Posicionamento e Display
                </h1>
                <span className="flex text-justify">
                  Agora, vamos aprender a posicionar elementos na página como
                  verdadeiros feiticeiros!
                  <br /> <br />
                  position: Define como um elemento é posicionado (static,
                  relative, absolute, fixed). <br />
                  top, bottom, left, right: Ajustam a posição do elemento.{" "}
                  <br />
                  display: Escolhe o tipo de exibição (block, inline, flex,
                  grid). <br />
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10">
                <div className="">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#438ADD") }}
                  >
                    2. Pseudo-Classes e Pseudo-Elementos
                  </h1>
                  <span className="flex text-justify">
                    Feiticeiros também usam truques especiais para estilizar
                    partes específicas!
                    <br /> <br />
                    Pseudo-classes: Adicionam estilos a estados especiais, como
                    :hover para quando passamos o mouse. <br />
                    Pseudo-elementos: Estilizam partes específicas de um
                    elemento, como ::first-line para a primeira linha de um
                    parágrafo.
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
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-64 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Posicionamento e Display
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  Pseudo-Classes e Pseudo-Elementos
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
