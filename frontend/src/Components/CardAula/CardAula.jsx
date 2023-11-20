import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import { protanomaly, deuteranomaly, tritanomaly } from "./../ColorBlind";

import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
export default function CardAula({ aula }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  console.log(aula);

  return (
    <div className="space-y-32">
      <div className="flex flex-col justify-center ml-10">
        <div className="flex space-x-16 items-center mb-10">
          <div className="space-y-5">
            {/* Card */}
            <div
              onClick={onOpen}
              className="w-80 h-52 rounded-xl cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(10deg, ${Color(
                  mode,
                  "#E87331"
                )} 0%, ${Color(mode, "#E88D59")} 100%`,
              }}
            ></div>
            <div className="flex flex-col">
              <marquee>
                <span className="w-[250px] flex items-center justify-start text-xl text-black font-semibold dark:text-white">
                  {aula.nome} - {aula.descricao}
                </span>
              </marquee>
              {/* Filtro */}
              <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                <div
                  className="w-16 p-1 rounded-xl"
                  style={{
                    backgroundImage: `linear-gradient(10deg, ${Color(
                      mode,
                      "#E87331"
                    )} 0%, ${Color(mode, "#E88D59")} 100%`,
                  }}
                >
                  <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                    HTML
                  </span>
                </div>
                <div
                  className="w-32 p-1 rounded-xl"
                  style={{
                    backgroundImage: `linear-gradient(10deg, ${Color(
                      mode,
                      "#E87331"
                    )} 0%, ${Color(mode, "#E88D59")} 100%`,
                  }}
                >
                  <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                    Estrutura
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalContent
          w="44vw"
          h="22vw"
          display="flex"
          background="#D1B8E9"
          borderRadius="0.9em"
          zIndex={100}
          marginLeft={"auto"}
          marginTop={"auto"}
          marginRight={"auto"}
          marginBottom={"auto"}
        >
          {/* Card */}

          <div className="h-full flex justify-center items-center gap-x-16">
            <div className="flex flex-col space-y-3">
              <div
                className="w-82 h-44 rounded-xl"
                style={{
                  backgroundImage: 
                  `linear-gradient(100deg, ${Color(
                    mode,
                    "#6800FF"
                  )} 0%, ${Color(mode, "#BB5E7E")} 100%`,
                }}
              ></div>
              <div>
                <span className="flex font-bold text-lg mb-2 truncate">
                  Aula 00 - Aprendendo esturuta HTML
                </span>
                {/* Filtro */}
                <div
                  className="w-32 p-1 rounded-md"
                  style={{
                    backgroundImage: `linear-gradient(10deg, ${Color(
                      mode,
                      "#E87331"
                    )} 0%, ${Color(mode, "#E88D59")} 100%`,
                  }}
                >
                  <marquee>
                  <span className="flex w-64 items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                    Dificuldade: Iniciante
                  </span>
                  </marquee>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="flex flex-col justify-center bg-white/50 w-32 h-8 space-x-20 rounded-md">
                <span className="flex justify-center items-center">
                  Nivel 1
                </span>
              </div>
              <Link to={"/conteudo"}>
                <button className="bg-[#3BEF61] text-white w-32 uppercase text-2xl p-2 rounded-lg shadow-md">
                  Iniciar
                </button>
              </Link>
              <span className="w-32 h-20 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas in nisl lacinia, consectetur enim id, auctor massa.
                Proin consequat ipsum vitae ligula ornare tristique
              </span>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
