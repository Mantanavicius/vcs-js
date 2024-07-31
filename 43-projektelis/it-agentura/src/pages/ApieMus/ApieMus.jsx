import "./ApieMus.css";
import {NavLink} from "react-router-dom";

const ApieMus = () => {
  return (
    <>
      <section className="first light">
        <div className="container light column">
          <div className="top dark flex">
            <div className="text">
              <p>Pakelkite verslą į viršų</p>
              <h2>
                Perkelkite <span className="ot">savo verslą</span> į kitą lygį
                su mumis
              </h2>
              <p>
                Išbandykite nemokamą bandomąją versiją ir keliaukite į naują
                verslo lygį kartu su mumis!
              </p>
              <div className="rating-block flex">
                <img
                  src="src/assets/rater.png"
                  alt="rater"
                />
                <div className="rating">
                  <h5>Įvestinta 4.9/5 žvaigždutėmis</h5>
                  <div className="stars flex">
                    <img
                      src="src/assets/star.svg"
                      alt="star"
                    />
                    <img
                      src="src/assets/star.svg"
                      alt="star"
                    />
                    <img
                      src="src/assets/star.svg"
                      alt="star"
                    />
                    <img
                      src="src/assets/star.svg"
                      alt="star"
                    />
                    <img
                      src="src/assets/star.svg"
                      alt="star"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pics">
              <img
                src="src/assets/p1.png"
                alt="people"
              />
              <img
                src="src/assets/p2.png"
                alt="people"
              />
              <img
                src="src/assets/p3.png"
                alt="team"
              />
            </div>
          </div>
          <div className="stats flex">
            <div className="stat">
              <h3>200+</h3>
              <h6>Esame didelė komanda</h6>
              <p>
                Mes didžiuojamės savo talentinga ir įsipareigojusia komanda,
                kuri kartu siekia aukščiausių rezultatų ir nuolat tobulėja.
              </p>
            </div>
            <div className="stat">
              <h3>99%</h3>
              <h6>Grafinis Dizainas</h6>
              <p>
                99% mūsų teikiamų paslaugų sudaro grafinio dizaino darbai,
                užtikrinantys aukštą kokybę ir kūrybiškumą.
              </p>
            </div>
            <div className="stat">
              <h3>1.5M+</h3>
              <h6>Esame didelė komanda</h6>
              <p>
                Mūsų skaitmeninio marketingo paslaugos pasiekia daugiau nei 1,5
                milijono žmonių, užtikrinant platų ir efektyvų poveikį.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="second dark">
        <div className="container">
          <div className="misija column">
            <h4 className="ot">Mūsų misija</h4>
            <h2>Sustiprinti jūsų verslą</h2>
            <p>
              Mūsų tikslas - stiprinti jūsų verslą. Mes siūlome individualų
              požiūrį ir kūrybiškus sprendimus, kurie garantuoja efektyvumą ir
              aukštą kokybę.
            </p>
            <ul className="column">
              <li>
                <p>Prisitaikome prie jūsų unikalių poreikių</p>
              </li>
              <li>
                <p>Kuriame inovatyvias ir pritaikomas strategijas</p>
              </li>
              <li>
                <p>
                  Turime gilų supratimą apie skaitmeninio pasaulio subtilybes
                </p>
              </li>
              <li>
                <p>Bendradarbiaujame su jumis nuo pradžios iki pabaigos.</p>
              </li>
              <li>
                <p>
                  Suteikiame greitus ir į rezultatus orientuotus sprendimus.
                </p>
              </li>
              <li>
                <p>Siūlome tik aukščiausios kokybės paslaugas ir produktus.</p>
              </li>
            </ul>
          </div>
          <div className="pics">
            <img
              src="src/assets/second1.png"
              alt="people"
            />
            <img
              src="src/assets/second2.png"
              alt="office"
            />
            <div className="pokalbiai column">
              <h3>10k</h3>
              <p>Pokalbiai per mėnesį</p>
            </div>
            <div className="projektai column">
              <h3>95+</h3>
              <p>Pabaigtų projektų</p>
            </div>
            <div className="nariai light column">
              <p>Komandos nariai</p>
              <div className="flex">
                <img
                  src="src/assets/n1.png"
                  alt="narys"
                />
                <img
                  src="src/assets/n2.png"
                  alt="narys"
                />
                <img
                  src="src/assets/n3.png"
                  alt="narys"
                />
                <img
                  src="src/assets/n4.png"
                  alt="narys"
                />
                <img
                  src="src/assets/n5.png"
                  alt="narys"
                />
                <img
                  src="src/assets/n6.png"
                  alt="narys"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third light">
        <div className="container column">
          <h2>Mūsų komanda</h2>
          <div className="ppl flex">
            <div className="person">
              <div className="socials">
                <a href=""><img src="src/assets/fb.svg" alt="facebook" /></a>
                <a href=""><img src="src/assets/insta.svg" alt="Instagram" /></a>
                <a href=""><img src="src/assets/linkedin.svg" alt="LinkedIn" /></a>
              </div>
              <img
                src="src/assets/kom1.png"
                alt="Eglė Petrauskaitė"
              />
              <h5>Eglė Petrauskaitė</h5>
              <p>Įkūrėja ir generalinė direktorė</p>
            </div>
            <div className="person">
              <div className="socials">
                <a href=""><img src="src/assets/fb.svg" alt="facebook" /></a>
                <a href=""><img src="src/assets/insta.svg" alt="Instagram" /></a>
                <a href=""><img src="src/assets/linkedin.svg" alt="LinkedIn" /></a>
              </div>
              <img
                src="src/assets/kom2.png"
                alt="Mantas Vaitkus"
              />
              <h5>Mantas Vaitkus</h5>
              <p>Rinkodaros vadovas</p>
            </div>
            <div className="person">
              <div className="socials">
                <a href=""><img src="src/assets/fb.svg" alt="facebook" /></a>
                <a href=""><img src="src/assets/insta.svg" alt="Instagram" /></a>
                <a href=""><img src="src/assets/linkedin.svg" alt="LinkedIn" /></a>
              </div>
              <img
                src="src/assets/kom3.png"
                alt="Aušra Kazlauskienė"
              />
              <h5>Aušra Kazlauskienė</h5>
              <p>Rinkodaros vadovė</p>
            </div>
          </div>
          <div className="pradekime dark">
            <div className="content">
            <h3>Užteks kalbų, pradėkime darbą!</h3>
              <NavLink
                to="/kontaktai"
                className="btn light">
                Susisiekti
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApieMus;
