import { NavLink } from "react-router-dom";
import "./Header.css";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <NavLink>
          <img
            src="src/assets/Vector.svg"
            alt="Keliauk kartu"
          />
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
