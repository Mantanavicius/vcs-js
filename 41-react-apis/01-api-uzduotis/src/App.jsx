import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Forum from "./components/Forum";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/forum"
                element={<Forum />}
              />
              <Route
                path="/forum/:id"
                element={<PostDetails />}
              />
              <Route
                path="/gallery"
                element={<Gallery />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
