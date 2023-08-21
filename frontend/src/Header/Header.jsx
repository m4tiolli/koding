import Logo from "../assets/Logo";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa"

export default function Header() {

    const [isResponsive, setResponsive] = useState()

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth < 700);
        };

        handleResize(); // Set initial state

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex justify-between items-center absolute top-0 w-11/12 pt-2">
            <Logo />
            <div className="flex w-3/5 md:w-2/5 justify-between h-8 md:h-12">
                <Link to={"/login"} className="flex items-center justify-center bg-[#F1E0FF] h-full rounded-xl shadow-md text-cinza text-md md:text-xl hover:opacity-70 active:translate-y-1 active:shadow-xs px-2">{!isResponsive ? <button>Entrar</button> : <FaUserAlt />}</Link>
                <Link to={"/criar-conta"} className="flex items-center justify-center bg-[#F4BA84] w-fit h-full rounded-lg shadow-md text-cinza text-md md:text-xl hover:opacity-70 active:translate-y-1 active:shadow-xs px-2 md:px-4"><button>Criar Conta</button></Link>
            </div>
        </div>
    )

}