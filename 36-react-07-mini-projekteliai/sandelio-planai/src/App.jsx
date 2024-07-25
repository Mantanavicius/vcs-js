import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Table from "./components/Table";

function App() {
  const [tab, setTab] = useState(1);
  const tabHandler = (tab) => {
    console.log(tab);
    setTab(tab);
  };

  return (
    <>
      <Menu tab={tabHandler} />
      <Table />
    </>
  );
}

export default App;
