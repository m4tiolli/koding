import "../Setenca/Setenca.css";
import React, { useState, useEffect } from "react";
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

function Setenca() {
  const [sentencaCorreta, setSentencaCorreta] = useState("<img href='imagem'>");
  const [sentencaAtual, setSentencaAtual] = useState([]);
  const [palavrasSelecionadas, setPalavrasSelecionadas] = useState([
    "<",
    ">",
    "img",
    " href=",
    "'imagem'",
  ]);

  useEffect(() => {
    setPalavrasSelecionadas(palavrasAleatorias(palavrasSelecionadas));
  }, []);

  const handleWordClick = (palavra) => {
    if (sentencaAtual.includes(palavra)) {
      const newSentencaAtual = sentencaAtual.filter((word) => word !== palavra);
      setSentencaAtual(newSentencaAtual);
    } else {
      setSentencaAtual([...sentencaAtual, palavra]);
    }
  };

  const verificarSentenca = () => {
    const sentencaAtualStr = sentencaAtual.join("");
    if (sentencaAtualStr === sentencaCorreta) {
      alert("Você acertou!");
    } else {
      alert("Errado! A setença correta é: " + sentencaCorreta);
    }
  };

  const navigate = useNavigate();

  return (
    <div
      className="flex h-screen w-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <main className="w-full ml-10 mr-10 overflow-hidden dark:bg-darkcinzaclaro min-h-screen">
        {/* Sair/Barra/Vidas */}
        <div className="flex items-center mt-10 gap-x-48 mb-20">
          <AiOutlineClose
            onClick={() => navigate(-1)}
            className="flex ml-8 text-3xl cursor-pointer text-gray-400 dark:text-white"
          />

          <div className="w-7/12 h-5 bg-gray-300 rounded-lg"></div>
        </div>

        <div className="flex flex-col">
          <h1 className="flex justify-center font-bold text-gray-700 text-2xl">
            Como inserir uma imagem usando HTML?
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
          <hr className="mt-10 border-gray-400" />
          <div className="flex justify-center mt-20 space-x-[850px]">
          <button
              className="flex justify-center items-center w-20 bg-slate-200 shadow-md rounded-md p-2"
            >
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

export default Setenca;
