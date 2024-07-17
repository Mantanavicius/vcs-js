const Darbuotojas = (props) => {
  const { vardas, pavarde, bonusas } = props.darbuotojas;
  const arGerasBonusas = () => {
    if (bonusas > 100) {
      return "nu, jau kažkas geriau 🔥";
    } else if (0 < bonusas && bonusas <= 100) {
      return "bent ant kebabo užmetė.. 🌯";
    } else {
      return "gaila 🙁";
    }
  };
  return (
    <div>
      <h3>
        Darbuotojas: {vardas} {pavarde}
      </h3>
      <h4>
        Kalėdinis bonusas: {bonusas} € - {arGerasBonusas()}
      </h4>
    </div>
  );
};

export default Darbuotojas;
