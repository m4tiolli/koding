import { useState } from "react";
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

  if (!localStorage.getItem("pontuacao")) localStorage.setItem("pontuacao", 0)
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
      enviarPontuacao();
      alert("Você completou todas as fases!");
      navigate("/desafios");
    }
  };

  const verificarResposta = () => {
    const fase = fases[faseAtual];
    if (fase.tipo === "alternativa" && respostaEscolhida === fase.respostaCorreta) {
      alert("Você acertou!");
      var local = parseInt(localStorage.pontuacao)
      local = local + 100
      localStorage.setItem("pontuacao", local)
      avancarFase();
    } else if (fase.tipo === "escrita" && respostaEscrita.toLowerCase() === fase.respostaCorreta.toLowerCase()) {
      alert("Você acertou!");
      var local = parseInt(localStorage.pontuacao)
      local = local + 100
      localStorage.setItem("pontuacao", local)
      avancarFase();
    } else {
      alert("Você errou!");
      avancarFase();
    }
  };

  const enviarPontuacao = () => {
    const crianca = localStorage.getItem('id');
    const pontuacao = localStorage.getItem("pontuacao");
    const data = new Date();
    const body = { crianca, pontuacao, data };
    fetch(`https://tcckoding.azurewebsites.net/crianca/pontuacao`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(() => {
        alert('Pontuação enviada com sucesso');
        localStorage.removeItem("pontuacao")
      })
      .catch((error) => {
        console.log(error);
        alert('Erro ao enviar a pontuação');
      });
  }

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