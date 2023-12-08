import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation  } from "react-router-dom";

import js1 from "../../../../../assets/js/comando-1.svg";
import js2 from "../../../../../assets/js/comando-2.svg";

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
            Aula 01 - Manipulação do Documento com JavaScript
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E8BE2A") }}
                >
                  1. Selecionando Elementos com Feitiços
                </h1>
                <span className="flex text-justify">
                  JavaScript pode interagir com o conteúdo HTML usando feitiços
                  especiais! <br /> <br />
                  getElementById(): Pega um elemento pelo seu ID. <br />
                  getElementsByClassName(): Pega elementos por classe. <br />
                  querySelector(): Usa seletores CSS. <br />
                  querySelectorAll(): Pega todos os elementos. javascript
                </span>
              </div>
              <span
                className="text-xl font-semibold mb-3 mt-5"
                style={{ color: Color(mode, "#E8BE2A") }}
              >
                Exemplo:
              </span>
              <div className="mb-5">
                <img src={js1} alt="" />
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#E8BE2A") }}
                  >
                    2. Modificando Atributos com Encantamentos
                  </h1>
                  <span className="flex text-justify">
                    Existem feitiços para modificar atributos dos elementos!
                    <br /> <br />
                    hasAttribute(): Verifica se um atributo existe. <br />
                    getAttribute(): Pega o valor de um atributo. <br />
                    setAttribute(): Adiciona ou atualiza um atributo. <br />
                    removeAttribute(): Remove um atributo.
                  </span>
                </div>
              </div>
              <span
                className="text-xl font-semibold mb-3"
                style={{ color: Color(mode, "#E8BE2A") }}
              >
                Exemplo:
              </span>
              <div className="mb-5">
                <img src={js2} alt="" />
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-72 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Selecionando Elementos com Feitiços
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  Modificando Atributos com Encantamentos
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
