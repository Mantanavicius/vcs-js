import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Puslapis nerastas.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        suscipit, eligendi soluta quo a adipisci? Deserunt ducimus minima,
        corporis aliquam dolorum laborum facere nisi fugiat sed qui vero
        provident sint?
      </p>
      <p>
        Grįžti į <Link to="/">pradinį puslapį</Link>
      </p>
    </div>
  );
}
