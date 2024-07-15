const Komp7 = () => {
  let sk = 34;
  const patikrintiSkHandler = () => {
    if (sk > 10) {
      alert("skaičius didesnis už 10");
    } else {
      alert("skaičius mažesnis arba lygus 10");
    }
  };
  return (
    <div>
      <h2>Komp7</h2>
      <button onClick={patikrintiSkHandler}>Patikrinti skaičių</button>
    </div>
  );
};

export default Komp7;
