import { IoIosLogOut} from "react-icons/io";
import { IoArrowBack} from "react-icons/io5";
import { BsTrash3 } from "react-icons/bs";
import {
  Button,
  ChakraProvider,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import Menu from "../../Components/Menu/Menu";

function Configuracao() {
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

  return (
    <ChakraProvider>
      <div
        className="flex h-full w-full"
        style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}
      >
        <Menu />
        
        <main className="w-full ml-[208px] mt-[3.8rem] overflow-hidden dark:bg-darkcinzaclaro">

        <IoArrowBack onClick={() => navigate(-1)} className="flex mt-10 ml-10 mb-5 text-3xl cursor-pointer dark:text-white"/>
        
          <div className="mb-10">
            <span className="text-3xl font-semibold dark:text-white ml-10">Configurações</span>
          </div>

          {/* Dados */}

          <container className="w-full h-full flex flex-col gap-y-10 ml-20">
            {/* Enviar Foto */}

            <form action="" method="" className="flex flex-col lg:flex-row gap-x-32 lg:gap-x-64">
              <div className="flex items-center gap-6">
                <span className="text-lg dark:text-white">Personalizar Avatar</span>
                <label
                  className="p-2 w-42 rounded-xl border-solid border-black cursor-pointer shadow-lg text-center"
                  style={{ background: "#efefef" }}
                  htmlFor="image"
                >
                  {" "}
                  Selecionar arquivo
                  <input className="hidden" name="image" type="file" id="image" />
                </label>
              </div>

              <div>
                <button
                  className="w-auto h-10 p-3 mt-5 lg:mt-0 flex items-center rounded-xl shadow-lg text-white" style={{ background: Color(mode, '#22C55E') }}
                  type="submit"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>

            {/* Dados conta */}

            <form
              action=""
              method="post"
              className="flex flex-col gap-y-5 text-lg"
            >
              <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span>Nome</span>
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

              <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                 <span>Username</span>
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

              <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span>E-mail</span>
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

              <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span>Senha</span>
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

              <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span>Confirmar senha</span>
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

            <div className="flex flex-col gap-y-5 text-lg">
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
                  <span>Alto Contraste</span>
                </div>

                <select
                  className="p-2 w-[250px] mt-2 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer"
                  style={{ background: "#efefef" }}
                  name="contraste"
                  id="contraste"
                >
                  <option value="on">Habilitado</option>
                  <option value="off">Desabilitado</option>
                </select>
              </div>
            </div>

            {/* Logout */}

            <div className="flex flex-col items-center justify-center py-10 w-96 text-gray-700 gap-3">
              <div className="flex items-center gap-3 w-full">
                <IoIosLogOut className="text-2xl dark:text-white"></IoIosLogOut>
                <button className="text-xl dark:text-white" onClick={openLogoutModal}>
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
                  <ModalContent>
                    <ModalHeader>Excluir conta</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Você deseja mesmo excluir sua conta?</ModalBody>
                    <ModalFooter>
                      <Button variant={"ghost"} onClick={closeDeleteAccountModal}>Voltar</Button>
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
                  <ModalContent>
                    <ModalHeader>Sair</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Você deseja mesmo sair?</ModalBody>
                    <ModalFooter>
                      <Button variant={"ghost"} onClick={closeLogoutModal}>Voltar</Button>
                      <Button variant={"ghost"} colorScheme={"red"}>
                        Sair
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </container>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default Configuracao;
