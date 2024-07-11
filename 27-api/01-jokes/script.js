async function fetchJokes() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    const joke = await response.json();
    return joke;
  } catch (e) {
    throw e;
  }
}
const p = document.createElement("p");
document.querySelector("button").addEventListener("click", () => {
  fetchJokes()
    .then((data) => {
      p.innerHTML = data.joke;
      document.querySelector("body").appendChild(p);
    })
    .catch((e) => console.log("Klaida: nepridėjote header"));
});
