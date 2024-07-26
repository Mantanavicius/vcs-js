import { NavLink } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="home main">
      <section className="hero">
        <h1>Atrask Lietuvą iš naujo</h1>
        <h2>Lankytinos vietos Lietuvoje</h2>
        <button>
          <NavLink to="/kontaktai">Susisiekti su mumis</NavLink>
        </button>
        <img
          src="src/assets/Intersect-one.svg"
          alt="decoration"
          id="deco-one"
        />
      </section>
      <section className="ypatingos">
        <img
          src="src/assets/Lithuania.svg"
          alt="Outline of Lithuania"
          id="lithuania"
        />
        <div className="ypatingos-text">
          <img
            src="src/assets/double-quotes.svg"
            alt="double qoutes"
          />
          <p>
            Lankytinos vietos dažnai palieka mums nuostabių ir džiaugsmingų
            prisiminimų. Aplink po visą Lietuvą galima pamatyti daugybe
            pažintinių takų, regioninių parkų. Lietuva dažnai pasižymi savo
            nuostabiais gamtos vietų takais, parkais, visgi tai nėra vienintelės
            vietos kur kiekvienas žmogus yra pilnai laukiamas. Nuo įspūdingų
            muziejų Kauno ar Vilniaus miestuose ar dar kuriame iš Lietuvos
            krašto miestų, iki jūros pakrančių, upių ir ežerų.
          </p>
        </div>
        <div className="card">
          <h4>YPATINGOS LIETUVOS VIETOS</h4>
          <h2>Užutrakio Dvaras</h2>
          <div className="location">
            <img
              src="src/assets/location.svg"
              alt="location icon"
            />
            <h4>TRAKAI</h4>
          </div>
          <p>
            Užutrakio dvaras - dvaras, stovintis prie Galvės ežero, Užutrakyje
            (Trakai). Kraštovaizdžio architektūros draustinis (nuo 1993 m.).
          </p>
          <button className="light-btn">Daugiau apie objektą</button>
          <button className="light-btn">
            <img
              src="src/assets/location-blue.svg"
              alt="location icon"
            />
            <span>žemėlapis</span>
          </button>
          <img
            src="src/assets/trakai.png"
            alt="Užutrakio dvaras"
            id="trakai"
          />
        </div>
      </section>
      <section className="statistics">
        <img
          src="src/assets/Intersect-two.svg"
          alt="decoration"
        />
        <div className="stats-wrapper">
          <div className="text">
            <h2>
              Mes dirbame tam kad jūs gerai praleistumėte laiką keliaudami
              aplink Lietuvą
            </h2>
            <p>Tėvynė, kaip ir mylimoji – žmogui tik viena. - Jaroslav Hašek</p>
          </div>
          <div className="stats">
            <div className="stat">
              <h2>32</h2>
              <h4>Maršrutai pėsčiomis</h4>
              <p>Naujoms patirtims</p>
            </div>
            <div className="stat">
              <h2>412</h2>
              <h4>komandos nariai</h4>
              <p>Dirbantys prie šio projekto</p>
            </div>
            <div className="stat">
              <h2>5</h2>
              <h4>Nacionaliniai parkai</h4>
              <p>Kiekvienam entokultūriniam regionui</p>
            </div>
            <div className="stat">
              <h2>4,142</h2>
              <h4>Lankytinų objektų</h4>
              <p>Po visą Lietuvą</p>
            </div>
          </div>
        </div>
      </section>
      <section className="rekomendacijos">
        <img
          src="src/assets/Intersect-three.svg"
          alt="decoration"
        />
        <div className="places-wrapper">
          <h2>Rekomenduojamos lankytinos vietos</h2>
          <div className="places">
            <div className="img-card">
              <img
                src="src/assets/rec-1.png"
                alt="rekomenduojama vieta"
              />
              <p>Užutrakio Dvaras</p>
            </div>
            <div className="img-card">
              <img
                src="src/assets/rec-2.png"
                alt="rekomenduojama vieta"
              />
              <p>Ventės Ragas</p>
            </div>
            <div className="img-card">
              <img
                src="src/assets/rec-3.png"
                alt="rekomenduojama vieta"
              />
              <p>Velnio Akmuo</p>
            </div>
            <div className="img-card">
              <img
                src="src/assets/rec-4.png"
                alt="rekomenduojama vieta"
              />
              <p>Gedimino Pilis</p>
            </div>
            <div className="img-card">
              <img
                src="src/assets/rec-5.png"
                alt="rekomenduojama vieta"
              />
              <p>Kryžių Kalnas</p>
            </div>
            <div className="img-card">
              <img
                src="src/assets/rec-6.png"
                alt="rekomenduojama vieta"
              />
              <p>Birštono Apžvalgos Bokštas</p>
            </div>
            <div className="img-card">
              <img
                src="src/assets/rec-7.png"
                alt="rekomenduojama vieta"
              />
              <p>Merkinės Piramidė</p>
            </div>
            <div className="img-card">
              <img
                src="src/assets/rec-8.png"
                alt="rekomenduojama vieta"
              />
              <p>Kabantis Lynų Tiltas</p>
            </div>
          </div>
        </div>
        <img
          src="src/assets/Intersect-four.svg"
          alt="decoration"
        />
      </section>
    </div>
  );
};

export default Hero;
