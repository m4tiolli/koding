function Aprender(){
    return(
        <div  className="flex items-center justify-center h-screen w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>
           
           <div className="my-16 mb-5 w-full mx-5 h-full rounded-2xl flex flex-col items-center justify-center gap-y-10 bg-purple-300/40">
            <h1 className="text-6xl text-gray-600/70 font-semibold">O que vamos aprender?</h1>
            <container className="flex gap-16 mt-20">

                <div className="h-72 w-60 bg-black rounded-3xl ease-linear hover:scale-110 cursor-pointer"style={{ background: "linear-gradient(10deg,#E88D59 0%, #E87331 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4 gap-y-3">
                        <span className="font-bold text-2xl">HTML</span>
                        <span className="w-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>

                <div className="h-72 w-60 bg-black rounded-3xl ease-linear hover:scale-110 cursor-pointer" style={{ background: "linear-gradient(10deg, #438ADD 0%, #1566C4 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4 gap-y-3">
                        <span className="font-bold text-2xl">CSS</span>
                        <span className="w-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>

                <div className="h-72 w-60 bg-black rounded-3xl ease-linear hover:scale-110 cursor-pointer" style={{ background: "linear-gradient(10deg, #E3BA4F 0%, #F2D01F 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4 gap-y-3">
                        <span className="font-bold text-2xl">JavaScript</span>
                        <span className="w-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>

                <div className="h-72 w-60 bg-black rounded-3xl ease-linear hover:scale-110 cursor-pointer" style={{ background: "linear-gradient(10deg, #707EC6 0%, #485BBB 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4 gap-y-3">
                        <span className="font-bold text-2xl">PHP</span>
                        <span className="w-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>
            </container>
           </div>

        </div>
    )
}

export default Aprender;