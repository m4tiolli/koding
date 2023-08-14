import Logo from "../assets/Logo";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="flex justify-between items-center absolute top-0 w-11/12">
            <Logo />
            <div className="w-1/4 flex justify-evenly h-12">
                <Link to={"/login"} className="flex items-center justify-center bg-[#F1E0FF] w-2/5 h-full rounded-xl shadow-md text-cinza font-bold text-xl hover:opacity-70 active:translate-y-1 active:shadow-lg">Entrar</Link>
                <Link to={"/criar-conta"} className="flex items-center justify-center bg-[#F4BA84] w-2/5 h-full rounded-xl shadow-md text-cinza font-bold text-xl hover:opacity-70 active:translate-y-1 active:shadow-lg">Criar Conta</Link>
            </div>
        </div>
    )
}