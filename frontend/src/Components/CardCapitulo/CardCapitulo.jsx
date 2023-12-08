import { protanomaly, deuteranomaly, tritanomaly } from "./../ColorBlind";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLock } from "react-icons/io";
// eslint-disable-next-line react/prop-types
export default function CardCapitulo({ capitulo }) {
  const mode = localStorage.getItem("theme");
  const [aulas, setAulas] = useState([]);
  const navigate = useNavigate();
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
    axios
      .get(`https://tcckoding.azurewebsites.net/aulas/${capitulo.id}`)
      .then((response) => {
        setAulas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  const [bloqueado, setBloqueado] = useState();
  useEffect(() => {
    const aulasDesbloqueadas = aulas.some((aula) => aula.desbloqueado == 1);
    setBloqueado(!aulasDesbloqueadas);
  }, [aulas]);
  let cor1 =
    capitulo.linguagem == 1
      ? "#E88D59"
      : capitulo.linguagem == 2
      ? "#4A90E2"
      : capitulo.linguagem == 3
      ? "#F2D237"
      : "#5D6CC2";
  let cor2 =
    capitulo.linguagem == 1
      ? "#E87331"
      : capitulo.linguagem == 2
      ? "#0D54A8"
      : capitulo.linguagem == 3
      ? "#B89D1C"
      : "#29388E";

  return (
    <div className="relative">
      <div
        className={`${
          bloqueado ? "block" : "hidden"
        } w-80 h-52 absolute top-0 left-0 grid place-items-center z-[2]`}
      >
        <IoIosLock className="w-20 h-20 top-0 text-white" />
      </div>
      <div
        className={`${
          bloqueado ? "brightness-[.25]" : ""
        } w-80 h-52 rounded-xl cursor-pointer flex justify-center items-center flex-col relative z-[1]`}
        style={{
          background: `linear-gradient(108deg, ${Color(mode, cor1)} 0%, ${Color(
            mode,
            cor2
          )} 100%)`,
        }}
        onClick={() =>
          navigate("/aulas", {
            state: { capitulo: capitulo, origem: "capitulos" },
          })
        }
      >
        <h1 className="text-white font-black text-3xl text-center">
          Capítulo {capitulo.numerocapitulo}
        </h1>
        <h1 className="text-white font-bold text-center lg:p-2">
          {capitulo.nome}
        </h1>
      </div>
    </div>
  );
}
