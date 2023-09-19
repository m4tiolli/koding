import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Materiais.css";
import {
    protanomaly,
    tritanomaly,
    deuteranomaly,
} from "./../../Components/ColorBlind";

const Materiais = () => {
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
        <div className={`flex h-full w-full dark:bg-darkcinzaclaro`}>
            <main className={`w-full ml-56 mr-2 overflow-hidden`}>
                {/* Barra de pesquisa */}
                <div className="flex h-64 w-5/12 ml-10 mt-10 items-center justify-center gap-3">
                    <form
                        action=""
                        className={`flex rounded-xl w-full items-center justify-center text-white text-xl p-2 dark:bg-darkpesquisa`}
                        style={{ backgroundColor: Color(mode, '#811CD7') }}
                    >
                        <input
                            type="text"
                            className="bg-transparent outline-none text-2xl"
                        />
                        <a href="">
                            <BiSearch className={`text-3xl text-white ml-20`} />
                        </a>
                    </form>

                    {/* Filtro */}
                    <div className="flex h-10 w-56 space-x-8 items-center justify-center">
                        <button>
                            <BsFilter
                                className={`flex items-center justify-center text-4xl text-white rounded-md dark:bg-darkpesquisa`}
                                style={{ backgroundColor: Color(mode, '#811CD7') }}
                            />
                        </button>
                    </div>
                </div>

                {/* Cards */}

                {/* HTML */}
                <div className="flex flex-col justify-center ml-10 space-y-8">
                    <span
                        className={`text-2xl font-semibold ${Color(
                            mode,
                            "dark:text-white"
                        )}`}
                    >
                        Aprendendo HTML
                    </span>
                    <div className="flex space-x-16 items-center">
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#E87331')} 0%, ${Color(mode, '#E88D59')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#E87331')} 0%, ${Color(mode, '#E88D59')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#E87331')} 0%, ${Color(mode, '#E88D59')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#E87331')} 0%, ${Color(mode, '#E88D59')} 100%)` }}
                            />
                        </Link>
                    </div>
                </div>

                {/* CSS */}
                <div className="flex flex-col justify-center ml-10 mt-32 space-y-8">
                    <span
                        className={`text-2xl font-semibold ${Color(
                            mode,
                            "dark:text-white"
                        )}`}
                    >
                        Aprendendo CSS
                    </span>
                    <div className="flex space-x-16 items-center">
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#1566C4')} 0%, ${Color(mode, '#438ADD')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#1566C4')} 0%, ${Color(mode, '#438ADD')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#1566C4')} 0%, ${Color(mode, '#438ADD')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#1566C4')} 0%, ${Color(mode, '#438ADD')} 100%)` }}
                            />
                        </Link>
                    </div>
                </div>

                {/* JS */}
                <div className="flex flex-col justify-center ml-10 mt-32 space-y-8">
                    <span
                        className={`text-2xl font-semibold ${Color(
                            mode,
                            "dark:text-white"
                        )}`}
                    >
                        Aprendendo JavaSript
                    </span>
                    <div className="flex space-x-16 items-center">
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#F2D01F')} 0%, ${Color(mode, '#E3BA4F')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#F2D01F')} 0%, ${Color(mode, '#E3BA4F')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#F2D01F')} 0%, ${Color(mode, '#E3BA4F')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#F2D01F')} 0%, ${Color(mode, '#E3BA4F')} 100%)` }}
                            />
                        </Link>
                    </div>
                </div>

                {/* PHP */}
                <div className="flex flex-col justify-center ml-10 mt-32 mb-32 space-y-8">
                    <span
                        className={`text-2xl font-semibold ${Color(
                            mode,
                            "dark:text-white"
                        )}`}
                    >
                        Aprendendo PHP
                    </span>
                    <div className="flex space-x-16 items-center">
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#485BBB')} 0%, ${Color(mode, '#707EC6')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#485BBB')} 0%, ${Color(mode, '#707EC6')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#485BBB')} 0%, ${Color(mode, '#707EC6')} 100%)` }}
                            />
                        </Link>
                        <Link to={"/aulas"}>
                            <div
                                className={`w-72 h-52 rounded-xl`}
                                style={{ background: `linear-gradient(108deg, ${Color(mode, '#485BBB')} 0%, ${Color(mode, '#707EC6')} 100%)` }}
                            />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Materiais;
