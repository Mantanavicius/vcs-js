const TrysSkaiciai = () => {
  let num1 = 18;
  let num2 = 27;
  let num3 = -46;
  const returnNums = () => (
    <p>
      {num1}, {num2}, {num3}
    </p>
  );
  const biggestNum = () => Math.max(num1, num2, num3);
  const numSum = () => num1 + num2 + num3;
  return (
    <>
      <h2>Trys skaičiai</h2>
      {returnNums()}
      <p>Didžiausias skaičius yra: {biggestNum()}</p>
      <p>Skaičių suma yra lygi: {numSum()}</p>
    </>
  );
};

export default TrysSkaiciai;
