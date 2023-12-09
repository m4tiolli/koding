import { IoIosLogOut } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
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
  ModalOverlay,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
import { useEffect, useRef, useState } from "react";
import Menu from "../../Components/Menu/Menu";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Configuracao() {
  const navigate = useNavigate();

  if (!localStorage.getItem("user") || !localStorage.getItem("nivel")) {
    navigate("/");
  }
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

  function Sair() {
    localStorage.removeItem("nivel");
    document.location.reload();
  }

  const user = JSON.parse(atob(localStorage.getItem("user")));

  const [nome, setNome] = useState(user.nome);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState();

  const [color, setColor] = useState(localStorage.getItem("theme"));

  const Update = () => {
    if (senha == user.senha) {
      const body = { username, email, senha };
      user.username = username;
      user.email = email;
      user.email = senha;
      localStorage.setItem("theme", color);
      axios
        .put(`https://tcckoding.azurewebsites.net/crianca/${user.id}`, body)
        .then(
          toast.success("Dados alterados com sucesso!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        )
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => console.error(err));
    } else {
      toast.error("A senha não coincide!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const selectdalt = useRef(null);
  const selectdark = useRef(null);

  const Excluir = () => {
    axios
      .delete(`https://tcckoding.azurewebsites.net/crianca/${user.id}`)
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("nivel");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error("Erro ao excluir:", error);
      });
  };

  return (
    <ChakraProvider>
      <div
        className="flex h-full w-full"
        style={{
          background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
        }}
      >
        <Menu />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={3}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <main className="w-full ml-[208px] overflow-hidden dark:bg-darkcinzaclaro">
          <IoArrowBack
            onClick={() => navigate(-1)}
            className="flex mt-24 ml-10 mb-5 text-3xl cursor-pointer dark:text-white"
          />

          <div className="mb-10">
            <span className="text-3xl font-semibold dark:text-white ml-10">
              Configurações
            </span>
          </div>

          {/* Dados */}

          <div className="w-full h-full flex flex-col gap-y-10 ml-20">
            {/* Dados conta */}

            <button
              className="laptop:1024 -ml-32 w-auto h-10 p-3 mt-5 lg:mt-0 flex items-center rounded-xl shadow-lg text-white fixed right-[15em]"
              style={{ background: Color(mode, "#22C55E") }}
              type="submit"
              onClick={Update}
            >
              Salvar Alterações
            </button>

            <div className="flex flex-col gap-y-5 text-lg">
              <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span>Nome</span>
                </div>

                <label className="">
                  <input
                    className="ml-8 p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg opacity-80 cursor-not-allowed"
                    style={{ background: "#efefef" }}
                    name="name"
                    type="text"
                    value={nome}
                    disabled={true}
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
                <div className="w-full dark:text-white">
                  <span>Senha Atual</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="password"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </label>
              </div>
            </div>

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
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  ref={selectdark}
                  disabled={
                    color == "tritanomaly" ||
                    color == "deuteranomaly" ||
                    color == "protanomaly"
                  }
                >
                  <option value="">Padrão</option>
                  <option value="dark">Habilitado</option>
                  <option value="light">Desabilitado</option>
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
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  ref={selectdalt}
                  disabled={color == "dark"}
                >
                  <option value="">Nenhum</option>
                  <option value="tritanomaly">Tritanomalia</option>
                  <option value="deuteranomaly">Deuteranomalia</option>
                  <option value="protanomaly">Protanomalia</option>
                </select>
              </div>
            </div>

            {/* Logout */}

            <div className="flex flex-col items-center justify-center py-10 w-96 text-gray-700 gap-3">
              <div className="flex items-center gap-3 w-full">
                <IoIosLogOut className="text-2xl dark:text-white"></IoIosLogOut>
                <button
                  className="text-xl dark:text-white"
                  onClick={openLogoutModal}
                >
                  Sair
                </button>
              </div>

              <div
                className="flex items-center gap-3 w-full"
                style={{ color: Color(mode, "#DC2626") }}
              >
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
                      <Button
                        variant={"ghost"}
                        colorScheme={"red"}
                        onClick={Excluir}
                      >
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
                      <Button
                        variant={"ghost"}
                        colorScheme={"red"}
                        onClick={Sair}
                      >
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
