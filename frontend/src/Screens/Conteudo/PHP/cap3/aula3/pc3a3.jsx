import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation  } from "react-router-dom";

import php1 from "../../../../../assets/php/comando-12.svg";

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
            Aula 02 - Interagindo com Bancos de Dados Avançados em PHP e MySQL
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#5D6CC2") }}
                >
                  1. Consultas Avançadas - Procurando o que é Importante
                </h1>
                <span className="flex text-justify mb-5">
                  Às vezes, queremos encontrar coisas especiais no nosso tesouro
                  de dados. Podemos pedir ao MySQL para buscar informações
                  específicas, como nomes e idades das pessoas com mais de 18
                  anos!
                </span>
                <span
                  className="text-xl font-semibold mb-5"
                  style={{ color: Color(mode, '#5D6CC2')}}
                >
                  Exemplo:
                </span>
                <div className="mb-5 mt-3">
                  <img src={php1} alt="" />
                </div>
                <span className="flex text-justify">
                  <br />E assim terminamos nossa jornada mágica pelo PHP!
                  Lembre-se, programar é como fazer magia, e você agora é um
                  verdadeiro feiticeiro do código!
                </span>
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
