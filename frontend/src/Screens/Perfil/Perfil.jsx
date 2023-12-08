import { GoPencil } from "react-icons/go";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../Components/ColorBlind";
import { ModalOverlay, useDisclosure, useStatStyles } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import boy1 from "../../assets/boy1.jpg";
import boy2 from "../../assets/boy2.jpg";
import boy3 from "../../assets/boy3.jpg";
import girl1 from "../../assets/girl1.jpg";
import girl2 from "../../assets/girl2.jpg";
import girl3 from "../../assets/girl3.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundCircles from "../../Components/BackgroundCircles";

function Perfil() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const dadosCrianca = JSON.parse(atob(localStorage.getItem("user")));

  let mode = localStorage.theme;
  function Color(mode, color) {
    var newcolor;
    if (mode === "protanomaly") {
      newcolor = protanomaly(color);
      localStorage.theme = "protanomaly";
    } else if (mode === "deuteranomaly") {
      newcolor = deuteranomaly(color);
      localStorage.theme = "deuteranomaly";
    } else if (mode === "tritanomaly") {
      newcolor = tritanomaly(color);
      localStorage.theme = "tritanomaly";
    } else {
      newcolor = color;
    }
    return newcolor;
  }
  const local = JSON.parse(atob(localStorage.getItem("user")));
  const [image, setImage] = useState(local.imagem);

  const toggleImage = (image) => {
    setImage(image);
  };

  const handleProfileChange = () => {
    const local = JSON.parse(atob(localStorage.getItem("user")));
    const id = local.id;
    const imagem = { imagem: image };
    axios
      .put(`https://tcckoding.azurewebsites.net/crianca/imagem/${id}`, imagem)
      .then(() =>
        toast.success("Avatar alterado com sucesso!", {
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
      .then(onClose)
      .catch((err) => console.log(err));
    const updatedUser = { ...local, imagem: image };
    localStorage.setItem("user", btoa(JSON.stringify(updatedUser)));
  };
  let img;
  let active;

  switch (image) {
    case "boy1":
      img = boy1;
      active = 1;
      break;
    case "boy2":
      img = boy2;
      active = 2;
      break;
    case "boy3":
      img = boy3;
      active = 3;
      break;
    case "girl1":
      img = girl1;
      active = 4;
      break;
    case "girl2":
      img = girl2;
      active = 5;
      break;
    default:
      img = girl3;
      active = 6;
      break;
  }

  return (
    <ChakraProvider>
      <div
        className="flex h-full w-full"
        z
      >
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
        <main className="w-full h-screen flex xl:gap-x-32 gap-x-16 ml-52 mr-2 overflow-hidden dark:text-white font-semibold dark:bg-darkcinzaclaro z-0">
          {/* Card Perfil */}
            {/* <BackgroundCircles/> */}
          <div
            className="items-center justify-center xl:w-72 xl:h-96 w-64 h-96 xl:ml-64 ml-28 xl:mt-40 mt-32 rounded-xl"
            style={{
              backgroundImage: `linear-gradient(10deg, ${Color(
                mode,
                "#831ED5"
              )} 0%, ${Color(mode, "#C66A6E")} 50%, ${Color(
                mode,
                "#F19A2C"
              )} 100%)`,
            }}
          >
            <div className=" w-full h-full flex flex-col -mt-5 items-center gap-y-8 justify-center rounded-2xl">
              <div className="w-10 h-10 absolute xl:top-56 top-48 ml-28 flex items-center justify-center z-10 bg-neutral-500 rounded-full">
                <GoPencil
                  className="text-white text-3xl cursor-pointer"
                  onClick={onOpen}
                />
              </div>

              <img
                src={img}
                className="xl:h-36 xl:w-36 h-32 w-32 rounded-full bg-white object-cover"
                alt=""
              />
              <div className="flex flex-col items-center justify-center">
                <span className="xl:text-3xl text-2xl text-white">
                  @{dadosCrianca.username}
                </span>
                <span className="xl:text-2xl text-xl text-white/60">
                  {dadosCrianca.nome}
                </span>
              </div>
            </div>
          </div>

          {/* Dados */}
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
            blockScrollOnMount={false}
            isCentered={true}
          >
            <ModalOverlay />
            <ModalContent
              borderRadius={"full"}
              width={"50vw"}
              position={"fixed"}
              top={"20"}
              left={"25%"}
            >
              <div className="bg-[#efefef] dark:bg-darkcinza w-[50vw] h-[34vw] grid place-items-center rounded-2xl">
                <p className="text-cinza dark:text-white text-lg font-semibold">
                  Selecione um avatar abaixo:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src={boy1}
                    onClick={() => toggleImage("boy1")}
                    alt=""
                    className={`imagens ${active == 1 ? "active" : ""}`}
                  />
                  <img
                    src={boy2}
                    onClick={() => toggleImage("boy2")}
                    alt=""
                    className={`imagens ${active == 2 ? "active" : ""}`}
                  />
                  <img
                    src={boy3}
                    onClick={() => toggleImage("boy3")}
                    alt=""
                    className={`imagens ${active == 3 ? "active" : ""}`}
                  />
                  <img
                    src={girl1}
                    onClick={() => toggleImage("girl1")}
                    alt=""
                    className={`imagens ${active == 4 ? "active" : ""}`}
                  />
                  <img
                    src={girl2}
                    onClick={() => toggleImage("girl2")}
                    alt=""
                    className={`imagens ${active == 5 ? "active" : ""}`}
                  />
                  <img
                    src={girl3}
                    onClick={() => toggleImage("girl3")}
                    alt=""
                    className={`imagens ${active == 6 ? "active" : ""}`}
                  />
                </div>
                <button
                  onClick={handleProfileChange}
                  className="bg-green-700 text-white px-9 py-3 rounded-xl shadow-md shadow-slate-400 hover:opacity-80 active:scale-95 dark:shadow-none"
                >
                  Confirmar
                </button>
              </div>
            </ModalContent>
          </Modal>

          <div className="flex flex-col items-center justify-center w-72 h-96 xl:mt-40 mt-32 gap-y-5">
            <span className="xl:text-4xl text-3xl font-semibold text-black dark:text-white">
              Dados
            </span>

            <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
              <div className="inline-flex items-center gap-5">
                <AiFillStar className="xl:text-5xl text-4xl"></AiFillStar>
                <div className="w-20 text-center flex flex-col items-center justify-center">
                  <span className="xl:text-3xl text-2xl">1400</span>
                  <span className="xl:text-md text-sm text-black/75 dark:text-white">
                    Total XP
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
              <div className="inline-flex items-center gap-5">
                <FaPencilAlt className="xl:text-4xl text-3xl"></FaPencilAlt>
                <div className="w-20 text-center flex flex-col items-center justify-center">
                  <span className="xl:text-3xl text-2xl">5</span>
                  <span className="xl:text-md text-sm text-black/75 dark:text-white">
                    Exercícios feitos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
              <div className="inline-flex items-center gap-5">
                <FaPencilAlt className="xl:text-4xl text-3xl"></FaPencilAlt>
                <div className="w-20 text-center flex flex-col items-center justify-center">
                  <span className="xl:text-3xl text-2xl">2</span>
                  <span className="xl:text-md text-sm text-black/75 dark:text-white">
                    Linguagens aprendidas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default Perfil;
