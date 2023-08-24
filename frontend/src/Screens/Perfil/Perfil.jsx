import { GoPencil } from "react-icons/go";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";

function Perfil(){
    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}> 

        <main className="w-full h-screen flex gap-x-72 ml-56 mr-2 overflow-hidden">

            {/* Card Perfil */}
            <container className="items-center justify-center w-72 h-96 ml-32 mt-32 gap-3 rounded-xl" style={{ background: "linear-gradient(10deg, #831ED5 0%, #C66A6E 50%, #F19A2C 100%)" }}>
                <div className="w-full h-full flex flex-col items-center gap-y-5 justify-center">
                    {/* <GoPencil className="text-white text-3xl"/> */}
                    <div className="h-32 w-32 rounded-full bg-white"></div>
                    <div className="flex flex-col items-center justify-center"> 
                        <span className="text-2xl text-white">
                        @user
                        </span>
                        <span className="text-xl text-white/60">
                            User Sobrenome
                        </span>
                    </div>
                   
                </div>
            </container>

            {/* Dados */}

            <container className="flex flex-col items-center justify-center w-72 h-96 mt-32 ml-32 gap-y-5">

                <span className="text-3xl mr-28 text-left mb-5 font-semibold text-black">Dados</span>

                <div className="flex items-center justify-center h-24 w-56 rounded-lg px-0 text-left border-2 border-solid border-black leading-none hover:bg-white/50">
                    <div className="inline-flex items-center gap-5 space-x-10">
                        <AiFillStar className="relative text-4xl"></AiFillStar>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-2xl">100</span>
                            <span className="text-xl text-black/75">Total XP</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center h-24 w-56 rounded-lg px-0 text-left border-2 border-solid border-black leading-none hover:bg-white/50">
                    <div className="inline-flex items-center gap-5 space-x-10">
                        <AiFillHeart className="relative text-4xl"></AiFillHeart>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-2xl">100</span>
                            <span className="text-xl text-black/75">Total XP</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center h-24 w-56 rounded-lg px-0 text-left border-2 border-solid border-black leading-none hover:bg-white/50">
                    <div className="inline-flex items-center gap-5 space-x-10">
                        <FaPencilAlt className="relative text-3xl"></FaPencilAlt>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-2xl">100</span>
                            <span className="text-xl text-black/75">Total XP</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center h-24 w-56 rounded-lg px-0 text-left border-2 border-solid border-black leading-none hover:bg-white/50">
                    <div className="inline-flex items-center gap-5 space-x-10">
                        <FaPencilAlt className="relative text-3xl"></FaPencilAlt>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-2xl">100</span>
                            <span className="text-xl text-black/75">Total XP</span>
                        </div>
                    </div>
                </div>

            </container>
            

            <container>

            </container>
            
        </main>

        </div>
    )
}

export default Perfil;
