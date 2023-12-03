import { Link } from "react-router-dom";
import { protanomaly, deuteranomaly, tritanomaly } from "./../ColorBlind";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Html from '../../assets/html.svg'

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
// eslint-disable-next-line react/prop-types
export default function CardAula({ aula, capitulo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isFlexOpen,
    onOpen: onFlexOpen,
    onClose: onFlexClose,
  } = useDisclosure();
  const [tags, setTags] = useState([]);
  const aulaId = aula.id;
  let cor1 =
    capitulo.linguagem == 1
      ? "#E88D59"
      : capitulo.linguagem == 2
      ? "#4A90E2"
      : capitulo.linguagem == 3
      ? "#F2D237"
      : "#5D6CC2";
  let cor2 =
    capitulo.linguagem == 1
      ? "#E87331"
      : capitulo.linguagem == 2
      ? "#0D54A8"
      : capitulo.linguagem == 3
      ? "#B89D1C"
      : "#29388E";
  useEffect(() => {
    axios
      .get(`https://tcckoding.azurewebsites.net/tags/${aulaId}`)
      .then((response) => setTags(response.data));
  }, [aulaId]);
  return (
    <div className="space-y-32">
      <div className="flex flex-col justify-center ml-10">
        <div className="flex space-x-16 items-center mb-10">
          <div className="space-y-5">
            {/* Card */}
            <div
              onClick={onOpen}
              className="w-80 h-52 rounded-xl cursor-pointer flex justify-center items-center flex-col"
              style={{
                backgroundImage: `linear-gradient(10deg, ${Color(
                  mode,
                  cor2
                )} 0%, ${Color(mode, cor1)} 100%`,
              }}
            >
              <h1 className="text-white font-black text-3xl text-center">
                Aula {aula.numeroaula}
              </h1>
              <h1 className="text-white font-bold text-center">{aula.nome}</h1>
            </div>
            <div className="flex flex-col">
              <marquee>
                <span className="w-[250px] flex items-center justify-start text-xl text-black font-semibold dark:text-white">
                  {aula.nome}
                </span>
              </marquee>
              {/* Filtro */}
              <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                {tags.length > 0 ? (
                  tags.map((tag, index) => (
                    <Tag tag={tag} cor1={cor1} cor2={cor2} key={index} />
                  ))
                ) : (
                  <p className="dark:text-white italic">sem tag</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isCentered={true}
        onClose={onFlexClose}
        isOpen={isFlexOpen}
        motionPreset="slideInBottom"
      >
        <ModalContent
          w="50vw"
          h="22vw"
          display="flex"
          background="#D1B8E9"
          borderRadius="0.9em"
          zIndex={100}
          marginLeft={"auto"}
          marginTop={"auto"}
          marginRight={"auto"}
          marginBottom={"auto"}
        >
          {/* Card */}

          <div className="h-full flex justify-center items-center space-x-10">
            <div className="flex flex-col space-y-3 ml-10">
              <div
                className="w-82 h-44 rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(100deg, ${Color(
                    mode,
                    "#6800FF"
                  )} 0%, ${Color(mode, "#BB5E7E")} 100%`,
                }}
              ></div>
              <div>
                <span className="flex font-bold text-lg mb-2 truncate">
                  Aula {aula.numeroaula} - {aula.nome}
                </span>
                {/* Filtro */}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-5 -mt-14">
              <Link to={"/conteudo"}>
                <button className="bg-[#3BEF61] text-white w-32 uppercase text-2xl p-2 rounded-lg shadow-md">
                  Iniciar
                </button>
              </Link>
              <span className="w-34 h-20 px-4 text-lg">{aula.descricao}</span>
            </div>
          </div>
        </ModalContent>
      </Modal>

      <Modal
        isCentered={true}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalContent
          w="50vw"
          h="22vw"
          display="flex"
          background="#7E1AD4"
          borderRadius="0.9em"
          zIndex={1000}
          marginLeft={"auto"}
          marginTop={"auto"}
          marginRight={"auto"}
          marginBottom={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* Card */}

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-10 px-5">
              <div className="rounded-xl w-[400px] space-y-5">
                <div
                  className="w-[350px] h-44 rounded-xl flex justify-center items-center"
                  style={{
                    backgroundImage: `linear-gradient(100deg, ${Color(
                      mode,
                      "#6800FF"
                    )} 0%, ${Color(mode, "#BB5E7E")} 100%`,
                  }}
                >
                  <img src={Html} alt="" className="" />
                </div>
                  <span className="flex w-[350px] font-bold text-lg mb-2 text-white">
                    Aula {aula.numeroaula} - {aula.nome}
                  </span>
              </div>
              <div className="flex items-center justify-center">
                <Link to={"/conteudo"} className="flex flex-col justify-center items-center">
                  <button className="bg-[#3BEF61] text-white p-[10px] w-32 uppercase text-xl flex justify-center rounded-md shadow-md">
                    Iniciar
                  </button>
                  <div className="w-auto mt-3 text-white mb-10 text-center">
                    {aula.descricao}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

function Tag({ tag, cor1, cor2 }) {
  return (
    <div
      className="w-32 p-1 rounded-xl"
      style={{
        backgroundImage: `linear-gradient(10deg, ${Color(
          mode,
          cor2
        )} 0%, ${Color(mode, cor1)} 100%`,
      }}
    >
      <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
        {tag.nome}
      </span>
    </div>
  );
}
