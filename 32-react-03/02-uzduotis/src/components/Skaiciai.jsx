const Skaiciai = () => {
  let numbers = [5, 8, 4, 1, 70, 5, 8, -14];
  const numSum = () => alert(numbers.reduce((sum, num) => sum + num, 0));
  const largestNum = () => alert(Math.max(...numbers));
  return (
    <div>
      <h2>Skaičiai</h2>
      <p>Skaičiai: {numbers.join(", ")}</p>
      <button onClick={numSum}>Skaičių suma</button>
      <button onClick={largestNum}>Didžiausias skaičius</button>
    </div>
  );
};

export default Skaiciai;
