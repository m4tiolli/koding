import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import "../Input/Input.css";

function Input() {
  const fases = [
    {
      tipo: "alternativa",
      titulo: [
        "Usando JavaScript, complete a frase para exibir uma mensagem de informação no console:",
      ],
      pergunta: 'console.____("Mensagem informativa!")',
      opcoes: ["log", "warn", "debug", "info", "error"],
      respostaCorreta: "info",
    },
    {
      tipo: "escrita",
      titulo: ["Qual a linguagem que está sendo referida abaixo?"],
      pergunta: "Complete a frase: React é uma biblioteca de _____.",
      respostaCorreta: "javascript",
    },
  ];

  if (!localStorage.getItem("pontuacao")) localStorage.setItem("pontuacao", 0);
  const [faseAtual, setFaseAtual] = useState(0);
  const [respostaEscolhida, setRespostaEscolhida] = useState([]);
  const [respostaEscrita, setRespostaEscrita] = useState("");
  const [resposta, setResposta] = useState("");
  const titulo = fases[faseAtual].titulo;

  const avancarFase = () => {
    if (faseAtual < fases.length - 1) {
      setFaseAtual(faseAtual + 1);
      setRespostaEscolhida([]);
      setRespostaEscrita("");
      setResposta("");
    } else {
      enviarPontuacao();
      alert("Você completou todas as fases!");
      navigate("/desafios");
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

  const verificarResposta = () => {
    const fase = fases[faseAtual];
    if (
      fase.tipo === "alternativa" &&
      respostaEscolhida.join("") === fase.respostaCorreta
    ) {
      alert("Você acertou!");
      var local = parseInt(localStorage.pontuacao);
      local = local + 100;
      localStorage.setItem("pontuacao", local);
      avancarFase();
    } else if (
      fase.tipo === "escrita" &&
      respostaEscrita.toLowerCase() === fase.respostaCorreta.toLowerCase()
    ) {
      alert("Você acertou!");
      var local = parseInt(localStorage.pontuacao);
      local = local + 100;
      localStorage.setItem("pontuacao", local);
      avancarFase();
    } else {
      alert("Você errou!");
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
      <main className="w-full overflow-hidden dark:bg-darkcinzaclaro min-h-screen dark:text-white">
        <div className="flex items-center mt-10 gap-x-48">
          <AiOutlineClose
            onClick={() => navigate(-1)}
            className="flex ml-8 text-3xl cursor-pointer text-gray-400 dark:text-white"
          />
          
          <div className="w-7/12 h-5 bg-gray-300 rounded-lg"></div>
        </div>


        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="flex ml-10 font-bold text-gray-700 text-2xl dark:text-white">
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
                      className="p-2 rounded-xl mt-16 mb-10 border-none outline-none w-96"
                      type="text"
                      value={respostaEscrita}
                      onChange={(e) => setRespostaEscrita(e.target.value)}
                    />
                  </div>
                )}
                <div className="flex items-center justify-center mt-24">
                  <button
                    className="flex rounded-md w-32 text-base bg-green-300 dark:text-gray-800 font-semibold"
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
    </div>
  );
}

export default Input;
