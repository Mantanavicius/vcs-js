import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Error from "./components/Error/Error";
import Home from "./pages/Home/Home";
import ApieMus from "./pages/ApieMus/ApieMus";
import PortfolioItem from "./pages/Portfelis/PortfolioItem/PortfolioItem";
import Portfelis from "./pages/Portfelis/Portfelis";
import Kontaktai from "./pages/Kontaktai/Kontaktai";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apie-mus",
        element: <ApieMus />,
      },
      {
        path: "portfelis",
        element: <Portfelis />,
      },
      {
        path: "portfelis/debesu-sprendimas",
        element: <PortfolioItem />,
      },
      {
        path: "kontaktai",
        element: <Kontaktai />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
