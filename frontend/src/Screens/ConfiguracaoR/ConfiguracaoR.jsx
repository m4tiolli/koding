import { IoIosLogOut } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { BsTrash3 } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";
import {
  Button,
  ChakraProvider,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/react';

import { useEffect, useState } from "react";
import MenuR from "../../Components/MenuR/MenuR";

function Configuracao() {
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const {
    isOpen: logoutModalOpen,
    onOpen: openLogoutModal,
    onClose: closeLogoutModal,
  } = useDisclosure();
  const {
    isOpen: deleteAccountModalOpen,
    onOpen: openDeleteAccountModal,
    onClose: closeDeleteAccountModal,
  } = useDisclosure();
  const navigate = useNavigate();

  function Sair() {
    localStorage.removeItem("nivel");
    document.location.reload()
  }
  
  return (
    <ChakraProvider>
      <div
        className="flex h-full w-full md:h-full notebook:h-screen laptop1024:h-screen"
        style={{
          background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)",
        }}
      >
        <MenuR />

        <main className="w-full mr-2 lg:flex lg:flex-col lg:items-center lg:ml-48 lg:mt- overflow-hidden dark:bg-darkfundoR">
        {responsive ? <Navbar /> : ""}
          <IoArrowBack
            onClick={() => navigate(-1)}
            className="mt-10 ml-10 mb-5 text-3xl cursor-pointer dark:text-white hidden"
          />

          <div className="mb-5 mt-20 mobile375:ml-8 mobile425:ml-14 md:flex md:justify-center md:-ml-10 md:mb-14">
            <span className="text-3xl font-semibold dark:text-white ml-10 xl:mt-5">
              Configurações
            </span>
          </div>

          {/* Dados */}

          <div className="w-full h-full flex flex-col md:flex-row gap-y-10 ml-20 md:ml-32 lg:gap-x-12 lg:ml-40 lg:mt-5 xl:justify-center xl:gap-x-20">

            {/* Dados conta */}

            <form
              action=""
              method="post"
              className="flex flex-col gap-y-5 text-lg text-center mobile375:-ml-8 mobile425:-ml-5 -ml-12 lg:-ml-20 lg:mt-8"
            >
              <div className="md:w-4/5 w-3/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span className="ml-7">Nome</span>
                </div>

                <label className="">
                  <input
                    className="ml-8 p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="name"
                    type="text"
                  />
                </label>
              </div>

              <div className="md:w-4/5 w-3/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span className="ml-7">Telefone</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="username"
                    type="text"
                  />
                </label>
              </div>

              <div className="md:w-4/5 w-3/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span className="ml-7">E-mail</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="email"
                    type="email"
                  />
                </label>
              </div>

              <div className="md:w-4/5 w-3/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span className="ml-7">Senha</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="password"
                    type="password"
                  />
                </label>
              </div>

              <div className="md:w-4/5 w-3/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span className="ml-7 text-center">Confirmar senha</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="password"
                    type="password"
                  />
                </label>
              </div>
            </form>

            {/* Modos */}

            <div className="flex flex-col gap-y-5 text-lg mobile375:-ml-5 mobile425:ml-2 -ml-12">
              <div className="flex flex-col">
                <div className="w-52 dark:text-white">
                  <span>Modo Escuro</span>
                </div>

                <select
                  className="p-2 w-[250px] mt-2 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer"
                  style={{ background: "#efefef" }}
                  name="darkMode"
                  id="darkMode"
                >
                  <option value="system">Padrão do Sistema</option>
                  <option value="on">Habilitado</option>
                  <option value="off">Desabilitado</option>
                </select>
              </div>

              <div className="flex flex-col">
                <div className="w-52 dark:text-white">
                  <span>Modo Daltonismo</span>
                </div>

                <select
                  className="p-2 w-[250px] mt-2 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer"
                  style={{ background: "#efefef" }}
                  name="contraste"
                  id="contraste"
                >
                  <option value="on">Azul</option>
                  <option value="on">Vermelho</option>
                  <option value="off">Verde</option>
                </select>
              </div>
            </div>
            
            <form
              action=""
              method=""
              className="flex flex-col lg:flex-row gap-x-32 lg:gap-x-64"
            >

              <div>
                <button
                  className="w-auto h-10 p-3 mobile375:ml-5 mobile425:ml-12 md:-ml-[220px] md:mt-64 -ml-4 lg:mt-52 lg:-ml-64 xl:-ml-72 flex items-center rounded-xl shadow-lg text-white"
                  style={{ background: Color(mode, "#22C55E") }}
                  type="submit"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>

            {/* Logout */}

            <div className="flex flex-col items-center md:mt-44 md:-ml-64 mobile375:-ml-5 mobile425:ml-2 lg:-ml-[340px] xl:-ml-[400px] xl:mt-52 -ml-12 justify-center py-10 w-96 text-gray-700 gap-3">
              <div className="flex items-center gap-3 w-full">
                <IoIosLogOut className="text-2xl dark:text-white"></IoIosLogOut>
                <button
                  className="text-xl dark:text-white"
                  onClick={openLogoutModal}
                >
                  Sair
                </button>
              </div>

              <div className="flex items-center gap-3 w-full" style={{ color: Color(mode, '#DC2626') }}>
                <BsTrash3 className="text-2xl"></BsTrash3>
                <button className="text-xl" onClick={openDeleteAccountModal}>
                  Excluir minha conta
                </button>
                <Modal
                  isOpen={deleteAccountModalOpen}
                  onClose={closeDeleteAccountModal}
                  motionPreset="slideInBottom"
                  blockScrollOnMount={false}
                  isCentered={true}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Excluir conta</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Você deseja mesmo excluir sua conta?</ModalBody>
                    <ModalFooter>
                      <Button
                        variant={"ghost"}
                        onClick={closeDeleteAccountModal}
                      >
                        Voltar
                      </Button>
                      <Button variant={"ghost"} colorScheme={"red"}>
                        Excluir
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Modal
                  isOpen={logoutModalOpen}
                  onClose={closeLogoutModal}
                  motionPreset="slideInBottom"
                  blockScrollOnMount={false}
                  isCentered={true}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Sair</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Você deseja mesmo sair?</ModalBody>
                    <ModalFooter>
                      <Button variant={"ghost"} onClick={closeLogoutModal}>
                        Voltar
                      </Button>
                      <Button variant={"ghost"} colorScheme={"red"} onClick={Sair}>
                        Sair
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default Configuracao;
