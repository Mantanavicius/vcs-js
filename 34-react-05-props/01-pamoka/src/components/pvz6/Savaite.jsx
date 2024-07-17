import Diena from "./Diena";

const Savaite = () => {
  let temperaturos = [21, 25, 23, 20, 19, 22, 26];
  return (
    <div>
      <h2>Savaitė</h2>
      <div>
        {temperaturos.map((temp, i) => (
          <p key={i}>Dienos temperatūra: {temp}&deg;</p>
        ))}
      </div>
      <div>
        ______________________________
        <Diena temp={temperaturos[0]}/>
        <Diena temp={temperaturos[1]}/>
        <Diena temp={temperaturos[2]}/>
        <Diena temp={temperaturos[3]}/>
        <Diena temp={temperaturos[4]}/>
        <Diena temp={temperaturos[5]}/>
        <Diena temp={temperaturos[6]}/>
      </div>
      <div>
        ______________________________
        {temperaturos.map((temp,i)=><Diena key={i} temp={temp}/>)}
      </div>
    </div>
  );
};

export default Savaite;
