import { NavLink, useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <header
      className={`header-wrapper ${
        location.pathname === "/" ? "dark" : "light"
      }`}>
      <div className="container">
        <NavLink to="/">
          <img
            src={
              location.pathname === "/"
                ? "src/assets/logo.svg"
                : "src/assets/logo-dark.svg"
            }
            alt="logo"
          />
        </NavLink>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
