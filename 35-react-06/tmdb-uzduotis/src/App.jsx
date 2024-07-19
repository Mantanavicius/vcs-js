import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (searchTerm) => {
    if (searchTerm.length > 1) {
      setSearchTerm(searchTerm);
    }
  };

  const searchForSingleChar = (singleChar) => {
    setSearchTerm(singleChar);
  };

  return (
    <>
      <Header
        searchTerm={searchTermHandler}
        searchForSingleChar={searchForSingleChar}
      />
      <Main searchTerm={searchTerm} />
    </>
  );
}

export default App;
