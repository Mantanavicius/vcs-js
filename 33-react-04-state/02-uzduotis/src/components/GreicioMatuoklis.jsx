import { useState } from "react";

const GreicioMatuoklis = () => {
  const [greitis, setGreitis] = useState(0);
  const greitisHandler = (change) => {
    if (change === 0 || greitis + change < 0) {
      setGreitis(0);
    } else {
      setGreitis(greitis + change);
    }
  };
  const greitisStatusHandler = () => {
    switch (true) {
      case greitis >= 300:
        return "Tikriausiai skrendate";
      case greitis >= 200:
        return "Tikriausiai važiuojate trasoje";
      case greitis >= 150:
        return "Tikriausiai viršijate greitį";
      case greitis >= 130:
        return "Tikriausiai važiuojate automagistrale";
      case greitis >= 110:
        return "Tikriausiai važiuojate greitkeliu";
      case greitis >= 90:
        return "Tikriausiai važiuojate užmiesčio keliais";
      case greitis >= 50:
        return "Tikriausiai važiuojate mieto ribose";
      case greitis >= 25:
        return "Lėtai važiuojate";
      case greitis >= 10:
        return "Po truputį riedate";
      case greitis === 0:
        return "Esate sustoję";
    }
  };
  return (
    <div>
      <h2>Greičio matuoklis</h2>
      <p>Dabartinis greitis: {greitis} km/h</p>
      <button onClick={() => greitisHandler(-25)}>-25 km/h</button>
      <button onClick={() => greitisHandler(-10)}>-10 km/h</button>
      <button onClick={() => greitisHandler(0)}>0 km/h</button>
      <button onClick={() => greitisHandler(10)}>+10 km/h</button>
      <button onClick={() => greitisHandler(25)}>+25 km/h</button>
      <p>Šiuo metu: {greitisStatusHandler()}</p>
    </div>
  );
};

export default GreicioMatuoklis;
