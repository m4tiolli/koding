import { BsBook, BsFilter } from "react-icons/bs";
import { PiSword } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import {CiCircleMore } from "react-icons/ci";
import { BiSearch, BiHelpCircle} from "react-icons/bi";

import Logo from '../assets/kodingLogo.png';
import './Materiais.css';

function Materiais() {
    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)"}}>

            {/* Menu */}

            <aside className="h-screen w-52 p-5 fixed top-0 flex flex-col items-start shadow-lg" style={{ background: "#EDD8FF"}}>

                <header className="w-full mb-12">
                    <img className="logo-img" src={Logo} alt="Koding" />
                </header>

                <nav className="flex flex-col flex-auto w-full">

                    <button className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 " style={{transition: '150ms ease-in'}}>
                        <span className="inline-flex items-center gap-5">
                            <BsBook className="relative text-3xl">materiais</BsBook>
                            <span className="text-lg">Materiais</span>
                        </span>
                    </button>

                    <button className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 " style={{transition: '150ms ease-in'}}>
                        <span className="inline-flex items-center gap-5">
                            <AiOutlineUser className="relative text-3xl">perfil</AiOutlineUser>
                            <span className="text-lg">Perfil</span>
                        </span>
                    </button>

                    <button className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 " style={{transition: '150ms ease-in'}}>
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

            {/* Barra de pesquisa - menu */}

            <header className="fixed w-full h-16 flex items-center justify-end ml-52 shadow-sm" style={{ background: "#EDD8FF"}}>
               
                <form className="flex w-full items-center justify-center" action="">
                    <input className="bg-transparent outline-none w-7/12 text-2xl" type="text" />
                    <a href="">
                        <BiSearch className="text-3xl"></BiSearch>
                    </a>
                </form>
               
            </header>

            {/* Conteudo */}
          
            <main className="w-full ml-56 mr-2 overflow-hidden">



                     {/* Barra de pesquisa */}
                    <container className="flex h-64 w-5/12 ml-10 mt-10 items-center justify-center gap-3">
                        <form action="" className="flex rounded-xl w-full items-center justify-center text-white text-xl p-2" style={{ background: "#811CD7"}}>
                            <input type="text" className="bg-transparent outline-none text-2xl"/>
                            <a href="">
                                <BiSearch className="text-3xl text-white ml-20"></BiSearch>
                            </a>
                        </form>

                        {/* Filtro */}
                        <container className="flex h-10 w-56 space-x-8 items-center justify-center">
                            <button>
                                <BsFilter className="flex items-center justify-center text-4xl text-white rounded-md" style={{ background: "#811CD7"}}></BsFilter>
                            </button>
                        </container>

                    </container> 

                    {/* Cards */}

                    {/* HTML */}

                    <container className="flex flex-col justify-center ml-10 space-y-8">
                        <spam className="text-2xl font-semibold">
                            Aprendendo HTML
                        </spam>
                        <div className="flex space-x-16 items-center">

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)"}}>
                            </div>

                        </div>
                    </container>

                    {/* CSS */}

                    <container className="flex flex-col justify-center ml-10 mt-32 space-y-8">
                        <spam className="text-2xl font-semibold">
                            Aprendendo CSS
                        </spam>
                        <div className="flex space-x-16 items-center">

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)"}}>
                            </div>

                        </div>
                    </container>

                    {/* JS */}

                    <container className="flex flex-col justify-center ml-10 mt-32 space-y-8">
                        <spam className="text-2xl font-semibold">
                            Aprendendo JavaSript
                        </spam>
                        <div className="flex space-x-16 items-center">

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)"}}> 
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)"}}> 
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)"}}>
                            </div>
                            
                        </div>
                    </container>

                     {/* PHP */}

                     <container className="flex flex-col justify-center ml-10 mt-32 mb-32 space-y-8">
                        <spam className="text-2xl font-semibold">
                            Aprendendo PHP
                        </spam>
                        <div className="flex space-x-16 items-center">

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)"}}>
                            </div>
                            
                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)"}}>
                            </div>

                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)"}}>
                            </div>

                        </div>
                    </container>

                    {/* Menu pop up */}

                        <nav className="flex flex-col space-y-3 rounded-xl shadow-md w-56 ml-5 p-5 mb-10" style={{ background: "#E4D9ED"}}>

                           <button className="text-left rounded-lg leading-none hover:bg-purple-700 hover:text-white ">
                            <span className="inline-flex items-center gap-2">
                                
                                <span className="text-lg">Configurações</span>
                            </span>
                           </button>

                           <button className="text-left rounded-lg leading-none hover:bg-purple-700 hover:text-white ">
                            <span className="inline-flex items-center gap-2">
                                <BiHelpCircle className="relative text-lg"></BiHelpCircle>
                                <span className="text-lg">Central de Ajuda</span>
                            </span>
                           </button>

                           <button className="text-left rounded-lg leading-none mb-32 hover:bg-purple-700 hover:text-white ">
                            <span className="inline-flex items-center gap-2">
                                <BiHelpCircle className="relative text-lg"></BiHelpCircle>
                                <span className="text-lg">Sair</span>
                            </span>
                           </button>
                           
                           <button className="text-center rounded-lg leading-none mb-32 border-1 border-red hover:scale-110" style={{ background: "#C4BCC7", transition: "300ms ease-in"}}>
                            <span className="inline-flex items-center">
                                <span className="text-lg">Dar Feedback</span>
                            </span>
                           </button>

                        </nav>
               
            </main>

        </div>
    )
}

export default Materiais;