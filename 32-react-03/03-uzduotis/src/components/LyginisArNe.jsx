const LyginisArNe = () => {
  const isEven = (e) => {
    console.log(e.target.valueAsNumber % 2 === 0 ? "Lyginis" : "Nelyginis");
  };
  return (
    <div>
      <h2>Lyginis ar ne</h2>
      <input
        type="number"
        onChange={isEven}
      />
    </div>
  );
};

export default LyginisArNe;
