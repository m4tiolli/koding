import { IoIosArrowBack } from "react-icons/io";

import Logo1 from '../../Components/Logo1';
import { Link } from 'react-router-dom';
import "../Ajuda/Ajuda.css";

function Ajuda(){
    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)" }}>
            <main className="w-full h-full justify-center overflow-hidden">

                <div className="flex justify-center">
                    <Logo1/>
                </div>

                <Link to={'/home'}>
                <div className="flex items-center justify-center w-20 h-10 mt-16 ml-10 font-semibold text-lg text-zinc-800">
                    <IoIosArrowBack className=""/>
                    <span className="">Voltar</span>
                </div>
                </Link>

                <div className="flex justify-center">
                    <span className="font-semibold text-2xl text-zinc-800">Perguntas Frequentes</span>
                </div>

                {/* Perguntas */}

                <container className="cnt space-y-10 flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center mt-20 w-5/12">
                        <div className="txt w-full flex items-center p-4 border-1 border-solid border-black/60 text-xl font-semibold">Koding</div>   
                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Quem Somos?</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>

                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Missão, Visão e Valores</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>

                        <details className="radius details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Nosso Contato</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>
                    </div>

                    <div className="flex flex-col items-center justify-center w-5/12">
                        <div className="txt w-full flex items-center p-4 border-1 border-solid border-black/60 text-xl font-semibold">Material de Apoio</div>   
                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Conceitos Básicos: HTML</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>

                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Conceitos Básicos: CSS</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>

                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Conceitos Básicos: JavaScript</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>

                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Conceitos Básicos: PHP</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>
                    </div>

                    <div className="flex flex-col items-center justify-center w-5/12">
                        <div className="txt w-full flex items-center p-4 border-1 border-solid border-black/60 text-xl font-semibold">Gerenciamento da Conta</div>   
                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Como editar meu perfi?</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>

                        <details className="details w-full flex items-center p-4 border-1 border-solid border-black/60">
                            <summary className="outline-none cursor-pointer text-lg">Como excluir minha conta?</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>

                        <details className="radius details w-full flex items-center p-4 border-1 border-solid border-black/60 mb-16">
                            <summary className="outline-none cursor-pointer text-lg">Como restaurar minha senha?</summary>
                            <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        </details>
                    </div>
                </container>

                

            </main>
        </div>
    )
}

export default Ajuda;