import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

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
      alert("Você completou todas as fases!");
      navigate("/desafios");
    }
  };

  const verificarSentenca = () => {
    const sentencaAtualStr = sentencaAtual.join("");
    if (sentencaAtualStr === sentencaCorreta) {
      alert("Você acertou!");
      var local = parseInt(localStorage.pontuacao);
      local = local + 100;
      localStorage.setItem("pontuacao", local);
      avancarFase();
    } else {
      alert("Errado! A sentença correta é: " + sentencaCorreta);
      avancarFase();
    }
  };

  const enviarPontuacao = () => {
    const crianca = localStorage.getItem("id");
    const pontuacao = localStorage.getItem("pontuacao");
    const data = new Date();
    const body = { crianca, pontuacao, data };
    fetch(`https://tcckoding.azurewebsites.net/crianca/pontuacao`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(() => {
        alert("Pontuação enviada com sucesso");
        localStorage.removeItem("pontuacao");
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao enviar a pontuação");
      });
  };

  const navigate = useNavigate();

  return (
    <div
      className="flex h-screen w-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
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
        </div>

        <div className="flex flex-col">
          <h1 className="flex justify-center font-bold text-gray-700 text-2xl dark:text-white">
            {titulo}
          </h1>
          <p className="flex justify-center border-b-4 rounded-sm border-gray-400 mt-32 ml-32 mr-32">
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
          <div className="flex justify-center mt-20 space-x-[850px]">
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
  );
}

export default Sentenca;
