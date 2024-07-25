import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <h1>Dalykai apie API&apos;s</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/forum">Posts</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </nav>
  )
}

export default Navbar
