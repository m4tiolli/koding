import { GoPencil } from "react-icons/go";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import {
    protanomaly,
    tritanomaly,
    deuteranomaly,
} from "../../Components/ColorBlind";

import { useEffect, useState } from 'react';

function Perfil() {
    useEffect(() => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    let mode = localStorage.theme
    function Color(mode, color) {
        var newcolor;
        if (mode === "protanomaly") {
            newcolor = protanomaly(color);
            localStorage.theme = "protanomaly";
        } else if (mode === "deuteranomaly") {
            newcolor = deuteranomaly(color);
            localStorage.theme = "deuteranomaly";
        } else if (mode === "tritanomaly") {
            newcolor = tritanomaly(color);
            localStorage.theme = "tritanomaly";
        } else {
            newcolor = color;
        }
        return newcolor;
    }
    return (
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>

            <main className=" w-full h-screen flex xl:gap-x-32 gap-x-16 ml-52 mr-2 overflow-hidden dark:text-white font-semibold dark:bg-darkcinzaclaro">

                {/* Card Perfil */}
                <container className="items-center justify-center xl:w-72 xl:h-96 w-64 h-96 xl:ml-64 ml-28 xl:mt-40 mt-32 rounded-xl" style={{ backgroundImage: `linear-gradient(10deg, ${Color(mode, "#831ED5")} 0%, ${Color(mode, "#C66A6E")} 50%, ${Color(mode, "#F19A2C")} 100%)` }}>
                    <div className=" w-full h-full flex flex-col -mt-5 items-center gap-y-8 justify-center">
                        <div className="w-10 h-10 absolute xl:top-56 top-48 ml-28 flex items-center justify-center bg-neutral-500 rounded-full">
                            <GoPencil className="text-white text-3xl" />
                        </div>

                        <div className="xl:h-36 xl:w-36 h-32 w-32 rounded-full bg-white"></div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="xl:text-3xl text-2xl text-white">
                                @user
                            </span>
                            <span className="xl:text-2xl text-xl text-white/60">
                                User Sobrenome
                            </span>
                        </div>

                    </div>
                </container>

                {/* Dados */}

                <container className="flex flex-col items-center justify-center w-72 h-96 xl:mt-40 mt-32 gap-y-5">

                    <span className="xl:text-4xl text-3xl mr-28 text-left font-semibold text-black dark:text-white">Dados</span>

                    <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
                        <div className="inline-flex items-center gap-5">
                            <AiFillStar className="xl:text-5xl text-4xl"></AiFillStar>
                            <div className="w-20 text-center flex flex-col items-center justify-center">
                                <span className="xl:text-3xl text-2xl">100</span>
                                <span className="xl:text-md text-sm text-black/75 dark:text-white">Total XP</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
                        <div className="inline-flex items-center gap-5">
                            <AiFillHeart className="xl:text-5xl text-4xl"></AiFillHeart>
                            <div className="w-20 text-center flex flex-col items-center justify-center">
                                <span className="xl:text-3xl text-2xl">5</span>
                                <span className="xl:text-md text-sm text-black/75 dark:text-white">Vidas Restantes</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
                        <div className="inline-flex items-center gap-5">
                            <FaPencilAlt className="xl:text-4xl text-3xl"></FaPencilAlt>
                            <div className="w-20 text-center flex flex-col items-center justify-center">
                                <span className="xl:text-3xl text-2xl">5</span>
                                <span className="xl:text-md text-sm text-black/75 dark:text-white">Exercícios feitos</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
                        <div className="inline-flex items-center gap-5">
                            <FaPencilAlt className="xl:text-4xl text-3xl"></FaPencilAlt>
                            <div className="w-20 text-center flex flex-col items-center justify-center">
                                <span className="xl:text-3xl text-2xl">2</span>
                                <span className="xl:text-md text-sm text-black/75 dark:text-white">Linguagens aprendidas</span>
                            </div>
                        </div>
                    </div>

                </container>

            </main>

        </div>
    )
}

export default Perfil;
