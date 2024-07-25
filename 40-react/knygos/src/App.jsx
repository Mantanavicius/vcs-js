import Navbar from "./components/Navbar";
import Knygos from "./components/Knygos";
import BookForm from "./components/BookForm";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Knygos />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
