import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import "../Quiz/Quiz.css";

function Quiz() {
  const perguntas = [
    {
      pergunta: "Qual é a extensão de arquivo padrão para scripts PHP?",
      alternativas: [".ph", ".html", ".php", ".js", ".phtml"],
      respostaCorreta: ".php",
    },
    {
      pergunta: "Qual função é usada para exibir texto no PHP?",
      alternativas: ["print()", "echo()", "display()", "output()", "show()"],
      respostaCorreta: "echo()",
    },
  ];

  const navigate = useNavigate();
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState("");

  const selecionarAlternativa = (alternativa) => {
    setAlternativaSelecionada(alternativa);
  };

  const avancarFase = () => {
    setAlternativaSelecionada("");

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      alert("Você completou todas as perguntas!");
      navigate("/desafios");
    }
  };

  const verificarResposta = () => {
    const respostaCorreta = perguntas[perguntaAtual].respostaCorreta;

    if (alternativaSelecionada === respostaCorreta) {
      alert("Você acertou!");
    } else {
      alert("Você errou!");
    }

    avancarFase();
  };

  return (
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
        </div>

        <div className="flex flex-col mt-16">
          <div className="flex flex-col ml-20 gap-y-5">
            <h2 className="text-3xl font-bold text-gray-700 dark:text-white">Pergunta {perguntaAtual + 1}:</h2>
            <p className="text-xl text-gray-600 font-semibold dark:text-white/80">{perguntas[perguntaAtual].pergunta}</p>
          </div>

          <div className="flex items-center justify-center mb-10"> 
            <ul className="flex gap-x-10 mt-10 ul">
              {perguntas[perguntaAtual].alternativas.map(
                (alternativa, index) => (
                  <li key={index} className="mt-10 mb-10 div">
                    <label className="w-10 h-10 border-10px border-black bg-purple-500 border-solid shadow-md rounded-xl p-10 cursor-pointer">
                      <input
                        className="list-none"
                        type="radio"
                        name="alternativas"
                        value={alternativa}
                        checked={alternativaSelecionada === alternativa}
                        onChange={() => selecionarAlternativa(alternativa)}
                      />
                      {alternativa}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
          
          <div className="flex items-center justify-center mt-24">
            <button className="flex rounded-md w-32 text-w bg-green-300 dark:text-gray-800 font-semibold" onClick={verificarResposta}>Verificar Resposta</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Quiz;
