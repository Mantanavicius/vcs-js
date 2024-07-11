const Komp1 = () => {
  let studentas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    mokykla: "VCS",
    vidurkis: 8.5,
    kursas: "JS",
  };
  return (
    <div className="student-details">
      <h2>Studento informacija</h2>
      <p>
        <strong>Studentas:</strong> {studentas.vardas} {studentas.pavarde}
      </p>
      <p><strong>Mokosi:</strong> {studentas.mokykla}</p>
      <p><strong>Vidurkis:</strong> {studentas.vidurkis}</p>
      <p><strong>Kursas:</strong> {studentas.kursas}</p>
    </div>
  );
};

export default Komp1;
