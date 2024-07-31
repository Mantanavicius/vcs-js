import { NavLink } from "react-router-dom";
import "./Portfelis.css";

const Portfelis = () => {
  return (
    <>
      <section className="portfelis">
        <div className="container column light">
          <div className="hero-text dark flex">
            <h2>Mūsų Portfelis</h2>
          </div>
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
              <div className="darbas">
                <img
                  src="src/assets/d5.png"
                  alt="artsy photo"
                />
                <h4>Grafinis dizainas</h4>
                <p>Grafinis dizainas</p>
              </div>
            </div>
            <div className="darbai-right">
              <div className="darbas linked">
                <NavLink to='debesu-sprendimas'>
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
              <div className="darbas">
                <img
                  src="src/assets/d6.png"
                  alt="artsy photo"
                />
                <h4>Vartotojo sąsajos dizainas</h4>
                <p>Kūrybinis logotipo atnaujinimas</p>
              </div>
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

export default Portfelis;
