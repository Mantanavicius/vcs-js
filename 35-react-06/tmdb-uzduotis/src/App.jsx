import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Header searchTerm={searchTermHandler} />
      <Main searchTerm={searchTerm} />
    </>
  );
}

export default App;
