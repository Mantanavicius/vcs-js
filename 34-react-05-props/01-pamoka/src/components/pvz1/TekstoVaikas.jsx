import PropTypes from "prop-types";

TekstoVaikas.propTypes = {
  tekstas: PropTypes.string,
};

const TekstoVaikas = (props) => {
  //   console.log(props);
  const patikrinimas = () => {
    if (
      props.tekstas &&
      props.tekstas.split("").filter((r) => r === "a").length > 0
    ) {
      return 'Tekste yra "a" raidžių';
    } else {
      return 'Tekste nėra "a" raidžių';
    }
  };
  return (
    <div>
      <p>Gautas tekstas: {props.tekstas}</p>
      <p>Teksto ilgis: {props?.tekstas?.length}</p>
      <p>{patikrinimas()}</p>
    </div>
  );
};

export default TekstoVaikas;
