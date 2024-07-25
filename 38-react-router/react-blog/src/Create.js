import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [autorius, setAutorius] = useState("Mantas");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, autorius };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Naujas įrašas</h2>
      <form onSubmit={handleSubmit}>
        <label>Įrašo pavadinimas</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Įrašo tekstas:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Įrašo autorius:</label>
        <select
          value={autorius}
          onChange={(e) => setAutorius(e.target.value)}>
          <option value="Andrius">Andrius</option>
          <option value="Diana">Diana</option>
          <option value="Mantas">Mantas</option>
          <option value="Petras">Petras</option>
        </select>
        <button type="submit">Prideti įrašą</button>
      </form>
    </div>
  );
};

export default Create;
