async function fetchMovie(query) {
  try {
    const response = await fetch(
      "https://api.tvmaze.com/search/shows?q=" + query
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
}

const input = document.querySelector("input");
const moviesContainer = document.createElement("div");
moviesContainer.className = "movies-container";

function showResults() {
  moviesContainer.innerHTML = "";
  fetchMovie(input.value)
    .then((data) => {
      for (const item of data) {
        const title = item.show.name;
        const year = item.show.premiered
          ? item.show.premiered.slice(0, -6)
          : "N/A";
        const imgLink = item.show.image
          ? item.show.image.medium
          : "https://placehold.co/210x295/EEE/31343C";
        const genres = item.show.genres;
        const summary = item.show.summary;

        const movieDiv = document.createElement("div");
        movieDiv.className = "movie";
        movieDiv.innerHTML = `
    <img src='${imgLink}' alt="${title}" />
    <h3>${title} (${year})</h3>
    <p>Genres: ${genres.join(", ")}</p>
    ${summary}
    `;

        moviesContainer.appendChild(movieDiv);
      }
      document.body.appendChild(moviesContainer);
      input.value = "";
    })
    .catch((e) => console.log(e));
}

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    showResults();
  }
});
document
  .querySelector(".search-bar button")
  .addEventListener("click", showResults);
