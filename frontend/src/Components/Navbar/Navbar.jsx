import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { TbArrowsExchange2 } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("w-0 invisible");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("w-1/2 visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("w-0 invisible");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "10px" }}>
      <nav className="nav dark:bg-darkfundoR">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div
        className={`menu w-full shadow-lg flex flex-col p-4 text-gray-800 ${menu_class}`}
      >
        <div className="flex flex-col mt-20">
          <div className="flex flex-col space-y-5">
            <Link to={"/desempenho"}>
              <span className="inline-flex items-center gap-5">
                <BsGraphUp className="relative text-3xl">desempenho</BsGraphUp>
                <span className="text-lg">Desempenho</span>
              </span>
            </Link>

            <Link to={"/pais/perfil"}>
              <span className="inline-flex items-center gap-5">
                <AiOutlineUser className="relative text-3xl">
                  perfil
                </AiOutlineUser>
                <span className="text-lg">Perfil</span>
              </span>
            </Link>
          </div>

          <Link to={"/pais/selecionar"}>
            <span className="inline-flex items-center gap-5 mt-2 -mb-2">
              <TbArrowsExchange2 className="relative text-3xl">
                alterar criança
              </TbArrowsExchange2>
              <span className="text-lg">Trocar de criança</span>
            </span>
          </Link>

          <div className="flex flex-col space-y-5 mt-5">
            <Link to={"/pais/configuracao"}>
              <span className="inline-flex items-center gap-2 w-full">
                <BiHelpCircle className="relative 2xl:text-3xl text-3xl"></BiHelpCircle>
                <span className="2xl:text-xl text-lg w-3/4">Configurações</span>
              </span>
            </Link>

            <Link to={"/ajuda"}>
              <span className="inline-flex items-center gap-2 w-full">
                <BiHelpCircle className="relative 2xl:text-3xl text-3xl"></BiHelpCircle>
                <span className="2xl:text-lg text-lg w-3/4">
                  Central de Ajuda
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
