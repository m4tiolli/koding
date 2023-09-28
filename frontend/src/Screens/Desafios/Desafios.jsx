import { Link } from "react-router-dom";

function Desafios() {
    return (
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>

            <main className="w-full ml-52 mr-2 overflow-hidden dark:bg-darkcinzaclaro">

                <div className="flex flex-col ml-20 mt-24">
                    <span className="font-semibold text-4xl dark:text-white">Desafios</span>

                    {/* Cards Filtro */}

                    <div className="flex gap-x-10 mt-10 text-xl">
                        <Link to={"/home"}>
                            <div className="flex justify-center items-center w-28 h-16 p-5 text-white bg-[#EB884F] rounded-xl drop-shadow-md">HTML</div>
                        </Link>
                        <Link to={"/home"}>
                            <div className="flex justify-center align-center w-28 h-16 p-5 text-white bg-[#2774CE] rounded-xl drop-shadow-md">CSS</div>
                        </Link>
                        <Link to={"/home"}>
                            <div className="flex justify-center align-center w-28 h-16 p-5 text-white bg-[#EECC43] rounded-xl drop-shadow-md">JavaScript</div>
                        </Link>
                        <Link to={"/home"}>
                            <div className="flex justify-center align-center w-28 h-16 p-5 text-white bg-[#6D7AC6] rounded-xl drop-shadow-md">PHP</div>
                        </Link>
                    </div>

                    {/* Cards Jogo */}

                    <div className="w-80 mt-20 mb-10 flex gap-x-10">
                            <div className="space-y-3">
                                <span className="text-3xl font-semibold">Flexbox</span>
                                <Link to={"/flexbox"}>
                                    <div className="w-80 h-40 bg-[#2774CE] rounded-xl mb-5 mt-3"></div>
                                </Link>
                                <span className="flex w-full text-lg">Que tal tentar se desafiar e praticar flexbox na prática? <br/> Clique, jogue e aprenda!</span>
                                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                                    <div className="w-16 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #4189DC 0%, #1768C5 100%)" }}>
                                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">CSS</span>
                                    </div>
                                    <div className="w-32 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #4189DC 0%, #1768C5 100%)" }}>
                                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">Flexbox</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <span className="text-3xl font-semibold">Flexbox</span>
                                <Link to={"/flexbox"}>
                                    <div className="w-80 h-40 bg-[#2774CE] rounded-xl mb-5 mt-3"></div>
                                </Link>
                                <span className="flex w-full text-lg">Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                                    <div className="w-16 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #4189DC 0%, #1768C5 100%)" }}>
                                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">CSS</span>
                                    </div>
                                    <div className="w-32 p-1 rounded-xl" style={{ background: "linear-gradient(108deg, #4189DC 0%, #1768C5 100%)" }}>
                                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate">Flexbox</span>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>

            </main>

        </div>
    )

}

export default Desafios;