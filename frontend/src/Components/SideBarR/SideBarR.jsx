import { AiOutlineUser, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import "../SideBarR/SideBarR.css";
import Logo from "../Logo";
import { useState } from "react";

export default function SideBar() {
  const [button, setButton] = useState();

  const toggleButton = (type) => {
    setButton(type);
  };

  return (
    <div>

      <aside
        className="hidden h-screen w-16 p-5 fixed top-0 flex-col items-start justify-center shadow-lg"
        style={{ background: "#E5E9F9" }}
      >
        <header className="w-full xl:mt-3 laptop:-mb-8 mb-20">
          <Logo
            isResponsive={true}
            className="absolute -top-4 -left-20 scale-50"
          />
        </header>

        <nav className="flex flex-col flex-auto justify-center w-full -mt-40">
          <button
            className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${
              button == "perfil" ? "bg-white/50" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() => toggleButton("perfil")}
          >
            <span className="inline-flex items-center gap-5">
              <AiOutlineUser className="relative text-3xl">
                Perfil
              </AiOutlineUser>
            </span>
          </button>

          <button
            className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${
              button == "desempenho" ? "bg-white/50" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() => toggleButton("desempenho")}
          >
            <span className="inline-flex items-center gap-5">
              <BsGraphUp className="relative text-3xl">Desempenho</BsGraphUp>
            </span>
          </button>

          <button
            className={`h-24 w-full rounded-lg px-0 text-left leading-none hover:bg-white/50 ${
              button == "config" ? "bg-white/50" : ""
            }`}
            style={{ transition: "150ms ease-in" }}
            onClick={() => toggleButton("config")}
          >
            <span className="inline-flex items-center gap-5">
              <IoSettingsOutline className="relative text-3xl">
                Configurações
              </IoSettingsOutline>
            </span>
          </button>
        </nav>
      </aside>

      <div className="">

        {/* menu-bar */}
        <button className="self-start items-center m-4 bg-transparent text-white border-0">
          <AiOutlineMenu className="" />
          <span>Menu</span>
        </button>

        {/* menu-mobile */}
        {/* <nav className="menu-mobile-active">
          <button>
            <span>
              <AiOutlineClose className="" />
            </span>
          </button>

          <button>
            <span>
              <AiOutlineUser className="" />
              <span className="">Perfil</span>
            </span>
          </button>

          <button>
            <span>
              <BsGraphUp className="" />
              <span className="">Desempenho</span>
            </span>
          </button>

          <button>
            <span>
              <IoSettingsOutline className="" />
              <span className="">Configurações</span>
            </span>
          </button>
        </nav> */}
      </div>

      
    </div>
  );
}