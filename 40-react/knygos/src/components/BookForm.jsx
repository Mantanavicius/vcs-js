import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { useState } from "react";


const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Knygos pavadinimas"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Autorius"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <input type="submit" value="Prideti knyga" />
        </form>
    );
}

export default BookForm