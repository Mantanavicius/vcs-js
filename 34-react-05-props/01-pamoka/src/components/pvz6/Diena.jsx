const Diena = (props) => {
  const arGera = () => {
    if (props.temp > 22) {
      return "Gera diena";
    } else {
      return "Bloga diena";
    }
  };
  return (
    <div>
      <h3>Dienos temperatūra: {props.temp}&deg;</h3>
      <p>{arGera()}</p>
    </div>
  );
};

export default Diena;
