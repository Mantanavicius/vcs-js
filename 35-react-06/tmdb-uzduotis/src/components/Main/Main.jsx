import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import PropTypes from "prop-types";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const API_KEY = "53c258bb52d305146e19a71e58aa2cc5";
const BASE_URL = "https://api.themoviedb.org/3";

const Main = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [genres, setGenres] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
          params: { api_key: API_KEY },
        });
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let endpoint, params;

        if (filter === "favorites") {
          const filteredFavorites = favorites.filter((movie) =>
            searchTerm ? movie.title.toLowerCase().includes(searchTerm.toLowerCase()) : true
          ).filter((movie) =>
            selectedGenreId ? movie.genre_ids.includes(selectedGenreId) : true
          );
          setMovies(filteredFavorites);
          return;
        }

        params = {
          api_key: API_KEY,
          with_genres: selectedGenreId,
        };

        if (searchTerm) {
          endpoint = `${BASE_URL}/search/movie`;
          params.query = searchTerm;
        } else if (selectedGenreId) {
          endpoint = `${BASE_URL}/discover/movie`;
        } else {
          endpoint = `${BASE_URL}/movie/popular`;
        }

        const response = await axios.get(endpoint, { params });
        const filteredMovies = response.data.results
          .filter((movie) =>
            selectedGenreId ? movie.genre_ids.includes(selectedGenreId) : true
          )
          .slice(0, 10);
        setMovies(filteredMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [searchTerm, selectedGenreId, filter, favorites]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (movie) => favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const getGenreNames = (genreIds) =>
    genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .join(", ");

  const heading =
    filter === "favorites"
      ? `Favorite Movies${selectedGenreId ? ` (${genres.find((g) => g.id === selectedGenreId)?.name} Movies)` : ""}`
      : searchTerm
      ? `Search Results${selectedGenreId ? ` (${genres.find((g) => g.id === selectedGenreId)?.name} Movies)` : ""}`
      : `Popular Movies${selectedGenreId ? ` (${genres.find((g) => g.id === selectedGenreId)?.name} Movies)` : ""}`;

  return (
    <main className="main-container">
      <div className="genre-buttons">
        <div className="tabs">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
            All Movies
          </button>
          <button className={filter === "favorites" ? "active" : ""} onClick={() => setFilter("favorites")}>
            Favorites
          </button>
        </div>
        <div className="genre-list">
          <button className={`genre-button ${selectedGenreId === "" ? "active" : ""}`} onClick={() => setSelectedGenreId("")}>
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`genre-button ${selectedGenreId === genre.id ? "active" : ""}`}
              onClick={() => setSelectedGenreId(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      <div className="movie-list">
        <h2>{heading}</h2>
        {movies.length === 0 ? (
          <p>No movies found matching your search and genre filters.</p>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <div className="movie-image-container">
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : "https://via.placeholder.com/200x300"}
                    alt={movie.title}
                  />
                  <button className="favorite-button" onClick={() => toggleFavorite(movie)}>
                    {isFavorite(movie) ? <MdFavorite /> : <MdFavoriteBorder />}
                  </button>
                </div>
                <div>
                  <h3>{movie.title}</h3>
                  <p>
                    <strong>Release Date:</strong> {movie.release_date}
                  </p>
                  <p>
                    <strong>Genres:</strong> {getGenreNames(movie.genre_ids)}
                  </p>
                  <p>{movie.overview}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

Main.propTypes = {
  searchTerm: PropTypes.string,
};

export default Main;
