const ProgramavimoKalba = (props) => {
  const rinktisHandler = (e) => props.issiuntimas(e.target.textContent);
  return (
    <div>
      <button onClick={rinktisHandler}>JavaScript</button>
      <button onClick={rinktisHandler}>C#</button>
      <button onClick={rinktisHandler}>PHP</button>
    </div>
  );
};

export default ProgramavimoKalba;
