const Komp3 = () => {
  let pazymiai = [7, 8, 4, 8, 9, 10, 6];
  return (
    <div>
      <p>{pazymiai}</p>
      <p>{pazymiai.join(', ')}</p>
      <p>{pazymiai[5]}</p>
    </div>
  );
};

export default Komp3;
