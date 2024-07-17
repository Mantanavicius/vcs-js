const Mygtukai = (props) => {
  const kavaHandler = () => {
    props.tekstasPasikeite("kava");
  };
  const arbataHandler = () => {
    props.tekstasPasikeite("arbata");
  };
  const vanduoHandler = () => {
    props.tekstasPasikeite("vanduo");
  };
  return (
    <div>
      <button onClick={kavaHandler}>Kava</button>
      <button onClick={arbataHandler}>Arbata</button>
      <button onClick={vanduoHandler}>Vanduo</button>
    </div>
  );
};

export default Mygtukai;
