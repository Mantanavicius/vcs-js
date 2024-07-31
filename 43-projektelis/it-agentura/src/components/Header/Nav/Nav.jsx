import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="navigation flex">
      <NavLink to="/">Pradinis</NavLink>
      <NavLink to="apie-mus">Apie mus</NavLink>
      <NavLink to="portfelis">Portfelis</NavLink>
      <NavLink to="kontaktai">Kontaktai</NavLink>
      <NavLink
        to="kontaktai"
        className={`btn ${location.pathname === "/" ? "light" : "dark"}`}>
        Susisiekite
      </NavLink>
    </nav>
  );
};

export default Nav;
