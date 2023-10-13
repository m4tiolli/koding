import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";
import CardAula from "../../Components/CardAula/CardAula";

function Aulas() {
  const mode = localStorage.getItem("theme");

  const location = useLocation()
  const aulas = location.state.aulas

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

  const navigate = useNavigate();
  return (
    <div
      className="flex h-full w-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <Menu />

      {/* Conteudo */}

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro min-h-screen">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="flex mt-28 ml-8 mb-5 text-3xl cursor-pointer dark:text-white"
        />

        {/* Barra de pesquisa */}
        <div className="flex h-64 w-5/12 ml-12 -m-20 mb-2 items-center justify-center gap-3">
          <form
            action=""
            className="flex rounded-xl w-full items-center justify-center text-white text-xl p-2 dark:bg-darkpesquisa" style={{ background: Color(mode, "#811CD7") }}
          >
            <input
              type="text"
              className="bg-transparent outline-none text-2xl"
            />
            <a href="">
              <BiSearch className="xl:mr-5 lg:mr-5 laptop:mr-3 mr-32 text-3xl text-white ml-20"></BiSearch>
            </a>
          </form>

          {/* Filtro */}
          <div className="flex h-10 w-56 space-x-8 items-center justify-center">
            <button>
              <BsFilter
                className="flex items-center justify-center text-4xl text-white rounded-md dark:bg-darkpesquisa"
                style={{ background: Color(mode, "#811CD7") }}
              ></BsFilter>
            </button>
          </div>
        </div>

        {/* Cards */}
        {
          aulas.map((aula, index) => (
            <CardAula aula={aula} key={index} />
          ))
        }
      </main>
    </div>
  );
}

export default Aulas;
