import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

import { Spinner, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
import CardAula from "../../Components/CardAula/CardAula";
import axios from "axios";

function Aulas() {
  const mode = localStorage.getItem("theme");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [aulas, setAulas] = useState([]);
  var capitulos;
  const origin = location.state.origem;
  if (origin == "capitulos") {
    capitulos = location.state.capitulo;
    localStorage.setItem("capitulo", JSON.stringify(capitulos));
  } else if (origin == "aulas") {
    capitulos = JSON.parse(localStorage.getItem("capitulo"));
  } else {
    navigate("/home");
  }

  useEffect(() => {
    axios
      .get(`https://tcckoding.azurewebsites.net/aulas/${capitulos.id}`)
      .then((response) => setAulas(response.data))
      .then(() => setLoading(false))
      .catch((error) => console.error(error));
  }, []);

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

  const [searchTerm, setSearchTerm] = useState("");
  const filteredCapitulos = aulas.filter((capitulo) =>
    Object.values(capitulo).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
    <div
      className="flex h-full w-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <Menu />

      {/* Conteudo */}

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro min-h-screen">
        <div className="flex mt-28 ml-8 mb-5 items-center">
          <IoArrowBack
            onClick={() => navigate("/home")}
            className="text-3xl cursor-pointer text-cinza dark:text-white"
          />
          <p className="dark:text-white text-cinza text-2xl font-semibold ml-10">
            {capitulos.nome}
          </p>
        </div>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BiSearch className="xl:mr-5 lg:mr-5 laptop:mr-3 mr-32 text-3xl text-white ml-20 cursor-pointer laptop1024:-ml-5 notebook:ml-20"></BiSearch>
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
        {loading ? (
          <div className="w-screen h-40 grid place-items-center">
            <Spinner thickness="4px" />
          </div>
        ) : (
          <div className="grid grid-cols-3 laptop1024:grid-cols-2 notebook:grid-cols-3">
            {searchTerm != "" ? (
              <div className="ml-10">
                <p className="dark:text-white text-2xl font-semibold mb-6 -mt-10 ml-8 w-screen">
                  Mostrando resultados para "{searchTerm}"
                </p>
                <div className="grid grid-cols-3 2xl:grid-cols-4 gap-[23em] gap-y-8">
                  {filteredCapitulos.map((aula, index) => (
                    <div key={index}>
                      <CardAula aula={aula} capitulo={capitulos} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              aulas.map((aula, index) => (
                <CardAula aula={aula} key={index} capitulo={capitulos} />
              ))
            )}
          </div>
        )}

        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="30vw"
            h="15vw"
            display="flex"
            marginBottom="20vw"
            background="#E4D9ED"
            borderRadius="0.9em"
            zIndex={100}
            marginLeft={"auto"}
            marginTop={"auto"}
            marginRight={"auto"}
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
}

export default Aulas;
