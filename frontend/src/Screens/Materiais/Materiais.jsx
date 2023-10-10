import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import "./Materiais.css";
import {
    protanomaly,
    tritanomaly,
    deuteranomaly,
} from "./../../Components/ColorBlind";
import { useEffect, useState } from "react";
import CardCapitulo from "../../Components/CardCapitulo/CardCapitulo";
import { Spinner } from '@chakra-ui/react'

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
    const [isLoading, setIsLoading] = useState(true)
    const [linguagem, setLinguagem] = useState([]);
    const [capitulo, setCapitulos] = useState([]);

    useEffect(() => {
        const linguagemData = localStorage.getItem("linguagemData");
        const capituloData = localStorage.getItem("capituloData");

        if (linguagemData) {
            setLinguagem(JSON.parse(linguagemData));
        } else {
            fetch("https://tcckoding.azurewebsites.net/linguagens", {
                method: "GET",
            })
                .then((response) => response.json())
                .then((json) => {
                    setLinguagem(json);
                    localStorage.setItem("linguagemData", JSON.stringify(json));
                })
                .catch((error) => {
                    console.log(error);
                    alert("Erro ao buscar linguagens");
                });
        }

        if (capituloData) {
            setCapitulos(JSON.parse(capituloData));
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, []);

    useEffect(() => {
        const fetchCapitulos = async (linguagemId) => {
            try {
                const response = await fetch(`https://tcckoding.azurewebsites.net/capitulos/${linguagemId}`, {
                    method: "GET",
                });
                const json = await response.json();
                setCapitulos(json);
                localStorage.setItem("capituloData", JSON.stringify(json));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                alert("Erro ao buscar capítulos");
                setIsLoading(false);
            }
        };
        linguagem.forEach((linguagem) => {
            fetchCapitulos(linguagem.id);
        });
    }, [linguagem]);

    return (
        <div className={`flex h-full w-full dark:bg-darkcinzaclaro`}>
            <main className={`w-full min-h-screen ml-56 mr-2 overflow-hidden`}>
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
                {linguagem.map((linguagem, index) => (
                    <div className="flex flex-col justify-center ml-10 space-y-8 mb-20" key={index}>
                        <span
                            className={`text-2xl font-semibold ${Color(
                                mode,
                                "dark:text-white"
                            )}`}
                        >
                            Aprendendo {linguagem.nome}
                        </span>
                        <div className="flex space-x-16 items-center">
                            {capitulo.length === 0 || isLoading ? (
                                <Spinner color='white' />
                            ) : (
                                capitulo.map((capitulo, index) => (
                                    <CardCapitulo capitulo={capitulo} key={index} />
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Materiais;
