import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { IoHelpCircleOutline } from "react-icons/io5";
import {
  ChakraProvider,
  Modal,
  ModalContent,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

function palavrasAleatorias(palavras) {
  const shuffled = [...palavras];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  return shuffled;
}

function Sentenca() {
  const fases = [
    {
      sentencaCorreta: "<img src='imagem.png' alt='Minha Imagem'>",
      palavrasSelecionadas: [
        "<",
        ">",
        "img",
        " src=",
        "'imagem.png'",
        " alt=",
        "'Minha Imagem'",
        "href=",
        "</img>",
        "<head>",
      ],
      titulo: ["Como inserir uma imagem usando HTML?"],
      ajuda: "Lembre-se que toda imagem inicia com a tag <img>;",
    },
    {
      sentencaCorreta: "<p>Isso é um parágrafo.</p>",
      palavrasSelecionadas: [
        "<p>",
        "</p>",
        "Isso é",
        " um parágrafo.",
        "<h1>",
        "</h1>",
      ],
      titulo: ["Como adicionar uma parágrafo em HTML?"],
      ajuda: "Utiliza-se a tag <p> para se fazer um parágrafo",
    },
  ];
  if (!localStorage.getItem("pontuacao")) localStorage.setItem("pontuacao", 0);
  const [faseAtual, setFaseAtual] = useState(0);
  const [sentencaAtual, setSentencaAtual] = useState([]);
  const fase = fases[faseAtual];
  const sentencaCorreta = fase.sentencaCorreta;
  const [palavrasSelecionadas, setPalavrasSelecionadas] = useState(
    palavrasAleatorias(fase.palavrasSelecionadas)
  );
  const titulo = fases[faseAtual].titulo;
  const [exibirAjuda, setExibirAjuda] = useState(true);

  useEffect(() => {
    const palavrasEmbaralhadas = palavrasAleatorias([...palavrasSelecionadas]);
    setPalavrasSelecionadas(palavrasEmbaralhadas);
  }, [faseAtual]);

  const handleWordClick = (palavra) => {
    if (sentencaAtual.includes(palavra)) {
      const newSentencaAtual = sentencaAtual.filter((word) => word !== palavra);
      setSentencaAtual(newSentencaAtual);
    } else {
      setSentencaAtual([...sentencaAtual, palavra]);
    }
  };

  const avancarFase = () => {
    if (faseAtual < fases.length - 1) {
      setFaseAtual(faseAtual + 1);
      setSentencaAtual([]);
      setPalavrasSelecionadas(
        palavrasAleatorias(fases[faseAtual + 1].palavrasSelecionadas)
      );
    } else {
      enviarPontuacao();
      setExibirAjuda(true);
      setTimeout(() => onOpen(), 2000);
    }
  };

  const verificarSentenca = () => {
    const sentencaAtualStr = sentencaAtual.join("");
    if (sentencaAtualStr === sentencaCorreta) {
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
      var local = parseInt(localStorage.pontuacao);
      local = local + 100;
      localStorage.setItem("pontuacao", local);
      setTimeout(() => {
        avancarFase();
      }, 2000);
    } else {
      toast.error("Errado! A sentença correta é: " + sentencaCorreta, {
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

  function Fechar() {
    onClose();
    navigate("/desafios");
  }

  const enviarPontuacao = () => {
    const user = JSON.parse(atob(localStorage.getItem("user")));
    const crianca = user.id;
    const pontuacao = localStorage.getItem("pontuacao");
    const body = { crianca, pontuacao };
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isHelpOpen,
    onOpen: onHelpOpen,
    onClose: onHelpClose,
  } = useDisclosure();

  return (
    <ChakraProvider>
      <div
        className="flex h-screen w-full"
        style={{
          background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
        }}
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
        <main className="w-full overflow-hidden dark:bg-darkcinzaclaro min-h-screen ">
          {/* Sair/Barra/Vidas */}
          <div className="flex items-center mt-10 gap-x-48 mb-20">
            <AiOutlineClose
              onClick={() => navigate(-1)}
              className="flex ml-8 text-3xl cursor-pointer text-gray-400 dark:text-white"
            />

            <div
              className={`w-7/12 h-5 bg-gray-300 rounded-lg ${
                faseAtual == 1
                  ? 'before:bg-green-400 before:block before:absolute before:w-2/6 before:rounded-l-lg before:h-5 before:content-[" "] before:z-20'
                  : ""
              }`}
            ></div>

            <IoHelpCircleOutline
              title="Ajuda"
              onClick={onHelpOpen}
              className="text-4xl cursor-pointer z-10 text-gray-400 dark:text-white"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="flex justify-center font-bold text-gray-700 text-2xl dark:text-white">
              {titulo}
            </h1>
            <p className="flex justify-center border-b-4 rounded-sm border-gray-400 mt-32 ml-32 mr-32 dark:text-white">
              {" "}
              {sentencaAtual.join("")}
            </p>
            <div className="flex justify-center gap-x-5 mt-10 no-underline">
              {palavrasSelecionadas.map((palavra, index) => (
                <button
                  className="outline-none no-underline border-1 bg-slate-200 rounded-md p-2"
                  key={index}
                  onClick={() => handleWordClick(palavra)}
                >
                  {palavra}
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-20 space-x-[850px] notebook:space-x-[850px] laptop1024:space-x-[600px]">
              <button className="flex justify-center items-center w-20 bg-slate-200 shadow-md rounded-md p-2">
                Pular
              </button>
              <button
                className="flex justify-center items-center w-20 bg-green-300 shadow-md rounded-md p-2"
                onClick={verificarSentenca}
              >
                Verificar
              </button>
            </div>
          </div>
        </main>
      </div>

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
          w="30vw"
          h="5vw"
          display="flex"
          background="#A555F7"
          borderRadius="0.9em"
          marginLeft={"63vw"}
          marginTop={"7vw"}
        >
          <div className="flex flex-col w-full p-3 justify-center text-center items-center space-y-2 text-white">
          {exibirAjuda ? fases[faseAtual].ajuda : ""}
          </div>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default Sentenca;
