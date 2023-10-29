import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>

      <div>
        <h2>Pergunta {perguntaAtual + 1}:</h2>
        <p>{perguntas[perguntaAtual].pergunta}</p>
        <ul>
          {perguntas[perguntaAtual].alternativas.map((alternativa, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="alternativas"
                  value={alternativa}
                  checked={alternativaSelecionada === alternativa}
                  onChange={() => selecionarAlternativa(alternativa)}
                />
                {alternativa}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={verificarResposta}>Verificar Resposta</button>
      </div>
    </div>
  );
}

export default Quiz;