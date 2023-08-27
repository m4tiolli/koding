function Aprender(){
    return(
        <div  className="flex items-center justify-center h-screen w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>
           
           <div className="my-16 mb-5 w-full mx-5 h-full rounded-2xl flex flex-col items-center justify-center gap-y-10 bg-purple-300/40">
            <h1 className="text-6xl text-gray-600/70 font-semibold">O que vamos aprender?</h1>
            <container className="flex gap-16 mt-20">

                <div className="h-72 w-60 bg-black rounded-3xl"style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4">
                        <span className="font-bold text-2xl">HTML</span>
                        <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>

                <div className="h-72 w-60 bg-black rounded-3xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4">
                        <span className="font-bold text-2xl">CSS</span>
                        <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>

                <div className="h-72 w-60 bg-black rounded-3xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4">
                        <span className="font-bold text-2xl">JavaScript</span>
                        <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>

                <div className="h-72 w-60 bg-black rounded-3xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)" }}>
                    <div className="flex flex-col text-white mt-32 ml-4">
                        <span className="font-bold text-2xl">PHP</span>
                        <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </div>
            </container>
           </div>

        </div>
    )
}

export default Aprender;