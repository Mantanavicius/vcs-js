import { NavLink } from "react-router-dom";
import "./PortfolioItem.css";

const PortfolioItem = () => {
  return (
    <section className="debesu-sprendimai">
      <div className="container column light">
        <div className="hero-img">
          <img
            src="../src/assets/cloud-hero.png"
            alt="cloud solutions"
          />
          <div className="about-work flex">
            <div className="about-item dark">
              <h5>Kategorija:</h5>
              <p>Debesų sprendimas</p>
            </div>
            <div className="about-item dark">
              <h5>Klientas:</h5>
              <p>BrightMedia Solutions</p>
            </div>
            <div className="about-item dark">
              <h5>Data:</h5>
              <p>Rugpjūčio 23, 2023</p>
            </div>
            <div className="about-item dark">
              <h5>Vieta:</h5>
              <p>489 Deport Road, Midland</p>
            </div>
          </div>
        </div>
        <div className="description column">
          <div className="description-item column">
            <h5>01. Problema</h5>
            <p>
              Kai mūsų pasirinkimo galia yra nevaržoma ir niekas negali mums
              trukdyti daryti to, kas mums labiausiai patinka, kiekvienas
              malonumas turėtų būti pasveikintas, o kiekvienas skausmas
              vengiamas. Bet tam tikromis aplinkybėmis ir dėl pareigų arba
              verslo įsipareigojimų dažnai gali atsitikti, kad malonumai turi
              būti atstumti, o nepatogumai priimami. Todėl išmintingas žmogus
              visada laikosi šio pasirinkimo principo: jis atsisako malonumų,
              siekdamas kitų didesnių malonumų, arba jis pakelia skausmus, kad
              išvengtų dar blogesnių skausmų.
            </p>
          </div>
          <div className="description-item column">
            <h5>02. Sprendimas</h5>
            <p>
              Kartais, dėl tam tikrų aplinkybių ir pareigų, nutiks, kad
              malonumai turi būti atmesti, o nepatogumai priimami. Todėl
              išmintingas žmogus yra priverstas pasirinkti, kad jis arba
              pasiekia didesnius malonumus atmetęs mažesnius arba iškelia
              skausmus, kad išvengtų blogesnių.
            </p>
            <p>
              Vienas, kuris vengia skausmo, kuris nesuteikia jokio rezultatinio
              malonumo. varginantis fizinis pratimas.
              <br />
              Vienas, kuris vengia skausmo, kuris nesuteikia jokio rezultato.
              <br />
              kuris iš mūsų kada nors imasi varginamo.
              <br />
              Atsisako paties malonumo, nes tai yra.
            </p>
          </div>
          <div className="description-item column">
            <h5>03. Rezultatai</h5>
            <p>
              Nes tai skausmas, bet dėl to, kad kartais atsiranda aplinkybių,
              kuriuose vargas ir skausmas gali jam suteikti didelį malonumą.
              Paimkime trivialų pavyzdį: kuris iš mūsų imasi varginančių fizinio
              pratimo, išskyrus norą gauti iš to kokios nors naudos? Bet kas
              turi teisę priekaištauti žmogui, kuris pasirenka mėgautis
              malonumu, neturinčiu nemalonios pasekmės, arba tam, kuris vengia
              skausmo, kuris nesuteikia jokio rezultatinio malonumo?
            </p>
            <p>
              Kai mūsų pasirinkimo galia yra nevaržoma ir kai niekas mums negali
              trukdyti daryti to, kas mums labiausiai patinka, kiekvienas
              malonumas yra pasveikintinas, o kiekvienas skausmas vengiamas. Bet
              tam tikromis aplinkybėmis ir dėl pareigų arba verslo
              įsipareigojimų dažnai gali atsitikti, kad malonumai turi būti
              atstumti, o nepatogumai priimami. Todėl išmintingas žmogus visada
              laikosi šio pasirinkimo principo: jis atsisako malonumų, siekdamas
              kitų didesnių malonumų, arba jis pakelia skausmus, kad išvengtų
              dar blogesnių skausmų.
            </p>
          </div>
          <div className="project-images column">
            <div className="top flex">
              <img
                src="../src/assets/foto-1.png"
                alt="figure"
              />
              <img
                src="../src/assets/foto-2.png"
                alt="figure"
              />
              <img
                src="../src/assets/foto-3.png"
                alt="figure"
              />
            </div>
            <h2>Naujausi projektai</h2>
            <div className="bot flex">
              <div className="darbas">
                <img
                  src="../src/assets/d1.png"
                  alt="artsy photo"
                />
                <h4>Tinklalapių vartotojo sąsajos dizainas</h4>
                <p>Kūrybinis vartotojo sąsajos dizainas</p>
              </div>
              <div className="darbas linked">
                <NavLink to="/debesu-sprendimas">
                  <img
                    src="../src/assets/arrow.svg"
                    alt="arrow"
                  />
                </NavLink>
                <img
                  src="../src/assets/d2.png"
                  alt="artsy photo"
                />
                <h4>Kurti skaitmeninę strategiją</h4>
                <p>Socialinių tinklų Marketingas</p>
              </div>
              <div className="darbas">
                <img
                  src="../src/assets/d3.png"
                  alt="artsy photo"
                />
                <h4>Vartotojo sąsajos dizainas</h4>
                <p>Kūrybinis logotipo atnaujinimas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItem;
