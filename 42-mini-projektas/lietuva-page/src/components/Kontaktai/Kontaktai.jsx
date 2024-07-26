import "./Kontaktai.css";

const Kontaktai = () => {
  return (
    <div className="kontaktai main">
      <div className="secondary-header">
        <h2>KONTAKTAI</h2>
      </div>
      <section className="kontaktai-wrapper">
        <div className="kont-rek-wrapper">
          <div className="kont-rek">
            <div className="kont">
              <h2>Kontaktai</h2>
              <div className="kontaktas">
                <p className="label">- Telefono numeris:</p>
                <div className="icon-contact">
                  <img
                    src="src/assets/phone.svg"
                    alt="phone"
                  />
                  <a
                    href="tel: +37061234567"
                    className="contact">
                    +370 61234567
                  </a>
                </div>
              </div>
              <div className="kontaktas">
                <p className="label">- Elektroninis paštas:</p>
                <div className="icon-contact">
                  <img
                    src="src/assets/envelope.svg"
                    alt="envelope"
                  />
                  <a
                    href="mailto: info@keliaukkartu.lt"
                    className="contact">
                    info@keliaukkartu.lt
                  </a>
                </div>
              </div>
              <div className="kontaktas">
                <p className="label">- Įmonės adresas:</p>
                <div className="icon-contact">
                  <img
                    src="src/assets/pin.svg"
                    alt="pin"
                  />
                  <a
                    href="https://maps.app.goo.gl/LtoHpZdukFAdUNPx7"
                    target="_blank"
                    className="contact">
                    Girininkų g. 58, Linkuva, Pakruojo r., LT-45964, Lietuva
                  </a>
                </div>
              </div>
            </div>
            <div className="rek">
              <h2>Rekvizitai</h2>
              <div className="kontaktas">
                <p className="label">- Įmonės pavadinimas:</p>
                <p className="contact">UAB &quot;Keliaukė Kartu&quot;</p>
              </div>
              <div className="kontaktas">
                <p className="label">- Įmonės kodas:</p>
                <p className="contact">300000001</p>
              </div>
              <div className="kontaktas">
                <p className="label">- PVM mokėtojo kodas:</p>
                <p className="contact">LT115252622541</p>
              </div>
            </div>
          </div>
          <img
            src="src/assets/map.png"
            alt="map"
          />
        </div>
        <form
          onSubmit={() =>
            alert("Dėkojame už jūsų žinutę, netrukus su jumis susisieksime.")
          }>
          <h2>Parašykite mums</h2>
          <label htmlFor="vardas">Vardas</label>
          <input
            type="text"
            id="vardas"
          />
          <label htmlFor="tel">Telefono Nr.</label>
          <input
            type="tel"
            id="tel"
          />
          <label htmlFor="email">Elektroninis paštas</label>
          <input
            type="email"
            id="email"
          />
          <label htmlFor="zinute">Žinutė</label>
          <input
            type="text"
            id="zinute"
          />
          <button type="submit">Siųsti</button>
        </form>
      </section>
    </div>
  );
};

export default Kontaktai;
