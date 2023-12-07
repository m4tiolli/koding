import Menu from "./../../Components/Menu/Menu";
import "../Desafios/Desafios.css";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";

import myGif from "../../assets/gif.gif";
import myGifInput from "../../assets/input.gif";
import myGifFlex from "../../assets/flex.gif";
import myGifQuiz from "../../assets/quiz.gif";

import sentenca from "../../assets/sentenca.svg";
import flexbox from "../../assets/flexbox.svg";
import input from "../../assets/input.svg";
import quiz from "../../assets/quiz.svg";

import { Link } from "react-router-dom";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";

const Desafios = () => {
  const mode = localStorage.getItem("theme");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isFlexOpen,
    onOpen: onFlexOpen,
    onClose: onFlexClose,
  } = useDisclosure();
  const {
    isOpen: isInputOpen,
    onOpen: onInputOpen,
    onClose: onInputClose,
  } = useDisclosure();
  const {
    isOpen: isQuizOpen,
    onOpen: onQuizOpen,
    onClose: onQuizClose,
  } = useDisclosure();

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
      className="flex h-full w-full laptop1024:h-full notebook:h-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <Menu screen={"desafios"} />

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro">
        <div className="flex flex-col ml-20 mt-24">
          <span className="font-semibold text-3xl dark:text-white">
            Desafios
          </span>

          {/* Cards Filtro */}

          <div className="flex gap-x-10 mt-10 text-lg">
            <div
              className="flex justify-center items-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#EB884F") }}
            >
              HTML
            </div>
            <div
              className="flex justify-center align-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#2774CE") }}
            >
              CSS
            </div>
            <div
              className="flex justify-center align-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#EECC43") }}
            >
              JavaScript
            </div>
            <div
              className="flex justify-center align-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#6D7AC6") }}
            >
              PHP
            </div>
          </div>

          {/* Cards Jogo */}

          <div className="flex gap-x-10 flex-wrap mb-10">
            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  HTML
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer flex items-center justify-center text-3xl text-white font-semibold uppercase"
                  style={{
                    background: `linear-gradient(108deg, ${Color(
                      mode,
                      "#E88D59"
                    )} 0%, ${Color(mode, "#E87331")} 100%)`,
                  }}
                  onClick={onOpen}
                >
                  <img src={sentenca} className="w-72 h-72" alt="" />
                </div>

                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{
                      background: `linear-gradient(108deg, ${Color(
                        mode,
                        "#E88D59"
                      )} 0%, ${Color(mode, "#E87331")} 100%)`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      HTML
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{
                      background: `linear-gradient(108deg, ${Color(
                        mode,
                        "#E88D59"
                      )} 0%, ${Color(mode, "#E87331")} 100%)`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      Sentença
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  CSS
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer flex items-center justify-center text-3xl text-white font-semibold uppercase"
                  style={{
                    background: `linear-gradient(108deg, ${Color(
                      mode,
                      "#4A90E2"
                    )} 0%, ${Color(mode, "#0D54A8")} 100%)`,
                  }}
                  onClick={onFlexOpen}
                >
                  <img src={flexbox} className="w-72 h-72" alt="" />
                </div>

                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(10deg, ${Color(
                        mode,
                        "#4189DC"
                      )} 0%, ${Color(mode, "#1768C5")} 100%`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      CSS
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(10deg, ${Color(
                        mode,
                        "#4189DC"
                      )} 0%, ${Color(mode, "#1768C5")} 100%`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      Flexbox
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  JavaScript
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer flex items-center justify-center text-3xl text-white font-semibold uppercase"
                  style={{
                    background: `linear-gradient(108deg, ${Color(
                      mode,
                      "#F2D237"
                    )} 0%, ${Color(mode, "#B89D1C")} 100%)`,
                  }}
                  onClick={onInputOpen}
                >
                  <img src={input} className="w-72 h-72" alt="" />
                </div>

                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{
                      background: `linear-gradient(108deg, ${Color(
                        mode,
                        "#F2D237"
                      )} 0%, ${Color(mode, "#B89D1C")} 100%)`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      JavaScript
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{
                      background: `linear-gradient(108deg, ${Color(
                        mode,
                        "#F2D237"
                      )} 0%, ${Color(mode, "#B89D1C")} 100%)`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      Input
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  PHP
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer flex items-center justify-center text-3xl text-white font-semibold uppercase"
                  style={{
                    background: `linear-gradient(108deg, ${Color(
                      mode,
                      "#5D6CC2"
                    )} 0%, ${Color(mode, "#485BBB")} 100%)`,
                  }}
                  onClick={onQuizOpen}
                >
                  <img src={quiz} className="w-72 h-72" alt="" />
                </div>

                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{
                      background: `linear-gradient(108deg, ${Color(
                        mode,
                        "#5D6CC2"
                      )} 0%, ${Color(mode, "#485BBB")} 100%)`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      PHP
                    </span>
                  </div>
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{
                      background: `linear-gradient(108deg, ${Color(
                        mode,
                        "#5D6CC2"
                      )} 0%, ${Color(mode, "#485BBB")} 100%)`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate">
                      Quiz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isCentered={true}
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="50vw"
            h="22vw"
            display="flex"
            background="#7E1AD4"
            borderRadius="0.9em"
            zIndex={1000}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center space-x-10 px-5">
                <div className="rounded-xl w-[400px] space-y-5">
                  <span className="flex w-[350px] justify-center font-bold text-lg mb-2 text-white uppercase">
                    Sentença
                  </span>
                  <div
                    className="w-[350px] h-44 rounded-xl flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${Color(
                        mode,
                        "#6800FF"
                      )} 0%, ${Color(mode, "#BB5E7E")} 100%`,
                    }}
                  >
                    <img src={myGif} alt="" className="" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    to={"/sentenca"}
                    className="flex flex-col justify-center items-center"
                  >
                    <button className="bg-[#3BEF61] text-white p-[10px] w-auto uppercase text-lg flex justify-center rounded-md shadow-md">
                      Iniciar Desafio
                    </button>
                    <div className="w-auto mt-3 text-white mb-10 text-center">
                      Selecione o card que melhor complete a sentença apresentada com base nos estudos de HTML!
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          isCentered={true}
          onClose={onFlexClose}
          isOpen={isFlexOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="50vw"
            h="22vw"
            display="flex"
            background="#7E1AD4"
            borderRadius="0.9em"
            zIndex={1000}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center space-x-10 px-5">
                <div className="rounded-xl w-[400px] space-y-5">
                  <span className="flex w-[350px] justify-center font-bold text-lg mb-2 text-white uppercase">
                    Flexbox
                  </span>
                  <div
                    className="w-[350px] h-44 rounded-xl flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${Color(
                        mode,
                        "#6800FF"
                      )} 0%, ${Color(mode, "#BB5E7E")} 100%`,
                    }}
                  >
                    <img src={myGifFlex} alt="" className="" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    to={"/flexbox"}
                    className="flex flex-col justify-center items-center"
                  >
                    <button className="bg-[#3BEF61] text-white p-[10px] w-auto uppercase text-lg flex justify-center rounded-md shadow-md">
                      Iniciar Desafio
                    </button>
                    <div className="w-auto mt-3 text-white mb-10 text-center">
                      Ajude a alinhar as imagens conforme exibidas utilizando flexbox com base nos estudos de CSS!
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          isCentered={true}
          onClose={onInputClose}
          isOpen={isInputOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="50vw"
            h="22vw"
            display="flex"
            background="#7E1AD4"
            borderRadius="0.9em"
            zIndex={1000}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center space-x-10 px-5">
                <div className="rounded-xl w-[400px] space-y-5">
                  <span className="flex w-[350px] justify-center font-bold text-lg mb-2 text-white uppercase">
                    Input
                  </span>
                  <div
                    className="w-[350px] h-44 rounded-xl flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${Color(
                        mode,
                        "#6800FF"
                      )} 0%, ${Color(mode, "#BB5E7E")} 100%`,
                    }}
                  >
                    <img src={myGifInput} alt="" className="" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    to={"/input"}
                    className="flex flex-col justify-center items-center"
                  >
                    <button className="bg-[#3BEF61] text-white p-[10px] w-auto uppercase text-lg flex justify-center rounded-md shadow-md">
                      Iniciar Desafio
                    </button>
                    <div className="w-auto mt-3 text-white mb-10 text-center">
                      Selecione o input correto conforme a pergunta apresentada com base nos estudos de JavaScript!
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          isCentered={true}
          onClose={onQuizClose}
          isOpen={isQuizOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="50vw"
            h="22vw"
            display="flex"
            background="#7E1AD4"
            borderRadius="0.9em"
            zIndex={1000}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center space-x-10 px-5">
                <div className="rounded-xl w-[400px] space-y-5">
                  <span className="flex w-[350px] justify-center font-bold text-lg mb-2 text-white uppercase">
                    Quiz
                  </span>
                  <div
                    className="w-[350px] h-44 rounded-xl flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${Color(
                        mode,
                        "#6800FF"
                      )} 0%, ${Color(mode, "#BB5E7E")} 100%`,
                    }}
                  >
                    <img src={myGifQuiz} alt="" className="" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    to={"/quiz"}
                    className="flex flex-col justify-center items-center"
                  >
                    <button className="bg-[#3BEF61] text-white p-[10px] w-auto uppercase text-lg flex justify-center rounded-md shadow-md">
                      Iniciar Desafio
                    </button>
                    <div className="w-auto mt-3 text-white mb-10 text-center">
                      Responda corretamente às perguntas feitas com base nos estudos sobre PHP!
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContent>
        </Modal>
      </main>
    </div>
  );
};

export default Desafios;
