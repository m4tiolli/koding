import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import { Link } from 'react-router-dom';
import './Materiais.css';

const Materiais = () => {

    return (
        <div className="flex h-full w-full dark:bg-darkcinzaclaro bg-materiais">
            <main className="w-full ml-56 mr-2 overflow-hidden">

                {/* Barra de pesquisa */}
                <container className="flex h-64 w-5/12 ml-10 mt-10 items-center justify-center gap-3">
                    <form action="" className="flex rounded-xl w-full items-center justify-center text-white text-xl p-2 bg-[#811CD7] dark:bg-darkpesquisa">
                        <input type="text" className="bg-transparent outline-none text-2xl" />
                        <a href="">
                            <BiSearch className="text-3xl text-white ml-20"></BiSearch>
                        </a>
                    </form>

                    {/* Filtro */}
                    <container className="flex h-10 w-56 space-x-8 items-center justify-center">
                        <button>
                            <BsFilter className="flex items-center justify-center text-4xl text-white rounded-md bg-[#811CD7] dark:bg-darkpesquisa"></BsFilter>
                        </button>
                    </container>

                </container>

                {/* Cards */}

                {/* HTML */}

                <container className="flex flex-col justify-center ml-10 space-y-8">
                    <span className="text-2xl font-semibold dark:text-white">
                        Aprendendo HTML
                    </span>

                    <div className="flex space-x-16 items-center">

                        <Link to={'/aulas'}>
                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                            </div>
                        </Link>

                        <Link to={'/aulas'}>
                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                            </div>
                        </Link>

                        <Link to={'/aulas'}>
                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                            </div>
                        </Link>

                        <Link to={'/aulas'}>
                            <div className="w-72 h-52 rounded-xl" style={{ background: "linear-gradient(108deg, #E87331 0%, #E88D59 100%)" }}>
                            </div>
                        </Link>

                    </div>


                </container>

                {/* CSS */}

                <container className="flex flex-col justify-center ml-10 mt-32 space-y-8">
                    <span className="text-2xl font-semibold dark:text-white">
                        Aprendendo CSS
                    </span>
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
                    <span className="text-2xl font-semibold dark:text-white">
                        Aprendendo JavaSript
                    </span>
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
                    <span className="text-2xl font-semibold dark:text-white">
                        Aprendendo PHP
                    </span>
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