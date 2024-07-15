const EinaPrieLentos = () => {
  const studentai = ["Tadas", "Gabriele", "Sandra", "Austėja", "Aurimas"];
  const prieLentosEina = () =>
    alert(studentai[Math.floor(Math.random() * studentai.length)]);
  return (
    <div>
      <h2>Eina prie lentos</h2>
      <ul>
        <strong>Studentai:</strong>
        {studentai.map((stud, i) => (
          <li key={i}>{stud}</li>
        ))}
      </ul>
      <button onClick={prieLentosEina}>Kas eis prie lentos?</button>
    </div>
  );
};

export default EinaPrieLentos;
