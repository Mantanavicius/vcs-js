import "./Navbar.css"
const Navbar = () => {
  const links = [
    { link: "Paslaugos", url: "#paslaugos" },
    { link: "Apie mus", url: "#apie-mus" },
    { link: "Kontaktai", url: "#kontaktai" },
  ];
  return (
    <nav className="navbar-wrapper">
      <h1>Puslapis</h1>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}>{link.link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
