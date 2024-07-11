const ZodzioIlgis = () => {
  let zodis = "troleibusas";
  const wordLength = () => zodis.length;
  return (
    <>
      <h2>Žodis: {zodis}</h2>
      <p>Žodžios ilgis yra: {wordLength()} simboliai</p>
    </>
  );
};

export default ZodzioIlgis;
