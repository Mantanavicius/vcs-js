import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error column container dark radius">
      <h1>404</h1>
      <h2>Atrodo įvyko klaida:</h2>
      <h4 className="ot">Šis puslapis neegzistuoja</h4>
      <button className="light">
        <NavLink to="/">Grįžti į pradžią</NavLink>
      </button>
    </div>
  );
};

export default Error;
