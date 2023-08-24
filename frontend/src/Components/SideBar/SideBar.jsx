import { BsBook } from "react-icons/bs";
import { PiSword } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import Logo from "../Logo";
import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const [button, setButton] = useState();

  const toggleButton = (type) => {
    setButton(type);
  };

  return (
    <aside
      className="h-screen w-52 p-5 fixed top-0 flex flex-col items-start justify-center shadow-lg"
      style={{ background: "#EDD8FF" }}
    >
      <header className="w-full xl:mt-3 laptop:-mb-8 mb-20">
        <Logo className="absolute -top-4 -left-20 scale-50" />
      </header>

      <nav className="flex flex-col flex-auto justify-center w-full">
        <button
          className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${button == "materiais" ? "bg-white/50" : ""}`}
          style={{ transition: "150ms ease-in" }}
          onClick={() => toggleButton("materiais")}
        >
          <span className="inline-flex items-center gap-5">
            <BsBook className="relative text-3xl">materiais</BsBook>
            <span className="text-lg">Materiais</span>
          </span>
        </button>

        <button
          className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${button == "perfil" ? "bg-white/50" : ""}`}
          style={{ transition: "150ms ease-in" }}
          onClick={() => toggleButton("perfil")}
        >
          <span className="inline-flex items-center gap-5">
            <AiOutlineUser className="relative text-3xl">perfil</AiOutlineUser>
            <span className="text-lg">Perfil</span>
          </span>
        </button>

        <button
          className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${button == "desafios" ? "bg-white/50" : ""}`}
          style={{ transition: "150ms ease-in" }}
          onClick={() => toggleButton("desafios")}
        >
          <span className="inline-flex items-center gap-5">
            <PiSword className="relative text-3xl">desafios</PiSword>
            <span className="text-lg">Desafios</span>
          </span>
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50"
          style={{ transition: "150ms ease-in" }}
        >
          <span className="inline-flex items-center gap-5">
            <CiCircleMore className="relative text-3xl">mais</CiCircleMore>
            <span className="text-lg">Mais</span>
          </span>
        </button>
      </nav>
    </aside>
  );
}
