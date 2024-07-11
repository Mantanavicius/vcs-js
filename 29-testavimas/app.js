document.querySelector("button").addEventListener("click", () => {
  const vardas = document.querySelector("#vardas").value;
  const pavarde = document.querySelector("#pavarde").value;
  const p = document.createElement("p");
  p.innerText = `Jus esate ${vardas} ${pavarde}`;
  document.body.appendChild(p);
});
