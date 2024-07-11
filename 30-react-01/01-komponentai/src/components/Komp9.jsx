// susikurkite ir prijunkite stiliaus failą
// prekių skiltį ir prekių blokelius sustiliuokite,
// pvz kad prekių bloko antraštė būtų per vidurį,
// būtų sudėti paddings, margins ir pan,
// o patys prekių blokeliai būtų 2, 3 ar 4 eilėje
import "./Komp9.css";
const Komp9 = () => {
  let prekes = [
    { id: 1, pavadinimas: "Tusinukas", kaina: 2.5, kiekis: 283 },
    { id: 2, pavadinimas: "Flomasteriai", kaina: 3, kiekis: 103 },
    { id: 3, pavadinimas: "Sasiuvinys", kaina: 1.2, kiekis: 401 },
    { id: 4, pavadinimas: "Obuoliai", kaina: 2.2, kiekis: 231 },
    { id: 5, pavadinimas: "Kriauses", kaina: 2.1, kiekis: 74 },
  ];

  // turite prekių objektų masyvą, visus turimus duomenis
  // atvaizduokite return dalyje

  return (
    <div className="prekiu-wrapper">
      <h2>Prekės</h2>
      <div className="prekiu-list">
        {/* šį blokelį (prekes-blokas) kartokite tiek kartų
            kiek turite prekių masyve ir į atitinkamas vietas
            sudėkite reikiamą informaciją */}
        <div className="prekes-blokas">
          <h3>Prekės pavadinimas: {prekes[0].pavadinimas}</h3>
          <p>Prekė kainuoja: kaina {prekes[0].kaina} €</p>
          <p>Jos turime: vnt_kiekis {prekes[0].kiekis} vnt.</p>
        </div>
        <div className="prekes-blokas">
          <h3>Prekės pavadinimas: {prekes[1].pavadinimas}</h3>
          <p>Prekė kainuoja: kaina {prekes[1].kaina} €</p>
          <p>Jos turime: vnt_kiekis {prekes[1].kiekis} vnt.</p>
        </div>
        <div className="prekes-blokas">
          <h3>Prekės pavadinimas: {prekes[2].pavadinimas}</h3>
          <p>Prekė kainuoja: kaina {prekes[2].kaina} €</p>
          <p>Jos turime: vnt_kiekis {prekes[2].kiekis} vnt.</p>
        </div>
        <div className="prekes-blokas">
          <h3>Prekės pavadinimas: {prekes[3].pavadinimas}</h3>
          <p>Prekė kainuoja: kaina {prekes[3].kaina} €</p>
          <p>Jos turime: vnt_kiekis {prekes[3].kiekis} vnt.</p>
        </div>
        <div className="prekes-blokas">
          <h3>Prekės pavadinimas: {prekes[4].pavadinimas}</h3>
          <p>Prekė kainuoja: kaina {prekes[4].kaina} €</p>
          <p>Jos turime: vnt_kiekis {prekes[4].kiekis} vnt.</p>
        </div>
      </div>
    </div>
  );
};

export default Komp9;
