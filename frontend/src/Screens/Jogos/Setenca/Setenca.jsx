import "../Setenca/Setenca.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

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
  const [palavrasSelecionadas, setPalavrasSelecionadas] = useState(["<", ">", "img", " href=", "'imagem'"]);

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
    const sentencaAtualStr = sentencaAtual.join('');
    if (sentencaAtualStr === sentencaCorreta) {
      alert('Você acertou!');
    } else {
      alert('Errado! A setença correta é: ' + sentencaCorreta);
    }
  };

  return (
    <div>
      <Link to={'/desafios'}>
        <div className="flex items-center justify-center w-20 h-10 mt-16 ml-10 font-semibold text-lg text-zinc-800">
          <IoIosArrowBack className="" />
          <span className="">Voltar</span>
        </div>
      </Link>
      <h1>Como inserir uma imagem usando HTML?</h1>
      <p>Sentença Atual: {sentencaAtual.join('')}</p>
      {palavrasSelecionadas.map((palavra, index) => (
        <button key={index} onClick={() => handleWordClick(palavra)}>
          {palavra}
        </button>
      ))}
      <button onClick={verificarSentenca}><br />Verificar</button>
    </div>
  );
};

export default Setenca;