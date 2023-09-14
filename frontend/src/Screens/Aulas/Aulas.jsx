import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import SideBar from '../../Components/SideBar/SideBar';
import { useEffect } from 'react';

function Aulas(){
    useEffect(() => {
        if (localStorage.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, []);
    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>   

        <SideBar />

         {/* Conteudo */}

            <main className="w-full ml-52 mr-2 overflow-hidden dark:bg-darkcinzaclaro">

                {/* Barra de pesquisa */} 
                <container className="flex h-64 w-5/12 ml-10 mt-10 items-center justify-center gap-3">
                    <form action="" className="flex rounded-xl w-full items-center justify-center text-white text-xl p-2" style={{ background: "#811CD7" }}>
                        <input type="text" className="bg-transparent outline-none text-2xl" />
                        <a href="">
                            <BiSearch className="xl:mr-5 lg:mr-5 laptop:mr-3 mr-32 text-3xl text-white ml-20"></BiSearch>
                        </a>
                    </form>

                    {/* Filtro */}
                    <container className="flex h-10 w-56 space-x-8 items-center justify-center">
                        <button>
                            <BsFilter className="flex items-center justify-center text-4xl text-white rounded-md" style={{ background: "#811CD7" }}></BsFilter>
                        </button>
                    </container>

                </container>

                {/* Cards */}

                <container className="space-y-32">
                    <container className="flex flex-col justify-center ml-10">
                        
                        <div className="flex space-x-16 items-center">
                            
                            <div className="space-y-5">
                                {/* Card */}
                                <div className="w-80 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                </div>
                                <div className="flex flex-col">
                                    <span className="w-80 flex items-center justify-start text-xl text-black font-semibold truncate dark:text-white">
                                    Aula 00 - Estrutura HTML
                                    </span>
                                    {/* Filtro */}
                                    <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                                        <div className="w-16 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">HTML</span>
                                        </div>
                                        <div className="w-32 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">Estrutura</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {/* Card */}
                                <div className="w-80 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                </div>
                                <div className="flex flex-col">
                                    <span className="w-80 flex items-center justify-start text-xl text-black font-semibold truncate dark:text-white">
                                    Aula 00 - Estrutura HTML
                                    </span>
                                    {/* Filtro */}
                                    <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                                        <div className="w-16 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">HTML</span>
                                        </div>
                                        <div className="w-32 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">Estrutura</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </container>

                    <container className="flex flex-col justify-center ml-10">
                        
                        <div className="flex space-x-16 items-center mb-32">
                            
                        <div className="space-y-5">
                                {/* Card */}
                                <div className="w-80 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                </div>
                                <div className="flex flex-col">
                                    <span className="w-80 flex items-center justify-start text-xl text-black font-semibold truncate dark:text-white">
                                    Aula 00 - Estrutura HTML
                                    </span>
                                    {/* Filtro */}
                                    <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                                        <div className="w-16 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">HTML</span>
                                        </div>
                                        <div className="w-32 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">Estrutura</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {/* Card */}
                                <div className="w-80 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                </div>
                                <div className="flex flex-col">
                                    <span className="w-80 flex items-center justify-start text-xl text-black font-semibold truncate dark:text-white">
                                    Aula 00 - Estrutura HTML
                                    </span>
                                    {/* Filtro */}
                                    <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                                        <div className="w-16 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">HTML</span>
                                        </div>
                                        <div className="w-32 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                                            <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">Estrutura</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </container>
                </container>
              
            
            </main>

        </div>
    )
}

export default Aulas;