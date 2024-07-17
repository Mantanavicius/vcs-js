import Pazymys from "./Pazymys";

const Studentas = () => {
  const studentas = {
    vardas: "Aušra",
    pavarde: "Aušrelytė",
    mokykla: "VCS",
    programa: "JS-fullstack",
  };
  const pazymiai = [8, 3, 10, 9, 4, 8];
  return (
    <div>
      <h2>Studento Info</h2>
      <h3>
        Studentas: {studentas.vardas} {studentas.pavarde}
      </h3>
      <h4>Mokykla: {studentas.mokykla}</h4>
      <h4>Mokymo programa: {studentas.programa}</h4>
      <h3>Pažymiai:</h3>
      {pazymiai.map((p, i) => (
        <Pazymys
          key={i}
          pazymys={p}
        />
      ))}
    </div>
  );
};

export default Studentas;
