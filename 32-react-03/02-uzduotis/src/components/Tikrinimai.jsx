const Tikrinimai = () => {
    let randomNum = Math.floor(Math.random() * 100 + 1);

  const isEven = () =>
    randomNum % 2 === 0 ? alert("lyginis") : alert("nelyginis");

  const isMoreThanThirty = () =>
    randomNum > 30 ? alert("Didesnis nei 30") : alert("Mažesnis arba lygus 30");

  const isPrime = () => {
    for (let i = 2; i < randomNum; i++) {
      if (randomNum % i === 0) {
        alert("Nėra pirminis");
        break;
      } else {
        alert("Pirminis");
        break;
      }
    }
  };

  return (
    <div>
      <h2>Tikrinimai</h2>
      <p>Skaičius {randomNum}</p>
      <button onClick={isEven}>Ar lyginis?</button>
      <button onClick={isMoreThanThirty}>Ar didesnis nei 30?</button>
      <button onClick={isPrime}>Ar pirminis?</button>
    </div>
  );
};

export default Tikrinimai;
