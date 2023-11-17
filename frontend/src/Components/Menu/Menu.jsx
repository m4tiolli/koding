import { BsBook, BsFillMoonFill } from "react-icons/bs";
import { PiSword } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { BiSearch, BiHelpCircle, BiChevronLeft } from "react-icons/bi";
import { LuPaintBucket } from "react-icons/lu";
import { ImContrast, ImBlocked } from "react-icons/im";
import Logo from "../Logo";
import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { protanomaly, tritanomaly, deuteranomaly } from "../ColorBlind";
import blue from "../blue.png";
import green from "../green.png";
import red from "../red.png";
import { useNavigate } from "react-router-dom";
import "../Menu/Menu.css";

export default function Menu({ screen }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isMaisOpen,
    onOpen: onMaisOpen,
    onClose: onMaisClose,
  } = useDisclosure();
  const {
    isOpen: isDalOpen,
    onOpen: onDalOpen,
    onClose: onDalClose,
  } = useDisclosure();
  const {
    isOpen: isFeedOpen,
    onOpen: onFeedOpen,
    onClose: onFeedClose,
  } = useDisclosure();

  const [button, setButton] = useState("");

  const toggleButton = (type) => {
    setButton(type);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      if (blindChecked) {
        setBlindChecked(false);
        localStorage.setItem("theme", "light");
      }
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  function Sair() {
    localStorage.removeItem("nivel");
    document.location.reload();
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // --- Color Blind --- //

  const [mode, setMode] = useState("light");
  const [blindChecked, setBlindChecked] = useState(false);

  /**
   *
   * @param {string} type
   * @returns
   */
  const toggleButtonColorBlind = (type) => {
    if (localStorage.getItem("theme") === "dark") {
      setMode("light");
      localStorage.setItem("theme", "light");
      setBlindChecked(false);
    } else {
      setMode(type);
      localStorage.setItem("theme", type);
      location.reload();
      setBlindChecked(type === "light" ? false : true);
    }
  };

  /**
   *
   * @param {string} mode
   * @param {string} color
   * @returns
   */

  function Color(mode, color) {
    var newcolor;
    if (mode === "protanomalia") {
      newcolor = protanomaly(color);
      localStorage.theme = "protanomaly";
    } else if (mode === "deuteranomalia") {
      newcolor = deuteranomaly(color);
      localStorage.theme = "deuteranomaly";
    } else if (mode === "tritanomalia") {
      newcolor = tritanomaly(color);
      localStorage.theme = "tritanomaly";
    } else {
      newcolor = color;
    }
    return newcolor;
  }

  function darkNotAllowed() {
    return blindChecked === true ? true : false;
  }

  function blindNotAllowed() {
    return isChecked ? true : false;
  }

  return (
    <ChakraProvider>
      <aside
        className={`dark:bg-darkcinza h-screen w-52 p-5 fixed top-0 flex flex-col items-start justify-center shadow-lg`}
        style={{ backgroundColor: Color(mode, "#EDD8FF") }}
      >
        <header className="w-full mb-12">
          <Logo
            className="absolute -top-4 -left-20 scale-50"
            isDark={localStorage.theme === "dark"}
          />
        </header>

        <nav className="flex flex-col flex-auto justify-start pt-24 w-full">
          <button
            className={`dark:text-white h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#332C44] ${
              button == "materiais" ? "bg-white/50 dark:bg-[#332C44]" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() => navigate("/home")}
          >
            <span className="inline-flex items-center gap-5">
              <BsBook className="relative text-3xl">materiais</BsBook>
              <span className="text-lg">Materiais</span>
            </span>
          </button>

          <button
            className={`dark:text-white h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#332C44] ${
              button == "perfil" ? "bg-white/50 dark:bg-[#332C44]" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() => navigate("/home", { state: { tela: "perfil" } })}
          >
            <span className="inline-flex items-center gap-5">
              <AiOutlineUser className="relative text-3xl">
                perfil
              </AiOutlineUser>
              <span className="text-lg">Perfil</span>
            </span>
          </button>

          <button
            className={`dark:text-white h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#332C44] ${
              screen || button == "desafios"
                ? "bg-white/50 dark:bg-[#332C44]"
                : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() => navigate("/desafios")}
          >
            <span className="inline-flex items-center gap-5">
              <PiSword className="relative text-3xl">desafios</PiSword>
              <span className="text-lg">Desafios</span>
            </span>
          </button>

          <button
            onClick={onMaisOpen}
            className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#332C44] dark:text-white`}
            style={{ transition: "150ms ease-in" }}
          >
            <span className="inline-flex items-center gap-5">
              <CiCircleMore className="relative text-3xl">mais</CiCircleMore>
              <span className="text-lg">Mais</span>
            </span>
          </button>
        </nav>
      </aside>

      <header
        className={`dark:bg-darkcinza fixed width-header h-16 flex items-center justify-end shadow-sm z-10`}
        style={{ backgroundColor: Color(mode, "#EDD8FF") }}
      >
        <div className="h-3/5 w-2/5 flex items-center justify-end pr-4">
          <form className="flex w-fit items-center justify-center  " action="">
            <input
              className="bg-transparent outline-none w-7/12 text-2xl"
              type="text"
            />
            <a href="">
              <BiSearch className={`text-3xl text-cinza dark:text-white`} />
            </a>
          </form>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full hover:opacity-60 text-white bg-cinza dark:bg-white dark:text-darkcinza`}
          >
            <LuPaintBucket
              onClick={onOpen}
              className="text-2xl cursor-pointer relative"
            />
          </div>
        </div>
      </header>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        blockScrollOnMount={false}
      >
        <ModalContent
          w="16vw"
          position="fixed"
          top="0"
          right="1rem"
          zIndex={100}
          borderRadius="0.75rem"
        >
          <div
            className={`bg-[#56505B] w-full py-3 flex justify-evenly items-center rounded-t-xl`}
          >
            <BsFillMoonFill className="text-[#e4d9ed] text-xl" />
            <p className="text-[#e4d9ed]">Modo escuro</p>
            <label
              className={`flex cursor-pointer select-none items-center ${
                darkNotAllowed() ? "cursor-not-allowed opacity-60" : ""
              }`}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                  disabled={darkNotAllowed()}
                />
                <div
                  className={`box block h-6 w-10 rounded-full bg-[#e4d9ed]`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition bg-[#56505B] ${
                    isChecked ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div
            className="bg-[#e4d9ed] w-full py-3 flex flex-row-reverse justify-evenly items-center rounded-b-xl hover:cursor-pointer hover:opacity-60"
            onClick={onDalOpen}
          >
            <ImContrast className="text-[#56505B] text-xl" />
            <p className="text-[#56505B]">Modo daltonismo</p>
            <div className="text-2xl text-[#56505B]">
              <BiChevronLeft />
            </div>
          </div>
          <Modal
            isOpen={isDalOpen}
            onClose={onDalClose}
            motionPreset="slideInBottom"
            blockScrollOnMount={false}
          >
            <ModalContent
              w="14vw"
              h="8vw"
              position="fixed"
              top="3rem"
              right="14rem"
              zIndex={100}
              borderRadius="0.75rem"
            >
              <div className="grid grid-rows-2 grid-cols-2 h-full w-full rounded-xl">
                <div
                  className={`bg-[#e9e9e9] select-none grid place-items-center rounded-tl-xl active:shadow-inner hover:scale-95 active:opacity-70 ${
                    blindNotAllowed()
                      ? "opacity-50 scale-95 cursor-not-allowed"
                      : ""
                  } ${
                    localStorage.theme === "light" ? "opacity-50 scale-95" : ""
                  }`}
                  title="Sem daltonismo"
                  onClick={() => toggleButtonColorBlind("light")}
                >
                  <ImBlocked size={30} color="#56505B" />
                </div>
                <div
                  className={`bg-[#3b63ac] select-none flex items-center justify-center rounded-tr-xl active:shadow-inner hover:scale-95 active:opacity-70 ${
                    blindNotAllowed()
                      ? "opacity-50 scale-95 cursor-not-allowed"
                      : ""
                  } ${
                    localStorage.theme === "tritanomaly"
                      ? "opacity-50 scale-95"
                      : ""
                  }`}
                  title="Tritanomalia"
                  onClick={() => toggleButtonColorBlind("tritanomalia")}
                >
                  <img src={blue} className="h-3/5 w-auto" />
                </div>
                <div
                  className={`bg-[#65b32e] select-none flex items-center justify-center rounded-bl-xl active:shadow-inner hover:scale-95 active:opacity-70 ${
                    blindNotAllowed()
                      ? "opacity-50 scale-95 cursor-not-allowed"
                      : ""
                  } ${
                    localStorage.theme === "deuteranomaly"
                      ? "opacity-50 scale-95"
                      : ""
                  }`}
                  title="Deuteranomalia"
                  onClick={() => toggleButtonColorBlind("deuteranomalia")}
                >
                  <img src={green} className="h-4/6 w-auto" />
                </div>
                <div
                  className={`bg-[#e83c3b] select-none flex items-center justify-center rounded-br-xl active:shadow-inner hover:scale-95 active:opacity-70 ${
                    blindNotAllowed()
                      ? "opacity-50 scale-95 cursor-not-allowed"
                      : ""
                  } ${
                    localStorage.theme === "protanomaly"
                      ? "opacity-50 scale-95"
                      : ""
                  }`}
                  title="Protanomalia"
                  onClick={() => toggleButtonColorBlind("protanomalia")}
                >
                  <img src={red} className="h-3/5 w-auto" />
                </div>
              </div>
            </ModalContent>
          </Modal>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isMaisOpen}
        onClose={onMaisClose}
        motionPreset="slideInRight"
        blockScrollOnMount={false}
      >
        <ModalContent
          w={"20vw"}
          position="fixed"
          bottom="0"
          left="10rem"
          zIndex={100}
          borderRadius="20"
        >
          <div className="bg-[#E4D9ED] flex flex-col items-center w-full justify-start rounded-2xl h-fit pb-4 gap-0">
            <button
              className="text-left rounded-t-lg leading-none text-white bg-[#56505B] py-3 w-full hover:opacity-70"
              onClick={() => navigate("/configuracao")}
            >
              <span className="inline-flex items-center gap-2 w-full">
                <BiHelpCircle className="relative 2xl:text-3xl text-lg w-1/4 "></BiHelpCircle>
                <span className="2xl:text-xl text-lg w-3/4">Configurações</span>
              </span>
            </button>

            <button
              className="text-left rounded-t-lg leading-none text-cinza py-3 w-full hover:opacity-70"
              onClick={() => navigate("/ajuda")}
            >
              <span className="inline-flex items-center gap-2 w-full">
                <BiHelpCircle className="relative 2xl:text-3xl text-lg w-1/4 "></BiHelpCircle>
                <span className="2xl:text-lg text-lg w-3/4">
                  Central de Ajuda
                </span>
              </span>
            </button>

            <button
              className="text-left rounded-t-lg leading-none text-cinza py-3 w-full hover:opacity-70"
              onClick={Sair}
            >
              <span className="inline-flex items-center gap-2 w-full">
                <BiHelpCircle className="relative 2xl:text-3xl text-lg w-1/4 "></BiHelpCircle>
                <span className="2xl:text-xl text-lg w-3/4">Sair</span>
              </span>
            </button>

            <button
              className="text-center rounded-lg leading-none bg-[#C4BCC7] px-4 py-2 hover:opacity-70"
              onClick={onFeedOpen}
            >
              <span className="inline-flex items-center gap-2 w-full">
                <span className="2xl:text-xl text-lg">Dar Feedback</span>
              </span>
            </button>
          </div>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isFeedOpen}
        onClose={onFeedClose}
        motionPreset="slideInBottom"
        blockScrollOnMount={false}
      >
        <ModalContent
          minWidth={"40vw"}
          h={"20em"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="20"
          top={"2em"}
          zIndex={"1000"}
          background={"#7E1AD4"}
        >
          <div className="flex flex-col items-center justify-center space-y-8 w-full">
            {/* texto */}
            <div className="flex flex-col justify-center items-center text-white gap-y-3">
              <div className="flex">
              </div>
              <span className="uppercase font-bold text-xl">
                Como está a sua experiência?
              </span>
            </div>

            {/* feedback */}
            <div className="flex items-center justify-center gap-x-6 font-semibold">
              <div className="flex flex-col items-center justify-center gap-y-2 text-white div">
                <div className="w-20 h-20 rounded-full bg-slate-300"></div>
                <span className="uppercase">péssima</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white div">
                <div className="w-20 h-20 rounded-full bg-slate-300"></div>
                <span className="uppercase">ruim</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white div">
                <div className="w-20 h-20 rounded-full bg-slate-300"></div>
                <span className="uppercase">boa</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white div">
                <div className="w-20 h-20 rounded-full bg-slate-300"></div>
                <span className="uppercase">incrível</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white div">
                <div className="w-20 h-20 rounded-full bg-slate-300"></div>
                <span className="uppercase">perfeita</span>
              </div>
            </div>

            <button className="w-44 flex items-center justify-center text-center rounded-lg bg-[#C4BCC7] px-4 py-2">
              <span className="items-center gap-2 w-full">
                <span className="">Enviar Feedback</span>
              </span>
            </button>
          </div>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
