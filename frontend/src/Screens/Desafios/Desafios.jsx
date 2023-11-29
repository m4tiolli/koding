import Menu from "./../../Components/Menu/Menu";
import "../Desafios/Desafios.css";

import { Link } from "react-router-dom";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";

const Desafios = () => {
  
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

  return (
    <div
      className="flex h-full w-full laptop1024:h-full notebook:h-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <Menu screen={"desafios"} />

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro">
        <div className="flex flex-col ml-20 mt-24">
          <span className="font-semibold text-3xl dark:text-white">
            Desafios
          </span>

          {/* Cards Filtro */}

          <div className="flex gap-x-10 mt-10 text-xl">
            <div
              className="flex justify-center items-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#EB884F") }}
            >
              HTML
            </div>
            <div
              className="flex justify-center align-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#2774CE") }}
            >
              CSS
            </div>
            <div
              className="flex justify-center align-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#EECC43") }}
            >
              JavaScript
            </div>
            <div
              className="flex justify-center align-center w-32 h-16 p-5 text-white rounded-xl drop-shadow-md  cursor-pointer div"
              style={{ background: Color(mode, "#6D7AC6") }}
            >
              PHP
            </div>
          </div>

          {/* Cards Jogo */}

          <div className="flex gap-x-10 flex-wrap mb-10">
            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  HTML - Sentença
                </span>
                <Link to={"/sentenca"}>
                  <div
                    className="w-80 h-48 rounded-xl mb-5"
                    style={{ backgroundColor: Color(mode, "#E88D59") }}
                  ></div>
                </Link>
                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{ backgroundColor: Color(mode, "#E88D59") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      HTML
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{ backgroundColor: Color(mode, "#E88D59") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      Sentença
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  CSS - Flexbox
                </span>
                <Link to={"/flexbox"}>
                  <div
                    className="w-80 h-48 rounded-xl mb-5"
                    style={{ background: Color(mode, "#2774CE") }}
                  ></div>
                </Link>
                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(10deg, ${Color(
                        mode,
                        "#4189DC"
                      )} 0%, ${Color(mode, "#1768C5")} 100%`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      CSS
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(10deg, ${Color(
                        mode,
                        "#4189DC"
                      )} 0%, ${Color(mode, "#1768C5")} 100%`,
                    }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      Flexbox
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  JavaScript - Input
                </span>
                <Link to={"/input"}>
                  <div
                    className="w-80 h-48 rounded-xl mb-5"
                    style={{ background: Color(mode, "#EECC43") }}
                  ></div>
                </Link>
                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{ background: Color(mode, "#EECC43") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      JavaScript
                    </span>
                  </div>
                  <div
                    className="w-32 p-1 rounded-xl"
                    style={{ background: Color(mode, "#EECC43") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      Input
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="">
                <span className="text-3xl font-semibold dark:text-white">
                  PHP - Quiz
                </span>
                <Link to={"/quiz"}>
                  <div
                    className="w-80 h-48 rounded-xl mb-5"
                    style={{ background: Color(mode, "#6D7AC6") }}
                  ></div>
                </Link>
                <span></span>
                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{ background: Color(mode, "#6D7AC6") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      PHP
                    </span>
                  </div>
                  <div
                    className="w-16 p-1 rounded-xl"
                    style={{ background: Color(mode, "#6D7AC6") }}
                  >
                    <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                      Quiz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Desafios;
