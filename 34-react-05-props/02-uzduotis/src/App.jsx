import "./App.css";
import Pardevejas from "./components/AutoPardavejas/Pardavejas";
import Imone from "./components/Bonusai/Imone";
import HobiuParduotuve from "./components/Deliones/HobiuParduotuve";
import Mokymai from "./components/MokymuInfo/Mokymai";
import Pasaulis from "./components/PasaulioInfo/Pasaulis";
import Kategorija from "./components/Portalas/Kategorija";
import VisosRoles from "./components/Roles/VisosRoles";
import Studentas from "./components/StudentoInfo/Studentas";

function App() {
  return (
    <>
      <Pasaulis />
      <VisosRoles />
      <Imone />
      <Pardevejas />
      <HobiuParduotuve />
      <Studentas />
      <Kategorija />
      <Mokymai />
    </>
  );
}

export default App;
