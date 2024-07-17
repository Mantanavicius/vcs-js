import "./App.css";
import CounterTev from "./components/Counter/CounterTev";
import ImoneBendras from "./components/Imone/ImoneBendras";
import KnyguBendras from "./components/Knygos/KnyguBendras";
import ZodziuBendras from "./components/Zodziai/ZodziuBendras";

function App() {
  return (
    <>
      <CounterTev />
      <ZodziuBendras />
      <KnyguBendras />
      <ImoneBendras />
    </>
  );
}

export default App;
