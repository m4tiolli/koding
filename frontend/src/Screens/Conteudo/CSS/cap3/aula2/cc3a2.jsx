import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate } from "react-router-dom";

import css1 from "../../../../../assets/css/comando-6.svg";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../../../../Components/ColorBlind";
import BotaoDesbloquear from "../../../../../Components/BotaoDesbloquear/BotaoDesbloquear";

function Cc1a1() {
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
            Aula 01 - Layouts de Grade em CSS
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#438ADD") }}
                >
                  1. Layouts em Grade
                </h1>
                <span className="flex text-justify">
                Vamos usar o poder das grades para organizar nossos elementos!
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
          <BotaoDesbloquear />
        </div>
      </main>
    </div>
  );
}

export default Cc1a1;