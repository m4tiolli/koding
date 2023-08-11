import Logo from "../assets/Logo";

export default function Header() {
    return (
        <div className="fixed top-0 flex justify-between items-center py-3 w-11/12">
            <Logo />
            <div className="w-1/4 flex justify-evenly h-12">
                <button className="bg-[#F1E0FF] w-2/5 h-full rounded-xl shadow-md text-cinza font-bold text-xl hover:opacity-70 active:translate-y-1 active:shadow-lg">Entrar</button>
                <button className="bg-[#F4BA84] w-2/5 h-full rounded-xl shadow-md text-cinza font-bold text-xl hover:opacity-70 active:translate-y-1 active:shadow-lg">Criar Conta</button>
            </div>
        </div>
    )
}