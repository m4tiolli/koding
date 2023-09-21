import { useEffect } from 'react';

function Desempenho(){

    useEffect(() => {
        if (localStorage.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, []);

    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)" }}>

            <main className="w-full h-full laptop:h-screen lg:h-screen notebook:h-full justify-center overflow-hidden dark:bg-darkfundoR">
                

                <container className="flex flex-col lg:ml-72 ml-48 mt-40 ">

                    <span className="-ml-24 lg:-ml-14 notebook:-ml-3 -mt-16 text-4xl font-semibold dark:text-white">Desempenho</span>


                    {/* Cards */}
                    <div className="flex flex-col justify-center items-center md:flex-row 2xl:-ml-80 notebook:-ml-14 lg:-ml-14 -ml-8 laptop:gap-44 xl:gap-10 laptop:gap-x-10 gap-x-5">
                        <div className="flex flex-col items-center justify-center xl:w-80 lg:w-64 md:w-48 w-64 h-58 p-8 rounded-2xl shadow-md mt-10" style={{ background: "linear-gradient(10deg, #9EE9B2 0%, #38E56B 100%)" }}>
                            <span className="text-white text-6xl font-semibold">900</span>
                            <span className="text-white text-xl text-center">Lições Completadas</span>
                        </div>

                        <div className="flex flex-col items-center justify-center xl:w-80 lg:w-64 md:w-48 w-64 h-58 p-8 rounded-2xl shadow-md mt-10"  style={{ background: "linear-gradient(10deg, #75E0C9 0%, #51CEAE 100%)" }}>
                            <span className="text-white text-6xl font-semibold">03</span>
                            <span className="text-white text-xl text-center">Linguagens Aprendidas</span>
                        </div>


                        <div className="flex flex-col items-center justify-center xl:w-80 lg:w-64 md:w-48 w-64 h-58 p-8 rounded-2xl shadow-md mt-10" style={{ background: "linear-gradient(10deg, #63A8ED 0%, #1E7BD6 100%)" }}>
                            <span className="text-white text-6xl font-semibold">100</span>
                            <span className="text-white text-xl text-center">Nível de Experiência</span>
                        </div>
                    </div>

                    {/* Gráficos */}
                    <div className="flex flex-col lg:flex-row lg:-ml-12 -ml-24 xl:mx-5 notebook:-ml-5 lg:gap-x-24 gap-x-64">
                        <div className="mt-10 lg:w-11/12 lg:mr-0 w-12/12 mr-5 space-y-3 mb-10">
                            <div className="flex items-center justify-between">
                                <span className="text-xl dark:text-white">Alguma coisa</span>
                                <select className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer" name="time" id="time">
                                    <option value="24">Últimas 24h</option>
                                    <option value="48">Últimas 48h</option>
                                    <option value="72">Últimas 72h</option>
                                </select>
                            </div>
                            <div className="h-72 bg-gray-500 rounded-2xl shadow-sm"></div>
                        </div>

                        <div className="mt-10 lg:w-7/12 w-12/12 mr-5 space-y-3 mb-10">
                            <div className="flex items-center justify-between">
                                <span className="text-xl dark:text-white">Alguma coisa</span>
                                <select className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer" name="time" id="time">
                                    <option value="24">Últimas 24h</option>
                                    <option value="48">Últimas 48h</option>
                                    <option value="72">Últimas 72h</option>
                                </select>
                            </div>
                            <div className="h-72 bg-gray-500 rounded-2xl shadow-sm"></div>
                        </div>
                    </div>

                    
                </container>

            </main>

        </div>
    )
}

export default Desempenho;