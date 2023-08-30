import { BsBook, BsFillMoonFill } from "react-icons/bs";
import { PiSword } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { LuPaintBucket } from "react-icons/lu";
import { ImContrast } from 'react-icons/im';
import Logo from "../../Components/Logo";
import { useState } from "react";
import Materiais from "../Materiais/Materiais";
import Perfil from "../Perfil/Perfil";
import "./Home.css";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";

import { ThemeContext } from '../../Components/Theme/theme-context';

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isMaisOpen, onOpen: onMaisOpen, onClose: onMaisClose } = useDisclosure();

  const [button, setButton] = useState("materiais");

  const toggleButton = (type) => {
    setButton(type);
  };

  const [isChecked, setIsChecked] = useState(false);

  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="flex h-full w-full"
        style={{
          background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
        }}
      >
        <aside
          className="h-screen w-52 p-5 fixed top-0 flex flex-col items-start justify-center shadow-lg"
          style={{ background: "#EDD8FF" }}
        >
          <header className="w-full mb-12">
            <Logo className="absolute -top-4 -left-20 scale-50" />
          </header>

          <nav className="flex flex-col flex-auto justify-start pt-24 w-full">
            <button
              className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${button == "materiais" ? "bg-white/50" : ""
                }`}
              style={{ transition: "150ms ease-in" }}
              onClick={() => toggleButton("materiais")}
            >
              <span className="inline-flex items-center gap-5">
                <BsBook className="relative text-3xl">materiais</BsBook>
                <span className="text-lg">Materiais</span>
              </span>
            </button>

            <button
              className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${button == "perfil" ? "bg-white/50" : ""
                }`}
              style={{ transition: "150ms ease-in" }}
              onClick={() => toggleButton("perfil")}
            >
              <span className="inline-flex items-center gap-5">
                <AiOutlineUser className="relative text-3xl">
                  perfil
                </AiOutlineUser>
                <span className="text-lg">Perfil</span>
              </span>
            </button>

            <button
              className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${button == "desafios" ? "bg-white/50" : ""
                }`}
              style={{ transition: "150ms ease-in" }}
              onClick={() => toggleButton("desafios")}
            >
              <span className="inline-flex items-center gap-5">
                <PiSword className="relative text-3xl">desafios</PiSword>
                <span className="text-lg">Desafios</span>
              </span>
            </button>

            <button
              onClick={onMaisOpen}
              className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50"
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
          className="fixed width-header h-16 flex items-center justify-end shadow-sm z-10"
          style={{ background: "#EDD8FF" }}
        >
          <div className="h-3/5 w-2/5 flex items-center justify-end pr-4">
            <form className="flex w-fit items-center justify-center  " action="">
              <input
                className="bg-transparent outline-none w-7/12 text-2xl"
                type="text"
              />
              <a href="">
                <BiSearch className="text-3xl text-cinza" />
              </a>
            </form>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full hover:opacity-60  text-white bg-cinza`}>
              <LuPaintBucket onClick={onOpen} className="text-2xl cursor-pointer relative" />
            </div>
          </div>
        </header>

        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' blockScrollOnMount={false}>
          <ModalContent w="16vw" position="fixed" top="0" right="1rem" zIndex={100} borderRadius="100">
            <div className="bg-[#56505B] w-full py-3 flex justify-evenly items-center rounded-t-xl">
              <BsFillMoonFill className="text-[#e4d9ed] text-xl" />
              <p className="text-[#e4d9ed]">Modo escuro</p>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-6 w-10 rounded-full bg-[#e4d9ed]`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition bg-[#56505B] ${isChecked ? "translate-x-full" : ""}`}
                  ></div>
                </div>
              </label>
            </div>
            <div className="bg-[#e4d9ed] w-full py-3 flex justify-evenly items-center rounded-b-xl">
              <ImContrast className="text-[#56505B] text-xl" />
              <p className="text-[#56505B]">Alto contraste</p>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={!isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-6 w-10 rounded-full bg-[#56505B]`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition bg-[#e4d9ed] ${!isChecked ? "translate-x-full" : ""
                      }`}
                  ></div>
                </div>
              </label>
            </div>
          </ModalContent>
        </Modal>
        <Modal isOpen={isMaisOpen} onClose={onMaisClose} motionPreset='slideInRight' blockScrollOnMount={false}>
          <ModalContent w="16vw" position="fixed" bottom="0" left="10rem" zIndex={100} borderRadius="100">
            <div className="bg-cinza">
              <button className="text-left rounded-lg leading-none hover:bg-purple-700 hover:text-white ">
                <span className="inline-flex items-center gap-2">
                  <BiHelpCircle className="relative 2xl:text-3xl text-lg"></BiHelpCircle>
                  <span className="2xl:text-xl text-lg">Configurações</span>
                </span>
              </button>

              <button className="text-left rounded-lg leading-none hover:bg-purple-700 hover:text-white ">
                <span className="inline-flex items-center gap-2">
                  <BiHelpCircle className="relative 2xl:text-3xl text-lg"></BiHelpCircle>
                  <span className="2xl:text-xl text-lg">Central de Ajuda</span>
                </span>
              </button>

              <button className="text-left rounded-lg leading-none mb-32 hover:bg-purple-700 hover:text-white ">
                <span className="inline-flex items-center gap-2">
                  <BiHelpCircle className="relative 2xl:text-3xl text-lg"></BiHelpCircle>
                  <span className="2xl:text-xl text-lg">Sair</span>
                </span>
              </button>

              <button
                className="text-center rounded-lg leading-none mb-32 hover:scale-110"
                style={{ background: "#C4BCC7" }}
              >
                <span className="inline-flex items-center">
                  <span className="2xl:text-xl text-lg">Dar Feedback</span>
                </span>
              </button>

            </div>
          </ModalContent>
        </Modal>

        {button === "materiais" ? (
          <Materiais />
        ) : button === "perfil" ? (
          <Perfil />
        ) : button === "desafios" ? (
          "tchau"
        ) : null}
      </div>
    </ThemeContext.Provider>
  );
}
