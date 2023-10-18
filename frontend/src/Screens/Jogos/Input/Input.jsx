import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
  const fases = [
    {
      tipo: "alternativa",
      titulo: ["Usando JavaScript, complete a frase para exibir uma mensagem de informação no console:"],
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

  const [faseAtual, setFaseAtual] = useState(0);
  const [respostaEscolhida, setRespostaEscolhida] = useState(null);
  const [respostaEscrita, setRespostaEscrita] = useState('');
  const [resposta, setResposta] = useState('');
  const titulo = fases[faseAtual].titulo;

  const avancarFase = () => {
    if (faseAtual < fases.length - 1) {
      setFaseAtual(faseAtual + 1);
      setRespostaEscolhida(null);
      setRespostaEscrita('');
      setResposta('');
    } else {
      alert("Você completou todas as fases!");
      navigate("/desafios");
    }
  };

  const verificarResposta = () => {
    const fase = fases[faseAtual];
    if (fase.tipo === "alternativa" && respostaEscolhida === fase.respostaCorreta) {
      setResposta("Você acertou!");
      avancarFase();
    } else if (fase.tipo === "escrita" && respostaEscrita.toLowerCase() === fase.respostaCorreta.toLowerCase()) {
      setResposta("Você acertou!");
      avancarFase();
    } else {
      setResposta("Você errou!");
      avancarFase();
    }
  };

  const navigate = useNavigate();

  return (
    <div>
        <h1 className="flex justify-center font-bold text-gray-700 text-2xl dark:text-white">
            {titulo} 
          </h1>
      {resposta && <p>{resposta}</p>}
      {faseAtual < fases.length && (
        <div>
          {fases[faseAtual].tipo === "alternativa" ? (
            <div>
              <h2>{fases[faseAtual].pergunta}</h2>
              <div>
                {fases[faseAtual].opcoes.map((opcao, index) => (
                  <button key={index} onClick={() => setRespostaEscolhida(opcao)}>
                    {opcao}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2>{fases[faseAtual].pergunta}</h2>
              <input
                type="text"
                value={respostaEscrita}
                onChange={(e) => setRespostaEscrita(e.target.value)}
              />
            </div>
          )}
          <button onClick={verificarResposta}>Verificar Resposta</button>
        </div>
      )}
    </div>
  );
}

export default Input;