import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { LuPaintBucket } from "react-icons/lu";
import { BsFillMoonFill } from "react-icons/bs";
import { useDisclosure, Modal, ModalContent } from "@chakra-ui/react";
import { ImContrast, ImBlocked } from "react-icons/im";
import { ChakraProvider } from "@chakra-ui/react";
import { BiChevronLeft } from "react-icons/bi";

import blue from "../blue.png";
import green from "../green.png";
import red from "../red.png";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDalOpen,
    onOpen: onDalOpen,
    onClose: onDalClose,
  } = useDisclosure();
  const [isResponsive, setResponsive] = useState();

  const [isChecked, setIsChecked] = useState(false);
  const [mode, setMode] = useState("light");
  const [blindChecked, setBlindChecked] = useState(false);

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

  function darkNotAllowed() {
    return blindChecked === true ? true : false;
  }

  function blindNotAllowed() {
    return isChecked ? true : false;
  }

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 700);
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ChakraProvider>
      <div className="flex justify-between items-center absolute top-0 w-11/12 pt-2">
        <Logo isDark={localStorage.theme === "dark"} />
        <div className="flex w-full md:w-2/5 lg:w-2/6 xl:w-1/4 2xl:w-1/6 justify-between items-center h-8 md:h-12 ">
          <Link
            to={"/login"}
            className="flex items-center justify-center bg-[#F1E0FF] h-full rounded-xl shadow-md text-cinza text-md md:text-xl hover:opacity-70 active:translate-y-1 active:shadow-xs font-semibold px-2"
          >
            {!isResponsive ? <button>Entrar</button> : <FaUserAlt />}
          </Link>
          <Link
            to={"/criar-conta"}
            className="flex items-center justify-center bg-[#F4BA84] w-fit h-full rounded-lg shadow-md text-cinza text-md md:text-xl hover:opacity-70 active:translate-y-1 active:shadow-xs px-2 md:px-4 font-semibold"
          >
            <button>Criar Conta</button>
          </Link>
          <div
            className={`w-10 h-10 flex items-center relative justify-center rounded-full hover:opacity-60  text-white bg-cinza dark:bg-white dark:text-darkcinza`}
          >
            <LuPaintBucket
              onClick={onOpen}
              className="text-2xl cursor-pointer relative"
            />
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
                          localStorage.theme === "light"
                            ? "opacity-50 scale-95"
                            : ""
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
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
