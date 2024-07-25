import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Atsiprašome</h2>
      <p>Toks puslapis neegzistuoja</p>
      <Link to="/">Pradinis</Link>
      
    </div>
  )
}

export default NotFound
