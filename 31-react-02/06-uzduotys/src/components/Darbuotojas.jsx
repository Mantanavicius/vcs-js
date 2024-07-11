const Darbuotojas = () => {
  const darbuotojas = {
    vardas: "Tadas",
    profesija: "elektrikas",
    atlyginimas: 2000,
    etatas: 1,
    darboStazas: 8,
  };
  const isvisoUzdirbo = () =>
    darbuotojas.atlyginimas * darbuotojas.etatas * darbuotojas.darboStazas * 12;
  const ilgametisDarbuotojas = () =>
    darbuotojas.darboStazas >= 5 ? "Ilgametis" : "Naujokas";
  const arUzdirbaDaugiau = (alga) =>
    alga > darbuotojas.atlyginimas
      ? "Uždirba mažiau"
      : alga < darbuotojas.atlyginimas
      ? "Uždirba daugiau"
      : "Uždirba tiek pat";
  return (
    <div>
      <h2>Darbuotojas</h2>
      <ul>
        <li>Darbuotojas: {darbuotojas.vardas}</li>
        <li>Profesija: {darbuotojas.profesija}</li>
        <li>Atlyginimas: {darbuotojas.atlyginimas} €</li>
        <li>Etatas: {darbuotojas.etatas}</li>
        <li>Darbo stažas: {darbuotojas.darboStazas} metai(-ų)</li>
      </ul>
      <p>
        Per visą profesinį laikotarpį darbuotojas uždirbo: {isvisoUzdirbo()} €
      </p>
      <p>Darbuotojo ilgametiškumo statusas: {ilgametisDarbuotojas()}</p>
      <p>Ar darbuotojas uždirba daugiau negu 1300 €:</p>
      <p>{arUzdirbaDaugiau(1300)}</p>
    </div>
  );
};

export default Darbuotojas;
