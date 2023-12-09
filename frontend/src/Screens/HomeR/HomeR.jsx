import { BsFillMoonFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { ImContrast } from "react-icons/im";
import { useState, useEffect } from "react";
import Desempenho from "../Desempenho/Desempenho";
import PerfilR from "../PerfilR/PerfilR";
import MenuR from "../../Components/MenuR/MenuR";
import "./HomeR.css";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.nivel == "responsavel"
      ? navigate("/pais/home")
      : localStorage.nivel == "crianca"
      ? navigate("/home")
      : navigate("/");
  }, [navigate]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isMaisOpen,
    onOpen: onMaisOpen,
    onClose: onMaisClose,
  } = useDisclosure();

  const [button, setButton] = useState("desempenho");

  function Sair() {
    localStorage.removeItem("nivel");
    document.location.reload();
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

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

  const [mode, setMode] = useState("");
  const [blindChecked, setBlindChecked] = useState(false);

  /**
   *
   * @param {string} type
   * @returns
   */

  const toggleButtonColorBlind = (type) => {
    mode === type ? setMode("") : setMode(type);
    setBlindChecked((prev) => !prev);
  };

  /**
   *
   * @param {string} mode
   * @param {string} color
   * @returns
   */

  function darkNotAllowed() {
    return blindChecked === true ? true : false;
  }

  function blindNotAllowed() {
    return isChecked ? true : false;
  }

  return (
    <ChakraProvider>
      <div
        className="flex h-full w-full"
        style={{
          background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)",
        }}
      >
        <MenuR />

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
            borderRadius="100"
          >
            <div
              className={`bg-[#50535B] w-full py-3 flex justify-evenly items-center rounded-t-xl`}
            >
              <BsFillMoonFill className="text-[#BCC2C7] text-xl" />
              <p className="text-[#BCC2C7]">Modo escuro</p>
              <label
                className={`flex cursor-pointer select-none items-center ${
                  darkNotAllowed() ? "cursor-not-allowed opacity-60" : ""
                }`}
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked && !blindChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                    disabled={darkNotAllowed()}
                  />
                  <div
                    className={`box block h-6 w-10 rounded-full bg-[#BCC2C7]`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition bg-[#50535B] ${
                      isChecked ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <div className="bg-[#BCC2C7] w-full py-3 flex justify-evenly items-center rounded-b-xl">
              <ImContrast className="text-[#50535B] text-xl" />
              <p className="text-[#50535B]">Alto contraste</p>
              <label
                className={`flex cursor-pointer select-none items-center ${
                  blindNotAllowed() ? "cursor-not-allowed opacity-60" : ""
                }`}
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={blindChecked && !isChecked}
                    onChange={() => toggleButtonColorBlind("deuteranomaly")}
                    className="sr-only"
                    disabled={blindNotAllowed()}
                  />
                  <div
                    className={`box block h-6 w-10 rounded-full bg-[#50535B]`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition bg-[#BCC2C7] ${
                      blindChecked ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
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
              <button className="text-left rounded-t-lg leading-none text-white bg-[#50535B] py-3 w-full hover:opacity-70">
                <span className="inline-flex items-center gap-2 w-full">
                  <IoSettingsOutline className="relative 2xl:text-3xl text-lg w-1/4 "></IoSettingsOutline>
                  <span className="2xl:text-xl text-lg w-3/4">
                    Configurações
                  </span>
                </span>
              </button>

              <button className="text-left rounded-t-lg leading-none text-cinza py-3 w-full hover:opacity-70">
                <span className="inline-flex items-center gap-2 w-full">
                  <BiHelpCircle className="relative 2xl:text-3xl text-lg w-1/4 "></BiHelpCircle>
                  <span className="2xl:text-lg text-md w-3/4">
                    Central de Ajuda
                  </span>
                </span>
              </button>

              <button
                className="text-left rounded-t-lg leading-none text-cinza py-3 w-full hover:opacity-70"
                onClick={Sair}
              >
                <span className="inline-flex items-center gap-2 w-full">
                  <IoMdExit className="relative 2xl:text-3xl text-lg w-1/4 "></IoMdExit>
                  <span className="2xl:text-xl text-lg w-3/4">Sair</span>
                </span>
              </button>

              <button className="text-center rounded-lg leading-none bg-[#B0B3C8] px-4 py-2 hover:opacity-70">
                <span className="inline-flex items-center gap-2 w-full">
                  <span className="2xl:text-xl text-lg">Dar Feedback</span>
                </span>
              </button>
            </div>
          </ModalContent>
        </Modal>

        {button === "desempenho" ? (
          <Desempenho />
        ) : button === "perfil" ? (
          <PerfilR />
        ) : null}
      </div>
    </ChakraProvider>
  );
}
