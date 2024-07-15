import "./App.css";
import Begikai from "./components/Begikai";
import GreicioMatuoklis from "./components/GreicioMatuoklis";
import TrysKepyklos from "./components/TrysKepyklos";
import Vistos from "./components/Vistos";
import Zodis from "./components/Zodis";
import Zuikis from "./components/Zuikis";

function App() {
  return (
    <>
      <Zodis />
      <Zuikis />
      <GreicioMatuoklis />
      <Begikai />
      <Vistos />
      <TrysKepyklos />
    </>
  );
}

export default App;
