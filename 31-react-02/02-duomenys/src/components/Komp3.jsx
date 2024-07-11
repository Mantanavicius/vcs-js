const Komp3 = () => {
  let medziai = [
    "berzas",
    "uosis",
    "azuolas",
    "pusis",
    "kedras",
    "egle",
    "klevas",
    "obelis",
  ];
  let title = "Medziai musu soduose";
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {medziai.map((medis, i) => <li key={i}>{medis}</li>)}
      </ul>
    </div>
  );
};

export default Komp3;
