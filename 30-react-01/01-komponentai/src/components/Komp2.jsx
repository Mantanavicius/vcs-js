import { useRef, useState } from "react";

const Komp2 = () => {
  const inputRef = useRef();
  const [someText, setSomeText] = useState("");
  const inputHandler = () => {
    setSomeText(inputRef.current.value);
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={inputHandler}>Pateikti</button>
      <p>{someText}</p>
    </div>
  );
};

export default Komp2;
