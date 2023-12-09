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
        setCapitulos((prevCapitulos) => {
          const capitulosFiltrados = prevCapitulos.filter(
            (capitulo) => capitulo.linguagem !== linguagemId
          );
          return [...capitulosFiltrados, ...response.data];
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [isResponsive, setResponsive] = useState();

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 1400);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: isResponsive ? 3 : 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const id = capitulos.map((capitulo) => capitulo.id);

  useEffect(() => {
    setTimeout(() => {
      const slickArrows1 = document.querySelectorAll(".slick-prev");
      slickArrows1.forEach((arrow, index) => {
        var color1;
        switch (id[index]) {
          case 1:
            color1 = "#E88D59";
            break;
          case 2:
            color1 = "#4A90E2";
            break;
          case 3:
            color1 = "#F2D237";
            break;
          case 4:
            color1 = "#5D6CC2";
            break;
        }

        arrow.style.background = color1;
      });

      const slickArrows2 = document.querySelectorAll(".slick-next");
      slickArrows2.forEach((arrow, index) => {
        var color2;
        switch (id[index]) {
          case 1:
            color2 = "#E88D59";
            break;
          case 2:
            color2 = "#4A90E2";
            break;
          case 3:
            color2 = "#F2D237";
            break;
          case 4:
            color2 = "#5D6CC2";
            break;
        }

        arrow.style.background = color2;
      });
    }, 0);
  }, [id]);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredCapitulos = capitulos.filter((capitulo) =>
    Object.values(capitulo).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  useEffect(() => {
    localStorage.removeItem("capitulo");
  }, []);
  const [buttonStates, setButtonStates] = useState({
    html: false,
    css: false,
    javascript: false,
    php: false,
    estrutura: false,
    programação: false,
    responsivo: false,
    introdução: false,
  });

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
    if (searchTerm.includes(buttonName)) {
      setSearchTerm((prevSearchTerm) =>
        prevSearchTerm.replace(new RegExp(buttonName, "g"), "").trim()
      );
    } else {
      setSearchTerm((prevSearchTerm) =>
        prevSearchTerm ? `${prevSearchTerm} ${buttonName}` : buttonName
      );
    }
  };
  return (
    <div className="flex h-full w-full dark:bg-darkcinzaclaro overflow-x-hidden">
      {/* <BackgroundCircles/> */}
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BiSearch
              className={`text-3xl text-white ml-20 notebook:ml-20 laptop1024:-ml-5 cursor-pointer`}
            />
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
        {searchTerm != "" ? (
          <div className="ml-10">
            <p className="dark:text-white text-2xl font-semibold mb-6 -mt-10">
              Mostrando resultados para &ldquo;{searchTerm}&rdquo;
            </p>
            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-y-8">
              {filteredCapitulos.map((capitulo, index) => (
                <div key={index}>
                  <CardCapitulo capitulo={capitulo} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          linguagens.map((linguagem, index) => (
            <div
              className="flex flex-col relative justify-center ml-10 space-y-8 mb-20"
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
            w="30vw lg:w-40vw"
            h="15vw lg:h-50vw"
            display="flex"
            marginBottom="17vw"
            zIndex={100}
            background="#E4D9ED"
            borderRadius="0.9em"
          >
            {/* Tags */}

            <div className="h-full lg:h-[250px] flex justify-center items-center gap-x-5 flex-wrap">
              <div className="mb-5">
                <span className="flex justify-center text-lg">
                  Filtrar por:
                </span>
                <div className="border-b-2 w-32 border-black/50"></div>
              </div>
              <div className="flex justify-center gap-y-2 lg:-mt-10 gap-x-3 flex-wrap">
                {Object.keys(buttonStates).map((buttonName, index) => (
                  <button
                    key={index}
                    className={`flex justify-center items-center w-auto text-white p-1 bg-gray-500 rounded-xl gap-1 ${
                      buttonStates[buttonName] ? `opacity-70` : ""
                    }`}
                    onClick={() => handleButtonClick(buttonName)}
                  >
                    <AiOutlineClose className="text-xl" />
                    <span className="text-lg">{buttonName}</span>
                  </button>
                ))}
              </div>
            </div>
          </ModalContent>
        </Modal>
      </main>
    </div>
  );
};

export default Materiais;
