import { useNavigate } from "react-router-dom";
import { protanomaly, deuteranomaly, tritanomaly } from "./../ColorBlind";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Html from "../../assets/html.svg";
import { IoIosLock } from "react-icons/io";

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
  const navigate = useNavigate();
  const id_capitulo = capitulo.numerocapitulo;
  var texto;
  switch (capitulo.linguagem) {
    case 1:
      texto = "HTML";
      break;
    case 2:
      texto = "CSS";
      break;
    case 3:
      texto = "JavaScript";
      break;
    case 4:
      texto = "PHP";
      break;
    default:
      texto = "";
      break;
  }

  const object = {
    linguagem: capitulo.linguagem,
    capitulo: aula.capitulo,
    numeroaula: aula.numeroaula,
  };

  const Guardar = () => {
    localStorage.setItem("aula", JSON.stringify(object));
    navigate(
      `/aulas/${texto.toLowerCase()}/cap${id_capitulo}/aula${aula.numeroaula}`,
      { state: { object: object } }
    );
  };

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
    <div className="space-y-32 z-auto">
      <div className="flex flex-col justify-center ml-10">
        <div className="flex space-x-16 items-center mb-10">
          <div className="space-y-5">
            {/* Card */}
            <div className="relative w-fit h-fit">
              <div
                className={`${
                  aula.desbloqueado == 0 ? "block" : "hidden"
                } w-80 h-52 absolute top-0 left-0 grid place-items-center z-[21]`}
              >
                <IoIosLock className="w-20 h-20 top-0 text-white" />
              </div>
              <div
                onClick={aula.desbloqueado == 0 ? !onOpen : onOpen}
                className={`${
                  aula.desbloqueado == 0 ? "brightness-[.25]" : ""
                } w-80 h-52 rounded-xl cursor-pointer flex justify-center items-center flex-col relative z-auto`}
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
                <h1 className="text-white font-bold text-center">
                  {aula.nome}
                </h1>
              </div>
              <div className="flex flex-col">
                <marquee>
                  <span className="w-[250px] flex items-center justify-start text-xl text-black font-semibold dark:text-white">
                    {aula.nome}
                  </span>
                </marquee>
                {/* Filtro */}
                <div
                  className={`${
                    aula.desbloqueado == 0 ? "brightness-[.25]" : ""
                  } w-80 flex flex-wrap gap-x-3 gap-y-3`}
                >
                  {tags.length > 0 ? (
                    tags.map((tag, index) => (
                      <Tag tag={tag} cor1={cor1} cor2={cor2} key={index} />
                    ))
                  ) : (
                    <p className="dark:text-white italic text-white">sem tag</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="relative z-[30]">
      <Modal
        isCentered={true}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick
      >
        <ModalOverlay />
        <ModalContent
          w="50vw"
          h="22vw"
          display="flex"
          background="#7E1AD4"
          borderRadius="0.9em"
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          zIndex={30}
          position={"fixed"}
          left={'25vw'}
          top={'18vh'}
        >
          {/* Card */}

          <div className="flex flex-col items-center justify-center z-[30]">
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
              <div className="flex flex-col-reverse items-center justify-center">
                <button
                  onClick={Guardar}
                  className="bg-[#3BEF61] text-white p-[10px] w-32 uppercase text-xl flex justify-center rounded-md shadow-md"
                >
                  Iniciar
                </button>

                <div className="w-auto mt-3 text-white mb-10 text-center">
                  {aula.descricao}
                </div>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
      </div>
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
      <span className="flex w-auto items-center justify-center text-md text-white font-semibold truncate dark:text-white">
        {tag.nome}
      </span>
    </div>
  );
}
