import Modulis from "./Modulis";

const Mokymai = () => {
  const moduliai = [
    { pavadinimas: "HTML", trukme: 120 },
    { pavadinimas: "CSS", trukme: 240 },
    { pavadinimas: "JavaScript", trukme: 600 },
    { pavadinimas: "React", trukme: 540 },
  ];
  return (
    <div>
      <h2>Mokymų info</h2>
      {moduliai.map((m, i) => (
        <Modulis
          key={i}
          modulis={m}
        />
      ))}
    </div>
  );
};

export default Mokymai;
