import { IoIosLogOut } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";

import SideBar from '../../Components/SideBar/SideBar';
import { Link } from 'react-router-dom';

export default function Configuracao(){

    // const [open, setOpen] = useState(false);

    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>
            
            <SideBar />

            <main className="w-full ml-60 mr-2 mt-7 overflow-hidden">

                <div className="mb-10">
                    <span className="text-3xl font-semibold">Configurações</span>
                </div>
                


                {/* Dados */}

                <container className="w-full h-full flex flex-col gap-y-10 ml-16">

                    {/* Enviar Foto */}

                    <form action="" method="" className="flex gap-x-96">
                        <div className="flex items-center gap-6">
                        <span className="text-lg">Personalizar Avatar</span>
                            <label className="p-2 w-42 rounded-xl border-solid border-black cursor-pointer shadow-lg text-center" style={{ background: "#F0B49B" }} htmlFor="image"> Selecionar arquivo
                                <input className="hidden" nome="image" type="file" id="image" />
                            </label>
                        </div>

                        <div>
                            <button className="bg-green-500 w-auto h-10 p-3 flex items-center rounded-xl shadow-lg text-white" type="submit">Salvar Alterações</button>
                        </div>
                    </form>

                    {/* Dados conta */}

                    <form action='' method='post' className="flex flex-col gap-y-5 text-lg">
                        <div className="w-2/5 flex items-center">
                            <div className="w-full">
                                <span>Nome</span>
                            </div>
                           
                            <label className="">
                                <input className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg" style={{ background: "#F0B49B" }} nome="name" type="text" />
                                
                            </label>
                        </div>

                        <div className="w-2/5 flex items-center">
                            <div className="w-full">
                                <span>Username</span>
                            </div>
                            
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="username" type="text" />
                                
                            </label>
                        </div>

                        <div className="w-2/5 flex items-center">
                            <div className="w-full">
                               <span>E-mail</span> 
                            </div>
                          
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="email" type="email" />
                                
                            </label>
                        </div>

                        <div className="w-2/5 flex items-center">
                            <div className="w-full">
                                <span>Senha</span>
                            </div>
                            
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="password" type="password" />
                                
                            </label>
                        </div>

                        <div className="w-2/5 flex items-center">
                            <div className="w-full">
                                <span>Confirmar senha</span>
                            </div>
                           
                            <label>
                                <input className="p-2 rounded-xl border-solid border-black outline-none shadow-lg" style={{ background: "#F0B49B" }}  nome="password" type="password" />
                                
                            </label>
                        </div>
                    </form>

                    {/* Modos */}

                    <div className="flex flex-col gap-y-5 text-lg">
                        <div className="flex">
                            <div className="w-50">
                                <span>Modo Escuro</span>
                            </div>
                            
                            <select className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer" style={{ background: "#F0B49B" }} name="darkMode" id="darkMode">
                                <option value="system">Padrão do Sistema</option>
                                <option value="on">Habilitado</option>
                                <option value="off">Desabilitado</option>
                            </select>
                        </div>

                        <div className="flex">
                            <div className="w-50">
                                <span>Alto Contraste</span>
                            </div>

                            <select className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer" style={{ background: "#F0B49B" }} name="contraste" id="contraste">
                                <option value="on">Habilitado</option>
                                <option value="off">Desabilitado</option>
                            </select>
                        </div>
                    </div>

                    {/* Logout */}

                    <div className="flex flex-col items-center justify-center py-10 w-96 text-gray-700 gap-3">
                        <div className="flex items-center gap-3 w-full">
                            <IoIosLogOut className="text-2xl"></IoIosLogOut>
                            <div className="text-xl">
                                <Link to={'/#'}>Sair</Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full text-red-600">
                            <BsTrash3 className="text-2xl"></BsTrash3>
                            <div className="text-xl">
                                <Link to={'/#'}>Excluir minha conta</Link>
                            </div>
                        </div>
                    </div>

                    {/* Confirmar excluir */}
                </container>

            </main>

        </div>
    )
}
