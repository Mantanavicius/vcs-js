import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Error from "./components/Error/Error";
import ApieMus from "./components/ApieMus/ApieMus";
import Kontaktai from "./components/Kontaktai/Kontaktai";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
        errorElement: <Error />,
      },
      {
        path: "apie-mus",
        element: <ApieMus />,
        errorElement: <Error />,
      },
      {
        path: "kontaktai",
        element: <Kontaktai />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
