console.log(document.getElementById("pirmas"));

let pirmoPirmas = document.getElementById("pirmo-pirmas");
console.log(pirmoPirmas);

console.log(document.querySelector("#antras article"));
console.log(document.querySelectorAll("#antras article"));

console.log(document.querySelector(".straipsnio-paragrafas"));
console.log(document.querySelectorAll(".straipsnio-paragrafas"));

let antroPirmasStr = document.querySelector("#antras article");
console.log(antroPirmasStr.querySelector("p"));

let medis = document.getElementById("pirmo-antras");
console.log("medis:", medis);
console.log("sekantis:", medis.nextElementSibling);
console.log("prieš:", medis.previousElementSibling);
console.log("tevinis:", medis.parentElement);

document.querySelector("#pirmo-pirmas").textContent = "new text";
console.log(document.querySelector("#pirmo-pirmas").textContent);

document.querySelector("#trecio-trecias span").textContent =
  "Kebabas su cesnkiniu padazu";
document.querySelector("#trecio-pirmas").textContent = "Skauda galva";

let ketvirtas = document.getElementById("ketvirtas");
ketvirtas.innerHTML += "<p class='raudonas'> naujas paragrafas 2</p>";
ketvirtas.innerHTML += "<p class='zalias'> naujas paragrafas 3</p>";
ketvirtas.style.backgroundColor = "crimson";

let paragrafai = document.querySelectorAll("#ketvirtas p");
paragrafai.forEach((p) => console.log(p.innerText));

let pirmasBtn = document.getElementById("pirmas-btn");
let antrasBtn = document.getElementById("antras-btn");

pirmasBtn.addEventListener("click", function (event) {
  alert("clicked");
});

antrasBtn.addEventListener("click", (e) => {
  e.target.disabled = true;
});

let inputas = document.querySelector("#sestas input");
inputas.addEventListener("keyup", (e) => {
  let norimasTekstas = e.target.value;
  document.querySelector("#sestas #norimas-tekstas").innerText = norimasTekstas;
});

let naujasP1 = document.createElement("p");
naujasP1.innerText = "Naujo paragrafo turinys";

let septintas = document.getElementById("septintas");
septintas.appendChild(naujasP1);

let naujasP2 = document.createElement("p");
naujasP2.innerText = "Dar naujesnis paragrafo turinys";
septintas.appendChild(naujasP2);

let naujasBtn = document.createElement("button");
naujasBtn.innerText = "padek savo riebu pirsta ant manes";
septintas.appendChild(naujasBtn);

document.getElementById("pirmo-pirmas").style.color = "red";
document.getElementById("pirmo-pirmas").style.cssText =
  "color:blue; background-color: gray";

naujasBtn.style.borderRadius = "20px";

let astuntas = document.querySelector("#astuntas");

astuntas.classList.add("raudonas", "zalias");
astuntas.classList.remove("zalias");
astuntas.style.border = "1px solid orange";
astuntas.innerText = 'VVV Naktinis mygtukas VVV'
let naujasDiv = document.createElement("div");
naujasDiv.id = "astunto-pirmas";
astuntas.appendChild(naujasDiv);
let divButton = document.createElement("button");
divButton.innerText = "CLICK ME!!!!!";
divButton.classList.add("naktinis");
naujasDiv.appendChild(divButton);
