import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
import CardAula from "../../Components/CardAula/CardAula";

function Aulas() {
  const mode = localStorage.getItem("theme");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const location = useLocation();
  const aulas = location.state.aulas;

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

  const navigate = useNavigate();
  return (
    <div
      className="flex h-full w-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <Menu />

      {/* Conteudo */}

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro min-h-screen">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="flex mt-28 ml-8 mb-5 text-3xl cursor-pointer dark:text-white"
        />

        {/* Barra de pesquisa */}
        <div className="flex h-64 w-5/12 ml-12 -m-20 mb-2 items-center justify-center gap-3">
          <form
            action=""
            className="flex rounded-xl w-full items-center justify-center text-white text-xl p-2 dark:bg-darkpesquisa"
            style={{ background: Color(mode, "#811CD7") }}
          >
            <input
              type="text"
              className="bg-transparent outline-none text-2xl"
            />
            <a href="">
              <BiSearch className="xl:mr-5 lg:mr-5 laptop:mr-3 mr-32 text-3xl text-white ml-20"></BiSearch>
            </a>
          </form>

          {/* Filtro */}
          <div className="flex h-10 w-56 space-x-8 items-center justify-center">
            <button onClick={onOpen}>
              <BsFilter
                className="flex items-center justify-center text-4xl text-white rounded-md dark:bg-darkpesquisa"
                style={{ background: Color(mode, "#811CD7") }}
              ></BsFilter>
            </button>
          </div>
        </div>

        {/* Cards */}
        {aulas.map((aula, index) => (
          <CardAula aula={aula} key={index} />
        ))}

        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="30vw"
            h="22vw"
            display="flex"
            marginBottom={"auto"}
            background="#E4D9ED"
            borderRadius="0.9em"
            zIndex={100}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
          >
            {/* Tags */}

            <div className="h-full flex justify-center items-center gap-x-5 gap-y-3 flex-wrap">
              <div className="mb-5 mt-5">
                <span className="flex justify-center text-lg">
                  Filtrar por:
                </span>
                <div className="border-b-2 w-32 border-black/50"></div>
              </div>
              <div className="flex justify-center gap-y-2 gap-x-3 flex-wrap">
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-orange-300">
                  <AiOutlineClose className="text-xl" />
                  <span id="filter" className="text-lg">
                    html
                  </span>
                </button>
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-blue-300">
                  <AiOutlineClose className="text-xl" />
                  <span className="text-lg">css</span>
                </button>
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-yellow-300">
                  <AiOutlineClose className="text-xl" />
                  <span className="text-lg">javascript</span>
                </button>
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-purple-300">
                  <AiOutlineClose className="text-xl" />
                  <span className="text-lg">php</span>
                </button>
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-orange-300">
                  <AiOutlineClose className="text-xl" />
                  <span id="filter" className="text-lg">
                    estrutura
                  </span>
                </button>
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-blue-300">
                  <AiOutlineClose className="text-xl" />
                  <span className="text-lg">flexbox</span>
                </button>
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-yellow-300">
                  <AiOutlineClose className="text-xl" />
                  <span className="text-lg">input</span>
                </button>
                <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 hover:bg-purple-300">
                  <AiOutlineClose className="text-xl" />
                  <span className="text-lg">introdução</span>
                </button>
              </div>
              <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 mb-10 mt-5 text-xl">Confirmar</button>
            </div>
          </ModalContent>
        </Modal>
      </main>
    </div>
  );
}

export default Aulas;
