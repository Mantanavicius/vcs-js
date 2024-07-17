const CounterMygtukai = (props) => {
  const handleClick = (skaicius) => {
    props.skaicius(skaicius);
  };
  return (
    <div>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(2)}>+2</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  );
};

export default CounterMygtukai;
