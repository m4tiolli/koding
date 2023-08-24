import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import './Materiais.css';
import { useState } from "react";

const Materiais = () => {

    // clicar e abrir
    const [open, setOpen] = useState(false);

    // clicar e sair
    // const button = useRef();
    // const navRef = useRef();

    return (
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>

            {/* Menu */}

            {/* Barra de pesquisa - menu */}

            {/* Conteudo */}

            <main className="w-full ml-56 mr-2 overflow-hidden">



                {/* Barra de pesquisa */}
                <container className="flex h-64 w-5/12 ml-10 mt-10 items-center justify-center gap-3">
                    <form action="" className="flex rounded-xl w-full items-center justify-center text-white text-xl p-2" style={{ background: "#811CD7" }}>
                        <input type="text" className="bg-transparent outline-none text-2xl" />
                        <a href="">
                            <BiSearch className="text-3xl text-white ml-20"></BiSearch>
                        </a>
                    </form>

                    {/* Filtro */}
                    <container className="flex h-10 w-56 space-x-8 items-center justify-center">
                        <button>
                            <BsFilter className="flex items-center justify-center text-4xl text-white rounded-md" style={{ background: "#811CD7" }}></BsFilter>
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

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                        </div>

                    </div>
                </container>

                {/* CSS */}

                <container className="flex flex-col justify-center ml-10 mt-32 space-y-8">
                    <spam className="text-2xl font-semibold">
                        Aprendendo CSS
                    </spam>
                    <div className="flex space-x-16 items-center">

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #1566C4 0%, #438ADD 100%)" }}>
                        </div>

                    </div>
                </container>

                {/* JS */}

                <container className="flex flex-col justify-center ml-10 mt-32 space-y-8">
                    <spam className="text-2xl font-semibold">
                        Aprendendo JavaSript
                    </spam>
                    <div className="flex space-x-16 items-center">

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #F2D01F 0%, #E3BA4F 100%)" }}>
                        </div>

                    </div>
                </container>

                {/* PHP */}

                <container className="flex flex-col justify-center ml-10 mt-32 mb-32 space-y-8">
                    <spam className="text-2xl font-semibold">
                        Aprendendo PHP
                    </spam>
                    <div className="flex space-x-16 items-center">

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)" }}>
                        </div>

                        <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #485BBB 0%, #707EC6 100%)" }}>
                        </div>

                    </div>
                </container>
            </main>

        </div>
    )
}

export default Materiais;