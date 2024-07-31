import { Form } from "react-router-dom";
import "./Kontaktai.css";

const Kontaktai = () => {
  return (
    <>
      <section className="kontaktai container light column">
        <div className="top flex">
          <div className="pasikalbekime">
            <div className="text column">
              <h2>Pasikalbėkime</h2>
              <p>
                Mes bendradarbiaujame su tūkstančiais kūrėjų, verslininkų ir
                tikromis legendomis.
              </p>
            </div>
            <div className="contacts column">
              <div className="contact flex">
                <img
                  src="src/assets/envelope.svg"
                  alt="envelope"
                />
                <div className="contact__text">
                  <h5>Mūsų el. paštas</h5>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </div>
              </div>
              <div className="contact flex">
                <img
                  src="src/assets/phone.svg"
                  alt="phone"
                />
                <div className="contact__text">
                  <h5>Skambinkite mums</h5>
                  <a href="tel:+1234567892">+123 456 7892</a>
                </div>
              </div>
              <div className="contact flex">
                <img
                  src="src/assets/location.svg"
                  alt="location"
                />
                <div className="contact__text">
                  <h5>Raskite mus</h5>
                  <a href="https://maps.app.goo.gl/rMFgCvnMNhpcqVvz7" target="_blank" rel="noreferrer">
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="socials flex">
              <a href="">
                <img
                  src="src/assets/fb-no-bg.svg"
                  alt="facebook"
                />
              </a>
              <a href="">
                <img
                  src="src/assets/insta-no-bg.svg"
                  alt="Instagram"
                />
              </a>
              <a href="">
                <img
                  src="src/assets/linkedin-no-bg.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <Form className="column" onSubmit={(e) => e.preventDefault()}>
            <div className="sender-info flex">
              <div className="left">
                <label
                  htmlFor="vardas"
                  className="column">
                  Vardas
                  <input
                    type="text"
                    name="vardas"
                  />
                </label>
                <label
                  htmlFor="email"
                  className="column">
                  El. paštas
                  <input
                    type="email"
                    name="email"
                  />
                </label>
              </div>
              <div className="right">
                <label
                  htmlFor="pavarde"
                  className="column">
                  Pavardė
                  <input
                    type="text"
                    name="pavarde"
                  />
                </label>
                <label
                  htmlFor="phone"
                  className="column">
                  Telefono Nr.
                  <input
                    type="tel"
                    name="phone"
                  />
                </label>
              </div>
            </div>
            <label
              htmlFor="message"
              className="column">
              Žinutė
              <input
                type="text"
                name="message"
              />
            </label>
            <button className="dark">Siųsti žinutę</button>
          </Form>
        </div>
        <div className="map">
          <img
            src="src/assets/Map.png"
            alt="Map"
          />
        </div>
      </section>
    </>
  );
};

export default Kontaktai;
