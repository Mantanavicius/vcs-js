import TekstoVaikas from "./TekstoVaikas";

const TekstoBendras = () => {
  let vidinisTekstas = "Trecia eilute";
  return (
    <div>
      <h2>Teksto dalykai</h2>
      <TekstoVaikas tekstas="Hai mai fren" />
      <TekstoVaikas tekstas="Number one or number two" />
      <TekstoVaikas tekstas={vidinisTekstas} />
      <TekstoVaikas />
    </div>
  );
};

export default TekstoBendras;
