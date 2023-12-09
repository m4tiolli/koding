import { BsGraphUp, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { BiSearch, BiHelpCircle, BiChevronLeft } from "react-icons/bi";
import { LuPaintBucket } from "react-icons/lu";
import { ImContrast, ImBlocked } from "react-icons/im";
import Logo from "../Logo";
import { useState, useEffect } from "react";
import { ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { protanomaly, tritanomaly, deuteranomaly } from "../ColorBlind";
import blue from "../blue.png";
import green from "../green.png";
import red from "../red.png";
import { useNavigate } from "react-router-dom";
import incrivel from "../../assets/incrivel.png";
import perfeita from "../../assets/perfeita.png";
import pessima from "../../assets/pessima.png";
import boa from "../../assets/boa.png";
import ruim from "../../assets/ruim.png";
import { TbArrowsExchange2 } from "react-icons/tb";
import "../MenuR/MenuR.css";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";

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

  useEffect(() => {
    localStorage.nivel !== "responsavel" ? navigate("/") : "";
  }, [navigate]);

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
        className={`dark:bg-darkcinzaR h-screen w-52 p-5 fixed z-10 top-0 lg:flex hidden items-start justify-center shadow-lg`}
        style={{ backgroundColor: Color(mode, "#E5E9F9") }}
      >
        <header className="w-full mb-12">
          <Logo
            isResponsavel={true}
            className="absolute -top-4 -left-20 scale-50"
            isDark={localStorage.theme === "dark"}
          />
        </header>

        <nav className="flex flex-col flex-auto justify-start pt-24 w-full">
          <button
            className={`dark:text-white h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#2c4441] ${
              button == "materiais" ? "bg-white/50 dark:bg-[#2c4441]" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() => navigate("/pais/home")}
          >
            <span className="inline-flex items-center gap-5">
              <BsGraphUp className="relative text-3xl">desempenho</BsGraphUp>
              <span className="text-lg">Desempenho</span>
            </span>
          </button>

          <button
            className={`dark:text-white h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#2c4441] ${
              button == "pais/perfil" ? "bg-white/50 dark:bg-[#2c4441]" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() =>
              navigate("/pais/perfil", { state: { tela: "perfil" } })
            }
          >
            <span className="inline-flex items-center gap-5">
              <AiOutlineUser className="relative text-3xl">
                perfil
              </AiOutlineUser>
              <span className="text-lg">Perfil</span>
            </span>
          </button>
          <button
            className={`dark:text-white h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#2c4441] ${
              button == "pais/perfil" ? "bg-white/50 dark:bg-[#2c4441]" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() =>
              navigate("/pais/selecionar")
            }
          >
            <span className="inline-flex items-center gap-5">
              <TbArrowsExchange2 className="relative text-3xl">
                alterar criança
              </TbArrowsExchange2>
              <span className="text-lg">Trocar de criança</span>
            </span>
          </button>

          <button
            onClick={onMaisOpen}
            className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 dark:hover:bg-[#2c4441] dark:text-white`}
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
        className={`dark:bg-darkcinzaR fixed width-header h-16 lg:flex items-center justify-end z-10 hidden`}
        style={{ backgroundColor: Color(mode, "#E5E9F9") }}
      >
        <div className="h-3/5 w-2/5 flex items-center justify-end pr-4">
          <form className="flex w-fit items-center justify-center  " action="">
            <input
              className="bg-transparent outline-none w-7/12 text-2xl dark:text-white"
              type="text"
            />
            <a href="">
              <BiSearch className={`text-3xl text-cinza dark:text-white`} />
            </a>
          </form>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full hover:opacity-60 text-white bg-cinza dark:bg-white dark:text-darkcinzaR`}
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
            className={`bg-[#50535B] w-full py-3 flex justify-evenly items-center rounded-t-xl`}
          >
            <BsFillMoonFill className="text-[#e4d9ed] text-xl" />
            <p className="text-[#BCC2C7]">Modo escuro</p>
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
                  className={`box block h-6 w-10 rounded-full bg-[#BCC2C7]`}
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
            className="bg-[#BCC2C7] w-full py-3 flex flex-row-reverse justify-evenly items-center rounded-b-xl hover:cursor-pointer hover:opacity-60"
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
          <div className="bg-[#BCC2C7] flex flex-col items-center w-full justify-start rounded-2xl h-fit pb-4 gap-0">
            <button
              className="text-left rounded-t-lg leading-none text-white bg-[#50535B] py-3 w-full hover:opacity-70"
              onClick={() => navigate("/pais/configuracao")}
            >
              <span className="inline-flex items-center gap-2 w-full">
                <IoSettingsOutline className="relative 2xl:text-3xl text-lg w-1/4" />
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
                <IoMdExit className="relative 2xl:text-3xl text-lg w-1/4" />
                <span className="2xl:text-xl text-lg w-3/4">Sair</span>
              </span>
            </button>

            <button
              onClick={onFeedOpen}
              className="text-center rounded-lg leading-none bg-[#B0B3C8] px-4 py-2 hover:opacity-70"
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
        <ModalOverlay />
        <ModalContent
          minWidth={"50vw"}
          h={"30em"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="20"
          top={"2em"}
          zIndex={"1000"}
          background={"#4259CF"}
        >
          <div className="flex flex-col items-center justify-center space-y-5 w-full">
            {/* texto */}
            <div className="flex flex-col justify-center items-center text-white gap-y-3">
              <div className="flex">
                {/* <AiOutlineClose className="ml-96 -mt-4 text-2xl cursor-pointer"/> */}
              </div>
              <span className="uppercase font-bold text-xl">
                Como está a sua experiência?
              </span>
            </div>

            {/* feedback */}
            <div className="flex items-center justify-center notebook:gap-x-10 gap-x-10 laptop1024:gap-x-6 font-semibold">
              <div className="flex flex-col items-center justify-center gap-y-2 text-white">
                <div className="w-20 h-20 notebook:w-20 notebook:h-20 laptop1024:w-16 laptop1024:h-16 rounded-full bg-slate-300 div">
                  <img src={pessima} alt="Péssima" />
                </div>
                <span className="uppercase">péssima</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white">
                <div className="w-20 h-20 notebook:w-20 notebook:h-20 laptop1024:w-16 laptop1024:h-16 rounded-full bg-slate-300 div">
                  <img src={ruim} alt="Ruim" />
                </div>
                <span className="uppercase">ruim</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white">
                <div className="w-20 h-20 notebook:w-20 notebook:h-20 laptop1024:w-16 laptop1024:h-16 rounded-full bg-slate-300 div">
                  <img src={boa} alt="Boa" />
                </div>
                <span className="uppercase">boa</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white">
                <div className="w-20 h-20 notebook:w-20 notebook:h-20 laptop1024:w-16 laptop1024:h-16 rounded-full bg-slate-300 div">
                  <img src={incrivel} alt="Incrível" />
                </div>
                <span className="uppercase">incrível</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2 text-white">
                <div className="w-20 h-20 notebook:w-20 notebook:h-20 laptop1024:w-16 laptop1024:h-16 rounded-full bg-slate-300 div">
                  <img src={perfeita} alt="Perfeita" />
                </div>
                <span className="uppercase">perfeita</span>
              </div>
            </div>

            {/* campo-texto */}
            <div className="flex flex-col items-center text-white gap-y-3 text-lg">
              <span className="font-semibold">nos conte mais sobre:</span>
              <textarea
                className="text rounded-lg outline-none w-96 h-32 p-3 bg-[#41464D]"
              ></textarea>
            </div>

            <button className="w-44 flex items-center justify-center text-center rounded-lg bg-[#BCC2C7] px-4 py-2 button">
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
