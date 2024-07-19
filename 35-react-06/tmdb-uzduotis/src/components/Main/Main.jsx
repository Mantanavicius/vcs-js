import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import PropTypes from "prop-types";

const API_KEY = "53c258bb52d305146e19a71e58aa2cc5";
const BASE_URL = "https://api.themoviedb.org/3";

const Main = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = searchTerm
          ? `${BASE_URL}/search/movie`
          : `${BASE_URL}/movie/popular`;

        const response = await axios.get(endpoint, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            query: searchTerm,
            page: 1,
          },
        });
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        setError("Failed to fetch movies");
      }
    };

    fetchMovies();
  }, [searchTerm]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie-list">
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Main.propTypes = {
  searchTerm: PropTypes.string,
};

export default Main;
