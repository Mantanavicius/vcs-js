import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="dark">
      <div className="footer-wrapper container column">
        <div className="top">
          <div className="apie">
            <img
              src="src/assets/logo.svg"
              alt="logo"
            />
            <p>
              Mes esame strategų ir skaitmeninių inovatorių komanda, suvienyta
              siekiant meistriškumo ir pilnatvės.
            </p>
          </div>
          <div className="puslapiai">
            <h5>Puslapiai</h5>
            <ul>
              <li>
                <NavLink to="/">Pagrindinis</NavLink>
              </li>
              <li>
                <NavLink to="/apie-mus">Apie mus</NavLink>
              </li>
              <li>
                <NavLink to="/kontaktai">Kontaktai</NavLink>
              </li>
              <li>
                <NavLink to="/portfelis">Portfolio</NavLink>
              </li>
            </ul>
          </div>
          <div className="strapsniai">
            <h5>Strapsniai</h5>
            <ul>
              <li>
                <a href="">Stiliaus gidas kas tai?</a>
              </li>
              <li>
                <a href="">Kokie pulapiai yra būtini jūsų svetainei?</a>
              </li>
              <li>
                <a href="">Licencijos: Kas Jos Reikšmė ir Kodėl Tai Svarbu</a>
              </li>
              <li>
                <a href="">Kaip Sekti Naujoves ir Pakeitimus?</a>
              </li>
              <li>
                <a href="">Klaidos puslapis 404, kam jis reikalingas?</a>
              </li>
              <li>
                <a href="">Kaip susikurti saugų slaptažodį?</a>
              </li>
            </ul>
          </div>
          <div className="prenumeruoti">
            <h5>Prenumeruokite naujienas</h5>
            <div className="input-container">
              <input
                type="email"
                placeholder="Įveskite savo el. paštą čia"
                className="light"
              />
              <button className="dark">Prenumeruoti</button>
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="teises">
            <h5>Autoriaus teisės priklauso</h5>
            <p>Dizainas: VCS+IV</p>
          </div>
          <div className="susisiekite">
            <h5>Susisiekite</h5>
            <a href="tel:+37012345745">+370 123 45 745</a>
          </div>
          <div className="adresas">
            <h5>Adresas</h5>
            <p>Vytauto gatvė 10A, Kaunas</p>
          </div>
          <div className="socials">
            <a href=""><img src="src/assets/fb.svg" alt="facebook" /></a>
            <a href=""><img src="src/assets/insta.svg" alt="instagram" /></a>
            <a href=""><img src="src/assets/linkedin.svg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
