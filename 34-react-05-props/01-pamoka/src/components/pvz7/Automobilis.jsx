const Automobilis = (props) => {
  //   let gamintojas = props.auto.gamintojas;
  //   let modelis = props.auto.modelis;
  let { gamintojas, modelis } = props.auto;
  return (
    <div>
      <h3>
        {gamintojas} {modelis}
      </h3>
    </div>
  );
};

export default Automobilis;
