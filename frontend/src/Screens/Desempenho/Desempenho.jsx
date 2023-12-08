import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MenuR from "../../Components/MenuR/MenuR";
import { useState } from "react";
import LineChart from "./../../Components/Graficos/Line/Line";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
import axios from "axios";
import MultiLineChart from "../../Components/Graficos/MultiLine/MultiLine";

function Desempenho() {
  const mode = localStorage.getItem("theme");
  const dadosCrianca = JSON.parse(atob(localStorage.getItem("dadosCrianca")));
  function Color(mode, color) {
    var newcolor;
    if (mode === "protanomaly") {
      newcolor = protanomaly(color);
    } else if (mode === "deuteranomaly") {
      newcolor = deuteranomaly(color);
    } else if (mode === "tritanomaly") {
      newcolor = tritanomaly(color);
    } else newcolor = color;
    return newcolor;
  }

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const user = JSON.parse(atob(localStorage.getItem("user")));

  const [dadosPontuacao, setDadosPontuacao] = useState([]);

  useEffect(() => {
    axios
      .get(`https://tcckoding.azurewebsites.net/crianca/pontuacao/${user.id}`)
      .then((response) => setDadosPontuacao(response.data));
  }, []);

  const calcularSomaPontuacao = (dataObjects) => {
    const soma = dataObjects.reduce((acc, item) => {
      return acc + item.pontuacao;
    }, 0);

    return soma;
  };

  const somaPontuacao = calcularSomaPontuacao(dadosPontuacao);

  return (
    <div
      className="flex min-h-screen w-full"
      style={{
        background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)",
      }}
    >
      <MenuR />

      <main className="w-full h-full laptop:h-full lg:h-full notebook:h-full justify-center overflow-hidden dark:bg-darkfundoR">
        {responsive ? <Navbar /> : ""}

        <div className="flex flex-col lg:ml-72 ml-48 mt-40 ">
          <span className="-ml-40 lg:-ml-14 notebook:-ml-3 -mt-16 text-4xl font-semibold dark:text-white">
            Desempenho
          </span>

          {/* Cards */}
          <div className="flex flex-col justify-center items-center md:flex-row 2xl:-ml-80 notebook:-ml-14 lg:-ml-12 -ml-48 laptop:gap-44 xl:gap-10 laptop:gap-x-10 gap-x-5">
            <div
              className="flex flex-col items-center justify-center xl:w-80 lg:w-64 md:w-48 w-64 h-58 p-8 rounded-2xl shadow-md mt-10"
              style={{
                backgroundImage: `linear-gradient(10deg, ${Color(
                  mode,
                  "#9EE9B2"
                )} 0%, ${Color(mode, "#38E56B")} 100%`,
              }}
            >
              <span className="text-white text-6xl font-semibold">06</span>
              <span className="text-white text-xl text-center">
                Lições Completadas
              </span>
            </div>

            <div
              className="flex flex-col items-center justify-center xl:w-80 lg:w-64 md:w-48 w-64 h-58 p-8 rounded-2xl shadow-md mt-10"
              style={{
                backgroundImage: `linear-gradient(10deg, ${Color(
                  mode,
                  "#75E0C9"
                )} 0%, ${Color(mode, "#51CEAE")} 100%`,
              }}
            >
              <span className="text-white text-6xl font-semibold">01</span>
              <span className="text-white text-xl text-center">
                Linguagens Aprendidas
              </span>
            </div>

            <div
              className="flex flex-col items-center justify-center xl:w-80 lg:w-64 md:w-48 w-64 h-58 p-8 rounded-2xl shadow-md mt-10"
              style={{
                backgroundImage: `linear-gradient(10deg, ${Color(
                  mode,
                  "#63A8ED"
                )} 0%, ${Color(mode, "#1E7BD6")} 100%`,
              }}
            >
              <span className="text-white text-6xl font-semibold">
                {somaPontuacao ?? "0"}
              </span>
              <span className="text-white text-xl text-center">
                Nível de Experiência
              </span>
            </div>
          </div>

          {/* Gráficos */}
          <div className="flex flex-col w-full justify-evenly">
            <div>
              <LineChart valores={dadosPontuacao} />
            </div>
            <div>
              <MultiLineChart valores={dadosPontuacao} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Desempenho;
