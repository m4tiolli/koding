function Desafios() {
    return (
        <div className="flex h-screen w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>

            <main className="w-full ml-52 mr-2 overflow-hidden dark:bg-darkcinzaclaro">

                <div className="flex flex-col ml-20 mt-24">
                    <span className="font-semibold text-3xl dark:text-white">Desafios</span>

                    {/* Cards Filtro */}

                    <div className="flex gap-x-10 mt-10 text-xl">
                        <div className="flex justify-center items-center w-32 h-16 p-5 text-white bg-[#EB884F] rounded-xl drop-shadow-md">HTML</div>
                        <div className="flex justify-center align-center w-32 h-16 p-5 text-white bg-[#2774CE] rounded-xl drop-shadow-md">CSS</div>
                        <div className="flex justify-center align-center w-32 h-16 p-5 text-white bg-[#EECC43] rounded-xl drop-shadow-md">JavaScript</div>
                        <div className="flex justify-center align-center w-32 h-16 p-5 text-white bg-[#6D7AC6] rounded-xl drop-shadow-md">PHP</div>
                    </div>

                    {/* Cards Jogo */}

                    <div className="mt-20">
                        <div>
                            <span className="text-3xl font-semibold">Flexbox</span>
                            <div className="w-64 h-32 bg-[#2774CE] rounded-xl mb-5"></div>
                            <span></span>
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