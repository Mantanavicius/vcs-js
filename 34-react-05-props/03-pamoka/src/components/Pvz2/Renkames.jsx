import { useState } from "react";
import ProgramavimoKalba from "./ProgramavimoKalba";

const Renkames = () => {
  const [kalba, setKalba] = useState("Kol kas nieko");
  const gautosInfoHandler = (gautaInfo) => {
    setKalba(gautaInfo);
  };
  const tikrinimas = () => {
    if (kalba === "JavaScript") {
      return "Jėga";
    } else if (kalba === "C#") {
      return "Rimtuolis";
    } else if (kalba === "PHP") {
      return "Nemirštanti";
    } else {
      return "";
    }
  };
  return (
    <div>
      <h2>Renkamės programavimo kalbą</h2>
      <ProgramavimoKalba issiuntimas={gautosInfoHandler} />
      <p>Jūs pasirinkote: {kalba}</p>
      {tikrinimas() !== "" && <p>{tikrinimas()}</p>}
    </div>
  );
};

export default Renkames;
