import Menu from "./../../Components/Menu/Menu";
import "../Desafios/Desafios.css";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";

import myGif from "../../assets/gif.gif";
import myGifInput from "../../assets/input.gif";
import myGifFlex from "../../assets/flex.gif";
import myGifQuiz from "../../assets/quiz.gif";

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

          <div className="flex gap-x-10 mt-10 text-xl">
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
                  HTML - Sentença
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer"
                  style={{ backgroundColor: Color(mode, "#E88D59") }}
                  onClick={onOpen}
                ></div>

                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{ backgroundColor: Color(mode, "#E88D59") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      HTML
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{ backgroundColor: Color(mode, "#E88D59") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      Sentença
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  CSS - Flexbox
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer"
                  style={{ background: Color(mode, "#2774CE") }}
                  onClick={onFlexOpen}
                ></div>

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
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
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
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      Flexbox
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  JavaScript - Input
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer"
                  style={{ background: Color(mode, "#EECC43") }}
                  onClick={onInputOpen}
                ></div>

                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{ background: Color(mode, "#EECC43") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      JavaScript
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{ background: Color(mode, "#EECC43") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      Input
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  PHP - Quiz
                </span>

                <div
                  className="w-80 h-48 rounded-xl mb-5 cursor-pointer"
                  style={{ background: Color(mode, "#6D7AC6") }}
                  onClick={onQuizOpen}
                ></div>

                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{ background: Color(mode, "#6D7AC6") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      PHP
                    </span>
                  </div>
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{ background: Color(mode, "#6D7AC6") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
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
            background="#D1B8E9"
            borderRadius="0.9em"
            zIndex={100}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex space-x-20 laptop1024:space-x-10 laptop1024:space-x-5">
                <div className="rounded-xl w-[400px]">
                  <div className="flex items-center justify-center text-center laptop1024:text-sm ml-10">
                    Selecione os inputs e complete a sentença corretamente
                  </div>
                  <img
                    className="laptop1024:w-72 laptop1024:ml-20"
                    src={myGif}
                    alt=""
                  />
                </div>
                <div className="flex items-center">
                  <Link to={"/sentenca"}>
                    <button className="bg-[#3BEF61] text-white p-[6px] laptop1024:w-20 laptop1024:text-sm w-32 rounded-md">
                      Iniciar Desafio
                    </button>
                    <div className="w-32 laptop1024:w-24 laptop1024:mr-10 mt-3 text-center laptop1024:text-sm">
                      Lorem ipsum dolor sit amet consectetur 
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
            background="#D1B8E9"
            borderRadius="0.9em"
            zIndex={100}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex space-x-20 laptop1024:space-x-10">
                <div className="rounded-xl w-[400px]">
                  <div className="flex items-center justify-center text-center laptop1024:text-sm ml-10">
                    Alinhe as imagens utilizando os códigos apresentados
                  </div>
                  <img
                    className="laptop1024:w-72 laptop1024:ml-20"
                    src={myGifFlex}
                    alt=""
                  />
                </div>
                <div className="flex items-center">
                  <Link to={"/flexbox"}>
                    <button className="bg-[#3BEF61] text-white p-[6px] laptop1024:w-20 laptop1024:text-sm w-32 rounded-md">
                      Iniciar Desafio
                    </button>
                    <div className="w-32 laptop1024:w-24 laptop1024:mr-10 mt-3 text-center laptop1024:text-sm">
                      Lorem ipsum dolor sit amet consectetur 
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
            background="#D1B8E9"
            borderRadius="0.9em"
            zIndex={100}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex space-x-20 laptop1024:space-x-10">
                <div className="rounded-xl w-[400px]">
                  <div className="flex items-center justify-center mb-2 laptop1024:text-sm">
                    {" "}
                    Selecione o input e complete a sentença
                  </div>
                  <img
                    className="laptop1024:w-72 laptop1024:ml-20"
                    src={myGifInput}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Link to={"/input"}>
                    <button className="bg-[#3BEF61] text-white p-[6px] w-32 rounded-md laptop1024:w-20 laptop1024:text-sm">
                      Iniciar Desafio
                    </button>
                    <div className="w-32  laptop1024:w-24 laptop1024:mr-10 mt-3 text-center flex items-center justify-center laptop1024:text-sm">
                      Lorem ipsum dolor sit amet consectetur 
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
            background="#D1B8E9"
            borderRadius="0.9em"
            zIndex={100}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
            marginBottom={"auto"}
          >
            {/* Card */}

            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex space-x-20 laptop1024:space-x-10">
                <div className="rounded-xl w-[400px]">
                  <div className="flex items-center justify-center text-center laptop1024:text-sm ml-10 laptop1024:mb-2">
                    Selecione o card e responda corretamente ao quiz
                  </div>
                  <img
                    className="laptop1024:w-72 laptop1024:ml-20"
                    src={myGifQuiz}
                    alt=""
                  />
                </div>
                <div className="flex items-center">
                  <Link to={"/quiz"}>
                    <button className="bg-[#3BEF61] text-white p-[6px] laptop1024:w-20 laptop1024:text-sm w-32 rounded-md">
                      Iniciar Desafio
                    </button>
                    <div className="w-32 laptop1024:w-24 laptop1024:mr-10 mt-3 text-center laptop1024:text-sm">
                      Lorem ipsum dolor sit amet consectetur 
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
