import "./App.css";
import EinaPrieLentos from "./components/EinaPrieLentos";
import GeriausiasMedis from "./components/GeriausiasMedis";
import Laimejimas from "./components/Laimejimas";
import Sansas from "./components/Sansas";
import Skaiciai from "./components/Skaiciai";
import Tikrinimai from "./components/Tikrinimai";

function App() {
  return (
    <>
      <Laimejimas />
      <Sansas />
      <Tikrinimai />
      <GeriausiasMedis />
      <Skaiciai />
      <EinaPrieLentos />
    </>
  );
}

export default App;
