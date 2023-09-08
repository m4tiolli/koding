import SideBarR from "../../Components/SideBarR/SideBarR";
import { BiSearch } from "react-icons/bi";

function Desempenho(){
    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)" }}>

            <main className="w-full h-full justify-center overflow-hidden">
                
                <SideBarR/>

                <container className="flex flex-col ml-32 mt-28 ">

                    <span className="text-4xl font-semibold">Desempenho</span>


                    {/* Cards */}
                    <div className="flex gap-x-10 justi">
                        <div className="flex flex-col items-center justify-center w-80 h-58 p-8 rounded-2xl shadow-md mt-10" style={{ background: "linear-gradient(10deg, #9EE9B2 0%, #38E56B 100%)" }}>
                            <span className="text-white text-6xl font-semibold">900</span>
                            <span className="text-white text-xl text-center">Liçoes Completadas</span>
                        </div>

                        <div className="flex flex-col items-center justify-center w-80 h-58 p-8 rounded-2xl shadow-md mt-10" style={{ background: "linear-gradient(10deg, #75E0C9 0%, #51CEAE 100%)" }}>
                            <span className="text-white text-6xl font-semibold">03</span>
                            <span className="text-white text-xl text-center">Linguagens aprendidas</span>
                        </div>

                        <div className="flex flex-col items-center justify-center w-80 h-58 p-8 rounded-2xl shadow-md mt-10" style={{ background: "linear-gradient(10deg, #63A8ED 0%, #1E7BD6 100%)" }}>
                            <span className="text-white text-6xl font-semibold">100</span>
                            <span className="text-white text-xl text-center">Nível de Experiência</span>
                        </div>
                    </div>

                    {/* Gráficos */}
                    <div className="flex gap-x-32">
                        <div className="mt-10 w-6/12 space-y-3 mb-10">
                            <div className="flex items-center justify-between">
                                <span className="text-xl">Alguma coisa</span>
                                <select className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer" name="time" id="time">
                                    <option value="24">Últimas 24h</option>
                                    <option value="48">Últimas 48h</option>
                                    <option value="72">Últimas 72h</option>
                                </select>
                            </div>
                            <div className="h-72 bg-gray-500 rounded-2xl shadow-sm"></div>
                        </div>

                        <div className="mt-10 w-4/12 space-y-3 mb-10">
                            <div className="flex items-center justify-between">
                                <span className="text-xl">Alguma coisa</span>
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