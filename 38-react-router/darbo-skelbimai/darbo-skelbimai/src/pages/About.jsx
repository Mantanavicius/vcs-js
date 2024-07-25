import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("Mantas");
  if (!user) {
    return (
      <Navigate
        to="/"
        replace={true}
      />
    );
  }
  return (
    <div className="about">
      <h2>Apie mus</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque
        nobis eligendi, quam obcaecati expedita beatae, hic est ab inventore
        pariatur dolor aperiam, distinctio fugit atque odit! Unde atque sunt
        tempora? Praesentium eligendi ut at odit hic itaque voluptatem minus
        reiciendis sequi reprehenderit, excepturi modi dolorem ab ex nisi velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque
        nobis eligendi, quam obcaecati expedita beatae, hic est ab inventore
        pariatur dolor aperiam, distinctio fugit atque odit! Unde atque sunt
        tempora? Praesentium eligendi ut at odit hic itaque voluptatem minus
        reiciendis sequi reprehenderit, excepturi modi dolorem ab ex nisi velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque
        nobis eligendi, quam obcaecati expedita beatae, hic est ab inventore
        pariatur dolor aperiam, distinctio fugit atque odit! Unde atque sunt
        tempora? Praesentium eligendi ut at odit hic itaque voluptatem minus
        reiciendis sequi reprehenderit, excepturi modi dolorem ab ex nisi velit.
      </p>
      <button onClick={() => setUser(null)}>Atsijungti</button>
    </div>
  );
}
