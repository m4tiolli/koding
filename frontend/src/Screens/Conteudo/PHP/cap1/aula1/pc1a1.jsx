import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import Menu from "../../../../../Components/Menu/Menu";
import { useNavigate, useLocation } from "react-router-dom";

import php1 from "../../../../../assets/php/comando.svg";
import php2 from "../../../../../assets/php/comando-1.svg";

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
            Aula 00 - Fundamentos do PHP
          </span>

          <div className="flex w-10/12 mt-16 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="flex flex-col w-10/12 mb-10">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#5D6CC2") }}
                >
                  1. O que é o PHP
                </h1>
                <span className="flex text-justify">
                  Imagine o PHP como um superpoder que ajuda a criar coisas
                  incríveis na internet, como sites e jogos! Ele é como um amigo
                  que fala com os computadores e faz com que eles mostrem coisas
                  legais na tela.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#5D6CC2") }}
                  >
                    2. Configurando a Máquina Mágica
                  </h1>
                  <span className="flex text-justify">
                    Antes de começarmos a criar, precisamos preparar nossa
                    máquina mágica. Isso envolve instalar algumas ferramentas
                    mágicas, como o Apache. Pode parecer complicado, mas existem
                    pacotes mágicos, como XAMPP, que fazem tudo ficar fácil!
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-10/12">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#5D6CC2") }}
                  >
                    3. Conhecendo a Linguagem dos Feiticeiros
                  </h1>
                  <span className="flex text-justify">
                    No PHP, usamos palavras especiais para fazer coisas
                    acontecerem. Por exemplo, quando queremos mostrar algo na
                    tela, dizemos: "echo". É como mandar uma mensagem mágica
                    para o computador!
                  </span>
                </div>
              </div>
              <span
                className="text-xl font-semibold mb-3"
                style={{ color: Color(mode, "#5D6CC2") }}
              >
                Exemplo:
              </span>
              <div className="mb-10">
                <img src={php1} alt="" />
              </div>

              <div className="flex flex-col w-10/12">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#5D6CC2") }}
                  >
                    4. Guardando Segredos em Variáveis
                  </h1>
                  <span className="flex text-justify">
                    As variáveis são como gavetas mágicas onde podemos guardar
                    informações. Se queremos lembrar o nome de alguém, usamos
                    uma gaveta chamada "$nome". Assim, sempre que quisermos
                    saber o nome, abrimos a gaveta!
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
            <div className="flex w-72 h-32 mt-10">
              <div className="border-l-2 h-64 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5 mt-32">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  O que São Frameworks Front-end?
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  React e Angular - Dois Poderosos Feitiços
                </div>
                <div className="hover:bg-[#EE9765] rounded-md p-2 cursor-pointer">
                  O que São Frameworks Front-end?
                </div>
                <div className="hover:bg-[#1D75DC] rounded-md p-2 cursor-pointer">
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
