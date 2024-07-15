const Sansas = () => {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  const arLaimejai = () =>
    randomNum >= 5 ? alert("Sveikiname, laimėjai!") : alert("Nelaimėjote :(");
  return (
    <div>
      <h2>Šansas</h2>
      <button onClick={arLaimejai}>Ar laimėjai?</button>
    </div>
  );
};

export default Sansas;
