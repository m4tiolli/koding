import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Materiais.css";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
import { useEffect, useState } from "react";
import CardCapitulo from "../../Components/CardCapitulo/CardCapitulo";
import { Spinner } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Materiais = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  const [isLoading, setIsLoading] = useState([true, true]);

  const [linguagens, setLinguagens] = useState([]);
  const [capitulos, setCapitulos] = useState([]);

  useEffect(() => {
    axios
      .get("https://tcckoding.azurewebsites.net/linguagens")
      .then((response) => {
        setLinguagens(response.data);
        response.data.forEach((linguagem) => {
          handleLinguagemClick(linguagem.id);
        });
        setIsLoading([false, true]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLinguagemClick = (linguagemId) => {
    axios
      .get(`https://tcckoding.azurewebsites.net/capitulos/${linguagemId}`)
      .then((response) => {
        setIsLoading([false, false]);
        setCapitulos((prevCapitulos) => [...prevCapitulos, ...response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(capitulos);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={`flex h-full w-full dark:bg-darkcinzaclaro`}>
      <main className={`w-full min-h-screen ml-56 mr-2 overflow-hidden`}>
        {/* Barra de pesquisa */}
        <div className="flex h-64 w-5/12 ml-10 mt-10 items-center justify-center gap-3">
          <form
            action=""
            className={`flex rounded-xl w-full items-center justify-center text-white text-xl p-2 dark:bg-darkpesquisa`}
            style={{ backgroundColor: Color(mode, "#811CD7") }}
          >
            <input
              type="text"
              className="bg-transparent outline-none text-2xl"
            />
            <a href="">
              <BiSearch className={`text-3xl text-white ml-20`} />
            </a>
          </form>

          {/* Filtro */}
          <div className="flex h-10 w-56 space-x-8 items-center justify-center">
            <button onClick={onOpen}>
              <BsFilter
                className={`flex items-center justify-center text-4xl text-white rounded-md dark:bg-darkpesquisa`}
                style={{ backgroundColor: Color(mode, "#811CD7") }}
              />
            </button>
          </div>
        </div>

        {/* Cards */}
        {isLoading[0] == true ? (
          <div className="grid place-items-center h-1/3 w-full">
            <Spinner color={"white"} size={"xl"} />
          </div>
        ) : (
          linguagens.map((linguagem, index) => (
            <div
              className="flex flex-col justify-center ml-10 space-y-8 mb-20"
              key={index}
            >
              <span
                className={`text-2xl font-semibold ${Color(
                  mode,
                  "dark:text-white"
                )}`}
              >
                Aprendendo {linguagem.nome}
              </span>
              {isLoading[1] === true ? (
                <Spinner color={"white"} />
              ) : (
                <div className="cursor-grab w-[95%]">
                  <Slider {...settings}>
                    {capitulos
                      .filter((capitulo) => capitulo.linguagem === linguagem.id)
                      .map((capitulo, index) => (
                        <div key={index}>
                          <CardCapitulo capitulo={capitulo} />
                        </div>
                      ))}
                  </Slider>
                </div>
              )}
            </div>
          ))
        )}
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent
            w="30vw"
            h="15vw"
            display="flex"
            marginBottom={"auto"}
            zIndex={100}
            background="#E4D9ED"
            borderRadius="0.9em"
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
          >
            {/* Tags */}

            <div className="h-full flex justify-center items-center gap-x-5 flex-wrap">
              <div className="mb-5 mt-5">
                <span className="flex justify-center text-lg">
                  Filtrar por:
                </span>
                <div className="border-b-2 w-32 border-black/50"></div>
              </div>
              <div className="flex justify-center gap-y-2 gap-x-3 flex-wrap mb-10 mt-3">
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
              </div>
              <button className="flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 mb-10 text-xl">
                Confirmar
              </button>
            </div>
          </ModalContent>
        </Modal>
      </main>
    </div>
  );
};

export default Materiais;
