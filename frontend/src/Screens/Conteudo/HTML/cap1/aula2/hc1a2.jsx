import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useLocation, useNavigate } from "react-router-dom";

import html1 from "../../../../../assets/html/comando-1.svg";
import html2 from "../../../../../assets/html/comando-3.svg";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../../../../Components/ColorBlind";
import BotaoDesbloquear from "../../../../../Components/BotaoDesbloquear/BotaoDesbloquear";

function Hc1a2() {
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
        <div className="flex flex-col ml-20 mt-16 mb-5">
          <span className="text-4xl font-semibold">
            Aula 01 - Tags HTML e Estrutura Basica
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E87635") }}
                >
                  1. Tags Estruturais
                </h1>
                <span className="flex text-justify">
                  As tags como &lt;header&gt;, &lt;footer&gt;, e &lt;div&gt; são
                  como feitiços que organizam o conteúdo da página. O
                  &lt;header&gt; é como um título, o &lt;footer&gt; fica no
                  final, e &lt;div&gt; é uma caixa mágica para organizar coisas.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10">
                <div className="">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#E87635") }}
                  >
                    2. Tags de Título e Texto
                  </h1>
                  <span className="flex text-justify">
                    Os títulos, como &lt;h1&gt; a &lt;h6&gt;, são como
                    encantamentos de diferentes tamanhos. E as tags &lt;p&gt;,
                    &lt;span&gt;, &lt;br&gt;, e &lt;hr&gt; ajudam a criar textos
                    e separações.
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-10/12 mt-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#E87635") }}
                  >
                    3. Listas e Links
                  </h1>
                  <span className="flex text-justify">
                    Para criar listas, usamos &lt;ol&gt; para listas ordenadas e
                    &lt;ul&gt; para listas não ordenadas. As listas têm
                    &lt;li&gt; para cada item. E para fazer links, usamos a tag
                    &lt;a&gt;.
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
                <div className="mb-5">
                  <img src={html2} alt="" />
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-64 h-32 mt-10">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Tags Estruturais
                </div>
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  Tags de Título e Texto
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  Lista de Links
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

export default Hc1a2;
