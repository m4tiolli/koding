import { BsBook } from "react-icons/bs";
import { PiSword } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { LuPaintBucket } from "react-icons/lu";
import Logo from "../../Components/Logo";
import { useState } from "react";
import Materiais from "../Materiais/Materiais";
import "./Home.css";
import { useDisclosure } from "@chakra-ui/react";

import { Modal, ModalContent, ModalBody } from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [open, setOpen] = useState(false);

  const [button, setButton] = useState("materiais");

  const toggleButton = (type) => {
    setButton(type);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
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
            onClick={() => setOpen(!open)}
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
        className="fixed width-header h-16 flex items-center justify-end shadow-sm "
        style={{ background: "#EDD8FF" }}
      >
        <div className="h-3/5 w-2/5 flex items-center justify-end pr-4">
          <form className="flex w-fit items-center justify-center  " action="">
            <input
              className="bg-transparent outline-none w-7/12 text-2xl"
              type="text"
            />
            <a href="">
              <BiSearch className="text-3xl" />
            </a>
          </form>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full hover:text-white hover:bg-cinza transition-all ${isOpen ? "text-white bg-cinza" : "text-cinza bg-transparent"}`}>
            <LuPaintBucket onClick={onOpen} className="text-2xl cursor-pointer relative" />
          </div>
        </div>
      </header>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' blockScrollOnMount={false}>
        <ModalContent w="20vw" borderRadius={20} position="fixed" top="0" right="1rem">
          <ModalBody>
            <div>

              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${isChecked ? "bg-blue-600" : "bg-cinza"
                      }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${isChecked ? "translate-x-full" : ""
                      }`}
                  ></div>
                </div>
              </label>
            </div>
            <div className="bg-cinza w-full ">
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={!isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${!isChecked ? "bg-blue-600" : "bg-cinza"
                      }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${!isChecked ? "translate-x-full" : ""
                      }`}
                  ></div>
                </div>
              </label>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {button === "materiais" ? (
        <Materiais />
      ) : button === "perfil" ? (
        "oi"
      ) : button === "desafios" ? (
        "tchau"
      ) : null}

      {open && (
        <nav
          onClick={() => setOpen(false)}
          className="flex flex-col space-y-3 rounded-xl shadow-md 2xl:w-64 w-56 ml-5 p-5 mb-10 fixed 4k:bottom-2/4 2xl:bottom-42 laptop:bottom-32 xl:bottom-10 bottom-0 left-40"
          style={{ background: "#E4D9ED" }}
        >
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
            style={{ background: "#C4BCC7", transition: "300ms ease-in" }}
          >
            <span className="inline-flex items-center">
              <span className="2xl:text-xl text-lg">Dar Feedback</span>
            </span>
          </button>
        </nav>
      )}
    </div>
  );
}
