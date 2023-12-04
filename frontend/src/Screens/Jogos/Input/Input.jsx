import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoHelpCircleOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "../Input/Input.css";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Modal } from "@chakra-ui/react";
import { ModalOverlay } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

function Input() {
  const fases = [
    {
      tipo: "alternativa",
      titulo: [
        "Pensando nos eventos do JavaScript, complete o evento que é disparado quando um elemento recebe o foco: ",
      ],
      pergunta: "____ - é disparado quando o elemento recebe o foco",
      opcoes: ["onKeyUp", "onClick", "onLoad", "onFocus", "onBlur"],
      respostaCorreta: "onFocus",
      ajuda: "Foque na pergunta",
    },
    {
      tipo: "escrita",
      titulo: ["Qual a linguagem que está sendo referida abaixo?"],
      pergunta: "Complete a frase: React é uma biblioteca de _____.",
      respostaCorreta: "javascript",
      ajuda: "Qual linguagem estamos aprendendo?", 
    },
  ];

  if (!localStorage.getItem("pontuacao")) localStorage.setItem("pontuacao", 0);
  const [faseAtual, setFaseAtual] = useState(0);
  const [respostaEscolhida, setRespostaEscolhida] = useState([]);
  const [respostaEscrita, setRespostaEscrita] = useState("");
  const [resposta, setResposta] = useState("");
  const titulo = fases[faseAtual].titulo;
  const [exibirAjuda, setExibirAjuda] = useState(true);

  const avancarFase = () => {
    if (faseAtual < fases.length - 1) {
      setFaseAtual(faseAtual + 1);
      setRespostaEscolhida([]);
      setRespostaEscrita("");
      setResposta("");
    } else {
      enviarPontuacao();
      setExibirAjuda(true);
      setTimeout(() => onOpen(), 2000);
    }
  };

  const handleWordClick = (opcao) => {
    if (respostaEscolhida.includes(opcao)) {
      const newRespostaEscolhida = respostaEscolhida.filter(
        (word) => word !== opcao
      );
      setRespostaEscolhida(newRespostaEscolhida);
    } else {
      setRespostaEscolhida([opcao]);
    }
  };

  const renderFrase = () => {
    const frase = fases[faseAtual].pergunta;
    let fraseRenderizada = frase;
    respostaEscolhida.forEach((opcao) => {
      fraseRenderizada = fraseRenderizada.replace("____", opcao);
    });
    return fraseRenderizada;
  };
  var local = parseInt(localStorage.pontuacao);

  const verificarResposta = () => {
    const fase = fases[faseAtual];
    if (
      fase.tipo === "alternativa" &&
      respostaEscolhida.join("") === fase.respostaCorreta
    ) {
      toast.success("Você acertou!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      local = local + 100;
      localStorage.setItem("pontuacao", local);
      avancarFase();
    } else if (
      fase.tipo === "escrita" &&
      respostaEscrita.toLowerCase() === fase.respostaCorreta.toLowerCase()
    ) {
      toast.success("Você acertou!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      local = local + 100;
      localStorage.setItem("pontuacao", local);
      avancarFase();
    } else {
      toast.error("Você errou!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      avancarFase();
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isHelpOpen,
    onOpen: onHelpOpen,
    onClose: onHelpClose,
  } = useDisclosure();

  function Fechar() {
    onClose();
    navigate("/desafios");
  }

  const enviarPontuacao = () => {
    const user = JSON.parse(atob(localStorage.getItem("user")));
    const crianca = user.id;
    const pontuacao = parseInt(localStorage.getItem("pontuacao"));
    const body = { crianca, pontuacao };
    console.log(body);
    fetch(`https://tcckoding.azurewebsites.net/crianca/pontuacao`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(() => {
        localStorage.removeItem("pontuacao");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <ChakraProvider>
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
      <div
        className="flex h-screen w-full"
        style={{
          background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
        }}
      >
        <main className="w-full overflow-hidden dark:bg-darkcinzaclaro min-h-screen dark:text-white">
          <div className="flex items-center mt-10 gap-x-48">
            <AiOutlineClose
              onClick={() => navigate(-1)}
              className="flex ml-8 text-3xl cursor-pointer text-gray-400 dark:text-white"
            />

            <div className="w-7/12 h-5 bg-gray-300 rounded-lg"></div>

            <IoHelpCircleOutline
              title="Ajuda"
              onClick={onHelpOpen}
              className="text-4xl cursor-pointer z-10 text-gray-400 dark:text-white"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="flex px-5 mb-5 font-bold text-center text-gray-700 text-2xl dark:text-white">
              {titulo}
            </h1>

            <div className="flex flex-col items-center justify-center mt-10">
              {resposta && <p>{resposta}</p>}
              {faseAtual < fases.length && (
                <div className="text-xl text-gray-700 dark:text-white">
                  <h2>{renderFrase()}</h2>
                  {fases[faseAtual].tipo === "alternativa" ? (
                    <div className="flex flex-col mt-10 w-auto h-16">
                      <div className="flex gap-x-10">
                        {fases[faseAtual].opcoes.map((opcao, index) => (
                          <button
                            key={index}
                            onClick={() => handleWordClick(opcao)}
                            className={
                              respostaEscolhida.includes(opcao)
                                ? "selected"
                                : "bg-purple-700 p-2 div rounded-xl text-white"
                            }
                          >
                            {opcao}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <input
                        className="p-2 rounded-xl mt-16 mb-10 border-none outline-none w-96 dark:text-cinza"
                        type="text"
                        value={respostaEscrita}
                        onChange={(e) => setRespostaEscrita(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-center mt-24">
                    <button
                      className="flex rounded-md w-32 items-center text-base bg-green-300 dark:text-gray-800 font-semibold"
                      onClick={verificarResposta}
                    >
                      Verificar Resposta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
          <ModalOverlay />
          <ModalContent
            borderRadius={"20vw"}
            w={"40vw"}
            h={"fit-content"}
            top={"20vh"}
          >
            <div className="w-full h-full flex flex-col justify-center items-center bg-green-700 rounded-2xl gap-6 p-10">
              <FaRegCheckCircle color="rgb(134, 239, 172)" size={50} />
              <p className="text-white text-xl font-semibold">
                Você completou todas as fases!
              </p>
              <button
                onClick={Fechar}
                className="text-green-700 bg-white w-2/5 h-10 rounded-xl text-xl font-semibold hover:opacity-70"
              >
                Sair
              </button>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          isCentered
          onClose={onHelpClose}
          isOpen={isHelpOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="20vw"
            h="5vw"
            display="flex"
            background="#A555F7"
            borderRadius="0.9em"
            marginLeft={"73vw"}
            marginTop={"7vw"}
          >
            <div className="flex flex-col w-full p-3 justify-center text-center items-center space-y-2 text-white">
            {exibirAjuda ? fases[faseAtual].ajuda : ""}
            </div>
          </ModalContent>
        </Modal>
      </div>
    </ChakraProvider>
  );
}

export default Input;
