import "./ApieMus.css";

const ApieMus = () => {
  return (
    <div className="apie-mus main">
      <div className="secondary-header">
        <h2>APIE MUS</h2>
      </div>
      <section>
        <div className="text">
          <img
            src="src/assets/double-quotes.svg"
            alt="double quotes"
          />
          <p>
            Kelionių po Lietuvą portalą kuriame tam, kad kiekvienam iš jūsų
            padėtume atrasti naujas, įdomias vietas, geriau pažinti Lietuvą ir
            jos istoriją, pamatyti gražiausias vietas. Norime, kad kuo daugiau
            žmonių keliones po Lietuvą atrastų kaip įdomų laisvalaikio
            praleidimo būdą, jomis paįvairintų savo atostogas, savaitgalius ar
            net ilgesnius vasaros vakarus. Lankytinų vietų žemėlapyje
            tūkstančiai priežasčių keliauti. Portale sau įdomaus randa ir
            populiariausių, madingų vietų ieškotojai, ir ieškantys išskirtinių,
            dar neatrastų vietų. Kelionių maršrutai, patyrusių keliautojų
            pasakojimai ir jų rekomendacijos išsiruošti į kelionę padeda ir
            tiems, kurie neturi laiko ar noro kelionę planuoti savarankiškai.
          </p>
        </div>
        <div className="pic">
            <img
              src="src/assets/about.png"
              alt="Woman holding a map"
            />
            <img
              src="src/assets/about-deco.svg"
              alt="decoration"
              id="about-deco"
            />
        </div>
      </section>
    </div>
  );
};

export default ApieMus;
