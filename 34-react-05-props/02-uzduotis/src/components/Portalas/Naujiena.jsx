const Naujiena = ({ naujiena }) => {
  return (
    <div>
      <h3>{naujiena.pavadinimas}</h3>
      <p>
        Peržiūros:{" "}
        <strong>
          {naujiena.perziuros} {naujiena.perziuros > 1000 ? "( HOT🔥)" : ""}
        </strong>
      </p>
      <p>{naujiena.content}</p>
    </div>
  );
};

export default Naujiena;
