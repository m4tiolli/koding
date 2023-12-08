import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation } from "react-router-dom";

import html1 from "../../../../../assets/html/comando-2.svg";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../../../../Components/ColorBlind";
import BotaoDesbloquear from "../../../../../Components/BotaoDesbloquear/BotaoDesbloquear";

function Hc1a3() {
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
        <div className="flex flex-col ml-20 mt-16">
          <span className="text-4xl font-semibold">
            Aula 02 - Formatação de Texto e Elementos Avançados
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#E87635") }}
                >
                  1. Formatando Texto e Criando Formulários
                </h1>
                <span className="flex text-justify">
                  Para deixar o texto mais interessante, usamos tags como
                  &lt;b&gt; para negrito, &lt;i&gt; para itálico, &lt;u&gt; para
                  sublinhado, e &lt;mark&gt; para destacar. E para criar
                  formulários mágicos, a tag &lt;form&gt; é o ponto de partida,
                  com &lt;input&gt; para coletar dados.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10">
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

export default Hc1a3;
