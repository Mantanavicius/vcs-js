import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero dark">
        <div className="container column">
          <img
            src="src/assets/hero-deco.png"
            alt="deco"
            id="hero-deco"
          />
          <div className="hero-text">
            <h2>
              Pasiruošę pakelti <span className="ot">savo verslo augimą</span> į
              kitą lygį?
            </h2>
            <p>
              Išbandykite nemokamą bandomąją versiją ir keliaukite į naują
              verslo lygį kartu su mumis!
            </p>
            <button className="btn-long">
              <div className="deco"></div>
              Išbandykite nemokamai
            </button>
          </div>
          <div className="pasitiki column ot">
            <h5>Mumis pasitiki pirmaujantys prekės ženklai</h5>
            <div className="brands flex">
              <img
                src="src/assets/client1.svg"
                alt="Mindfulness"
              />
              <img
                src="src/assets/client2.svg"
                alt="Leafe"
              />
              <img
                src="src/assets/client3.svg"
                alt="Automation"
              />
              <img
                src="src/assets/client4.svg"
                alt="Greenish"
              />
            </div>
          </div>
        </div>
        <img
          src="src/assets/elipsis-photo.svg"
          alt="elipsis office photo"
          id="hero-elipsis"
        />
      </section>
      <section className="paslaugos light">
        <div className="container column">
          <h4 className="ot">Mūsų Paslaugos</h4>
          <h2>Paslaugos, kurios turės didelį poveikį jūsų verslui</h2>
          <div className="cards flex">
            <div className="card column radius dark">
              <img
                src="src/assets/icon1.svg"
                alt="service icon"
              />
              <h6>Turinio Marketingas</h6>
              <p>
                Mūsų specialistai kuria įtraukiantį turinį, kuris iškarto patiks
                jūsų auditorijai ir skatins natūralų srautą.
              </p>
            </div>
            <div className="card column radius">
              <img
                src="src/assets/icon2.svg"
                alt="service icon"
              />
              <h6>Grafinis Dizainas</h6>
              <p>
                Pasinaudokite vizualinio pasakojimo galia su mūsų ekspertų
                grafinio dizaino paslaugomis, pritaikytomis kūrybiškam jūsų
                prekės ženklo kilimui ir dėmesio pritraukimui.
              </p>
            </div>
            <div className="card column radius">
              <img
                src="src/assets/icon3.svg"
                alt="service icon"
              />
              <h6>Skaitmeninis Marketingas </h6>
              <p>
                Pakelkite savo prekės ženklą internete su mūsų duomenimis
                paremtomis skaitmeninio marketingo strategijomis. Nuo SEO ir
                turinio rinkodaros
              </p>
            </div>
            <div className="card column radius">
              <img
                src="src/assets/icon4.svg"
                alt="service icon"
              />
              <h6>Tinklalapių Dizainas</h6>
              <p>
                Mes specializuojamės kuriant vizualiai įspūdingas, naudotojui
                patrauklias interneto svetaines, kurios atitinka jūsų prekės
                identitetą ir teikia išskirtinę patirtį.
              </p>
            </div>
            <div className="card column radius">
              <img
                src="src/assets/icon5.svg"
                alt="service icon"
              />
              <h6>IT konsultacijos</h6>
              <p>
                IT konsultacija, tai paslaugų teikimo praktika, kurioje teikiame
                patarimus ir įgyvendinimo paslaugas, susijusias su informacinių
                technologijų sritimi.
              </p>
            </div>
            <div className="card column radius">
              <img
                src="src/assets/icon6.svg"
                alt="service icon"
              />
              <h6>Prekės ženklo identitetas</h6>
              <p>
                Tai apima unikalios ir atpažįstamos tapatybės kūrimą, kuri
                išskiria prekės ženklą iš konkurentų bei atitinka tikslinę
                auditoriją.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="apie-mus dark">
        <div className="container">
          <div className="images">
            <img
              src="src/assets/img1.png"
              alt=""
            />
            <img
              src="src/assets/img2.png"
              alt=""
            />
            <img
              src="src/assets/img3.png"
              alt=""
            />
          </div>
          <div className="text column">
            <h4 className="ot">Apie mus</h4>
            <h2>Pagrindinė misija slypinti už visų mūsų darbų</h2>
            <p>
              Sukurti technologijų sprendimus, kurie transformuoja ir praturtina
              verslo veiklą..
            </p>
            <div className="stats flex">
              <div className="stat column">
                <h2 className="ot">330 +</h2>
                <p>Verslams padėta</p>
              </div>
              <div className="stat column">
                <h2 className="ot">230 +</h2>
                <p>Sugeneruota pajamų</p>
              </div>
            </div>
            <button className="btn-long">
              <div className="deco"></div>
              Išbandykite nemokamai
            </button>
          </div>
        </div>
      </section>
      <section className="procesai-wrapper light">
        <div className="container column">
          <h4 className="ot">Procesas</h4>
          <h2>Procesas, kuris skatina pažangą</h2>
          <div className="procesai flex">
            <div className="procesas column">
              <div className="top flex">
                <img
                  src="src/assets/proc1.svg"
                  alt=""
                />
                <h4>
                  Idėjų
                  <br />
                  generavimas
                </h4>
              </div>
              <p className="p-small">
                Ideacijos procesas yra esminė fazė dizaino procese, kurioje
                vyksta kūrybinis mąstymas ir idėjų generavimas.
              </p>
              <img
                src="src/assets/proc-deco1.svg"
                alt=""
              />
            </div>
            <div className="procesas column">
              <div className="top flex">
                <img
                  src="src/assets/proc2.svg"
                  alt=""
                />
                <h4>Tyrimai</h4>
              </div>
              <p className="p-small">
                Tyrimai yra kritiška dizaino proceso dalis, padedanti
                dizaineriams suprasti problemą.
              </p>
              <img
                src="src/assets/proc-deco1.svg"
                alt=""
              />
            </div>
            <div className="procesas column">
              <div className="top flex">
                <img
                  src="src/assets/proc3.svg"
                  alt=""
                />
                <h4>Kūryba</h4>
              </div>
              <p className="p-small">
                Dizaino kūrimo procesas apima keletą pagrindinių žingsnių,
                siekiant užtikrinti aiškumą, efektyvumą ir sėkmingą
                įgyvendinimą.
              </p>
              <img
                src="src/assets/proc-deco1.svg"
                alt=""
              />
            </div>
            <div className="procesas column">
              <div className="top flex">
                <img
                  src="src/assets/proc4.svg"
                  alt=""
                />
                <h4>Testavimas</h4>
              </div>
              <p className="p-small">
                Testavimas yra esminė dizaino proceso stadija, užtikrinanti, kad
                produktas ar sistema atitiktų nustatytus reikalavimus.
              </p>
              <img
                src="src/assets/proc-deco3.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="darbai light">
        <div className="container column">
          <h2>Naujausi darbai</h2>
          <div className="darbai-wrapper">
            <div className="darbai-left">
              <div className="darbas">
                <img
                  src="src/assets/d1.png"
                  alt="artsy photo"
                />
                <h4>Tinklalapių vartotojo sąsajos dizainas</h4>
                <p>Kūrybinis vartotojo sąsajos dizainas</p>
              </div>
              <div className="darbas">
                <img
                  src="src/assets/d3.png"
                  alt="artsy photo"
                />
                <h4>Vartotojo sąsajos dizainas</h4>
                <p>Kūrybinis logotipo atnaujinimas</p>
              </div>
            </div>
            <div className="darbai-right">
              <button className="btn-long dark">
                <div className="deco"></div>
                Išbandykite nemokamai
              </button>
              <div className="darbas linked">
                <NavLink to="/debesu-sprendimas">
                  <img
                    src="src/assets/arrow.svg"
                    alt="arrow"
                  />
                </NavLink>
                <img
                  src="src/assets/d2.png"
                  alt="artsy photo"
                />
                <h4>Kurti skaitmeninę strategiją</h4>
                <p>Socialinių tinklų Marketingas</p>
              </div>
              <div className="darbas">
                <img
                  src="src/assets/d4.png"
                  alt="artsy photo"
                />
                <h4>Reklaminių banerių kūrimas</h4>
                <p>Grafinis dizainas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonies">
        <div className="container">
          <div className="user">
            <img
              src="src/assets/user.jpg"
              alt="user picture"
            />
          </div>
          <h6>
            “Patirtis su šia įmone buvo labai teigiama. Verslo augimo paslauga
            buvo ne tik kokybiška, bet ir pritaikyta mūsų poreikiams.
            Komunikacija buvo sklandi, o jų gebėjimas greitai reaguoti į mūsų
            pageidavimus paliko teigiamą įspūdį. ”
          </h6>
          <h5>Laima Varnaitė</h5>
          <p>Kūrybinė vadybininkė, UAB Kreatyva</p>
          <div className="slider-controls">
            <img
              src="src/assets/left.svg"
              alt="arrow left"
            />
            <img
              src="src/assets/right.svg"
              alt="arrow right"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
