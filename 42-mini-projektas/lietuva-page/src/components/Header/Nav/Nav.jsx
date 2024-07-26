import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Pagrindinis</NavLink>
      <NavLink to="apie-mus">Apie mus</NavLink>
      <NavLink to="kontaktai">Kontaktai</NavLink>
    </nav>
  );
};

export default Nav;
