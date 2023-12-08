import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation  } from "react-router-dom";

import js1 from "../../../../../assets/js/comando.svg";

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
            Aula 00 - Fundamentos do JavaScript
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E8BE2A") }}
                >
                  1. O que é JavaScript?
                </h1>
                <span className="flex text-justify">
                  JavaScript é uma linguagem mágica que os desenvolvedores usam
                  para criar páginas incríveis na internet. Com ela, podemos
                  tornar as páginas interativas, como atualizar feeds em redes
                  sociais e mostrar animações mágicas!
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-5">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#E8BE2A") }}
                  >
                    2. Variáveis Mágicas
                  </h1>
                  <span className="flex text-justify">
                    Em JavaScript, usamos varinhas especiais chamadas variáveis
                    para guardar informações. Existem três tipos: var, let e
                    const. Var é como uma varinha global, let vive dentro de
                    blocos e const mantém um valor constante.
                  </span>
                </div>
              </div>
              <span
                className="text-xl font-semibold mb-3"
                style={{ color: Color(mode, "#E8BE2A") }}
              >
                Exemplo:
              </span>
              <div className="mb-14">
                <img src={js1} alt="" />
              </div>

              <div className="flex flex-col w-10/12 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#E8BE2A") }}
                  >
                    3. Tipos de Tesouros (Dados):
                  </h1>
                  <span className="flex text-justify">
                    Existem muitos tesouros mágicos em JavaScript! <br /> <br />
                    Strings: Guardam textos mágicos. Números: São como poções
                    numéricas. <br />
                    Valores booleanos: Podem ser verdadeiros ou falsos. <br />
                    Undefined: Para tesouros sem valor. Null: Indica ausência de
                    valor. <br />
                    Objetos: São como baús com muitas propriedades. <br />
                    Arrays: Guardam coleções de tesouros. Funções: São feitiços
                    reutilizáveis.
                  </span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-64 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  O que é JavaScript
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  Variáveis Mágicas
                </div>
                <div className="hover:bg-[#EE9765] rounded-md p-2 cursor-pointer">
                  Tipos de Tesouros (Dados)
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
