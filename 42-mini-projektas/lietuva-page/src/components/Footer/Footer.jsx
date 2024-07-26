import { NavLink } from "react-router-dom";
import Nav from "../Header/Nav/Nav";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="socials">
          <NavLink className="footer-logo">
            <img
              src="src/assets/Vector.svg"
              alt="Keliauk kartu"
            />
          </NavLink>
          <h5>Sekite mus</h5>
          <div className="socials-bubbles">
            <a href="">
                <img
                  src="src/assets/FaceBook.svg"
                  alt="facebook"
                />
            </a>
            <a href="">
                <img
                  src="src/assets/Twitter.svg"
                  alt="twitter"
                />
            </a>
            <a href="">
                <img
                  src="src/assets/Linkedin.svg"
                  alt="LinkedIn"
                />
            </a>
            <a href="">
                <img
                  src="src/assets/Instagram.svg"
                  alt="instagram"
                />
            </a>
          </div>
        </div>
        <div className="nav-contact">
            <div className="navigation">
              <h3>Navigacija</h3>
              <Nav />
            </div>
            <div className="contacts">
              <h3>Kontaktai</h3>
              <p>UAB &quot;Keliauk kartu&quot;</p>
              <p>Girininkų g. 58, Linkuva</p>
              <p>
                <a href="tel:861234567">Tel. nr.: 861234567</a>
              </p>
            </div>
        </div>
      </div>
      <div className="copyright">Copyright 2022 Keliauk kartu</div>
    </footer>
  );
};

export default Footer;
