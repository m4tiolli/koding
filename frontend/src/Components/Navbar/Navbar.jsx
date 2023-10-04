import { useState } from "react";
import "./Navbar.css";

const   Navbar = () => {
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
      <nav className="nav">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={`menu ${menu_class}`}>
        <p>asdsadasddasdsadd</p>
      </div>
    </div>
  );
};

export default Navbar;