import { useState } from "react";
import PrekeNauja from "./PrekeNauja";
import PrekesVisos from "./PrekesVisos";

const PrekesWrapper = () => {
  const [prekes, setPrekes] = useState([]);
  const handlePridejimas = (naujaPreke) => {
    // setPrekes([...prekes, naujaPreke]);
    setPrekes([naujaPreke, ...prekes]);
  };
  return (
    <div>
      <h2>Prekės</h2>
      <PrekeNauja pridejimas={handlePridejimas} />
      <PrekesVisos data={prekes} />
    </div>
  );
};

export default PrekesWrapper;
