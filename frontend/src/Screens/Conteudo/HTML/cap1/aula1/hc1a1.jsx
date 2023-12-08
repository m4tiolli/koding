import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useLocation, useNavigate } from "react-router-dom";

import html1 from "../../../../../assets/html/comando.svg";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../../../../Components/ColorBlind";
import BotaoDesbloquear from "../../../../../Components/BotaoDesbloquear/BotaoDesbloquear";

function Hc1a1() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.nivel === "responsavel"
      ? navigate("/pais/home")
      : localStorage.nivel !== "crianca"
      ? navigate("/")
      : "";
  }, [navigate]);

  const mode = localStorage.getItem("theme");

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

  const location = useLocation();
  const object = location.state.object;

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
            Aula 00 - Fundamentos do HTML
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E87635") }}
                >
                  1. Introdução ao HTML
                </h1>
                <span className="flex text-justify">
                  HTML, que significa Hypertext Markup Language (Linguagem de
                  Marcação de Hipertexto), é como a poção mágica que usamos para
                  criar páginas na web. Ele usa "tags" para organizar o conteúdo
                  e faz com que os navegadores exibam as páginas do jeito que
                  queremos.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#E87635") }}
                  >
                    2. Estrutura Básica de uma página HTML
                  </h1>
                  <span className="flex text-justify">
                    Toda página começa com uma varinha mágica especial chamada
                    &lt;!DOCTYPE html&gt;. Em seguida, temos a tag &lt;html&gt;
                    que envolve tudo. O conteúdo que os feiticeiros querem que
                    os outros vejam fica dentro da tag &lt;body&gt;, enquanto as
                    coisas invisíveis vão dentro da tag &lt;head&gt;. Ah, e não
                    esqueçam da tag &lt;meta charset="utf-8"&gt; para garantir
                    que todos os idiomas funcionem corretamente!
                  </span>
                </div>
                <span
                  className="text-xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E87635") }}
                >
                  Exemplo:
                </span>
                <div className="mb-5">
                  <img src={html1} alt="" />
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-64 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Introdução
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  Estrutura Básica
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

export default Hc1a1;
