import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";

function Aulas() {
  const mode = localStorage.getItem("theme");

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

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro">
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

        <div className="space-y-32">
          <div className="flex flex-col justify-center ml-10">
            <div className="flex space-x-16 items-center mb-10">
              <Link to={"/conteudo"}>
                <div className="space-y-5">
                  {/* Card */}
                  <div
                    className="w-80 h-52 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(10deg, ${Color(
                        mode,
                        "#E87331"
                      )} 0%, ${Color(mode, "#E88D59")} 100%`,
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <span className="w-80 flex items-center justify-start text-xl text-black font-semibold truncate dark:text-white">
                      Aula 00 - Estrutura HTML
                    </span>
                    {/* Filtro */}
                    <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                      <div
                        className="w-16 p-1 rounded-xl"
                        style={{
                          backgroundImage: `linear-gradient(10deg, ${Color(
                            mode,
                            "#E87331"
                          )} 0%, ${Color(mode, "#E88D59")} 100%`,
                        }}
                      >
                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                          HTML
                        </span>
                      </div>
                      <div
                        className="w-32 p-1 rounded-xl"
                        style={{
                          backgroundImage: `linear-gradient(10deg, ${Color(
                            mode,
                            "#E87331"
                          )} 0%, ${Color(mode, "#E88D59")} 100%`,
                        }}
                      >
                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                          Estrutura
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Aulas;
