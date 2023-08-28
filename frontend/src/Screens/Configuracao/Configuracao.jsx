import { IoIosLogOut } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";

import SideBar from '../../Components/SideBar/SideBar';
import { Link } from 'react-router-dom';

function Configuracao(){
    return(
        <div className="flex h-screen w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>
            
            <SideBar />

            <main className="w-full ml-60 mr-2 mt-7 overflow-hidden">

                <div className="mb-10">
                    <span className="text-3xl font-semibold">Configurações</span>
                </div>
                


                {/* Dados */}

                <container className="w-full h-full flex flex-col gap-y-10 ml-16">

                    {/* Enviar Foto */}

                    <form action="" method="" className="">
                        <div className="flex items-center gap-18">
                        <span className="text-xl">Foto de Perfil</span>
                            <label className="p-2 w-42 rounded-xl border-solid border-black border-1 cursor-pointer shadow-lg text-center" style={{ background: "#F0B49B" }} htmlFor="image"> Selecionar arquivo
                                <input className="hidden" nome="image" type="file" id="image" />
                            </label>
                        </div>
                    </form>

                    {/* Dados conta */}

                    <form action='' method='post' className="flex flex-col gap-y-5 text-xl">
                        <div className="w-5/12 flex items-center">
                            <div className="w-full">
                                <span>Nome</span>
                            </div>
                           
                            <label className="">
                                <input className="p-2 w-42 rounded-xl border-solid border-black border-1 outline-none shadow-lg" style={{ background: "#F0B49B" }} nome="name" type="text" />
                                
                            </label>
                        </div>

                        <div className="w-5/12 flex items-center">
                            <div className="w-full">
                                <span>Username</span>
                            </div>
                            
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black border-1 outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="username" type="text" />
                                
                            </label>
                        </div>

                        <div className="w-5/12 flex items-center">
                            <div className="w-full">
                               <span>E-mail</span> 
                            </div>
                          
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black border-1 outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="email" type="text" />
                                
                            </label>
                        </div>

                        <div className="w-5/12 flex items-center">
                            <div className="w-full">
                                <span>Senha</span>
                            </div>
                            
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black border-1 outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="password" type="password" />
                                
                            </label>
                        </div>

                        <div className="w-5/12 flex items-center">
                            <div className="w-full">
                                <span>Confirmar senha</span>
                            </div>
                           
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black border-1 outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="password" type="password" />
                                
                            </label>
                        </div>
                    </form>

                    {/* Modos */}

                    <div className="">
                        <div className="">
                            <span>Modo Escuro</span>
                            <select name="darkMode" id="darkMode">
                                <option value="system">Padrão do Sistema</option>
                                <option value="on">Habilitado</option>
                                <option value="off">Desabilitado</option>
                            </select>
                        </div>

                        <div className="">
                            <span>Alto Contraste</span>
                            <select name="contraste" id="contraste">
                                <option value="on">Habilitado</option>
                                <option value="off">Desabilitado</option>
                            </select>
                        </div>
                    </div>

                    {/* Logout */}

                    <div className="">
                        <div className="">
                            <IoIosLogOut></IoIosLogOut>
                            <div className="">
                                <Link to={'/#'}>Sair</Link>
                            </div>
                        </div>

                        <div className="">
                            <BsTrash3></BsTrash3>
                            <div className="">
                                <Link to={'/#'}>Excluir minha conta</Link>
                            </div>
                        </div>
                    </div>
                </container>

            </main>

        </div>
    )
}

export default Configuracao;