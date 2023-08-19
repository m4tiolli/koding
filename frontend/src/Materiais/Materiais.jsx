import { BsBook } from "react-icons/bs";
import { PiSword } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import {CiCircleMore } from "react-icons/ci";
import { BiSearch} from "react-icons/bi";

import Logo from '../assets/kodingLogo.png';
import './Materiais.css';

function Materiais (){
    return(
        <div className="flex h-screen w-full overflow-x-hidden" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)"}}>

            {/* Menu */}

            <aside className="h-screen w-52 p-5 fixed top-0 flex flex-col items-start shadow-lg" style={{ background: "#EDD8FF"}}>

                <header className="w-full mb-12">
                    <img className="logo-img" src={Logo} alt="Koding" />
                </header>

                <nav className="flex flex-col flex-auto w-full">
                    <button className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50" style={{transition: '150ms ease-in'}}>
                        <span className="inline-flex items-center gap-5">
                            <BsBook className="relative text-3xl">materiais</BsBook>
                            <span className="text-lg">Materiais</span>
                        </span>
                    </button>

                    <button className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50" style={{transition: '150ms ease-in'}}>
                        <span className="inline-flex items-center gap-5">
                            <AiOutlineUser className="relative text-3xl">perfil</AiOutlineUser>
                            <span className="text-lg">Perfil</span>
                        </span>
                    </button>

                    <button className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50" style={{transition: '150ms ease-in'}}>
                        <span className="inline-flex items-center gap-5">
                            <PiSword className="relative text-3xl">desafios</PiSword>
                            <span className="text-lg">Desafios</span>
                        </span>
                    </button>

                    <button className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50" style={{transition: '150ms ease-in'}}>
                        <span className="inline-flex items-center gap-5">
                            <CiCircleMore className="relative text-3xl">mais</CiCircleMore>
                            <span className="text-lg">Mais</span>
                        </span>
                    </button>
                </nav>
             
            </aside>

            {/* Conteudo */}
          
        </div>
    )
}

export default Materiais;