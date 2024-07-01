let calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", () => {
  let employeeCount = document.getElementById("employee-count").valueAsNumber;
  let loavesPerEmployee = document.getElementById(
    "loaves-per-employee"
  ).valueAsNumber;
  let orderCount = document.getElementById("order-count").valueAsNumber;
  let price = document.getElementById("loaf-price").valueAsNumber;
  let cost = document.getElementById("loaf-cost").valueAsNumber;

  let kepyklaTotal = employeeCount * loavesPerEmployee;
  let arPavyks = kepyklaTotal >= orderCount;
  let totalPrice = orderCount * price;
  let totalCost = orderCount * cost;

  let results = document.getElementById("results");
  results.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti: </strong> ${kepyklaTotal}</p>`;
  results.innerHTML += `<p><strong>Reikia pagaminti: </strong> ${orderCount}</p>`;
  results.innerHTML += `<p><strong>Ar spės pagaminti? </strong> ${
    arPavyks ? "Taip" : "Ne"
  }</p>`;
  results.innerHTML += `<p><strong>Užsakymo kaina: </strong> ${totalPrice}</p>`;
  results.innerHTML += `<p><strong>Užsakymo savikaina kepyklai: </strong> ${totalCost}</p>`;
});

let inputs = document.querySelectorAll("input");

for (let input of inputs) {
  input.addEventListener("keyup", (e) => {
    let inputValue = e.target.valueAsNumber;
    if (inputValue < 0) {
      e.target.classList.add("error");
      e.target.nextElementSibling.classList.add("show");
    } else {
      e.target.classList.remove("error");
      e.target.nextElementSibling.classList.remove("show");
    }
  });
  let style = input.style;
  input.addEventListener("focus", (e) => {
    e.target.previousElementSibling.style.fontWeight = 900;
    e.target.style.background = "rgba(0,125,255,0.1)";
  });
  input.addEventListener("focusout", (e) => {
    e.target.previousElementSibling.style.fontWeight = 400;
    e.target.style = style;
  });
}

let labels = document.querySelectorAll("label");

labels.forEach((label) => {
  tempHold = "";
  label.addEventListener("mouseover", (e) => {
    tempHold = e.target.innerText;
    e.target.style.fontStyle = "italic";
    switch (e.target) {
      case labels[0]:
        e.target.innerText = "Įveskite kepykloje dirbančių darbuotojų kiekį";
        break;
      case labels[1]:
        e.target.innerText =
          "Kiek vienas darbuotojas galėtų iškepti kepalų per darbo dieną";
        break;
      case labels[2]:
        e.target.innerText = "Kiek kepalų užsakymų gavo kepykla tai dienai";
        break;
      case labels[3]:
        e.target.innerText = "Kokia yra vieno kepalo kaina pirkėjui";
        break;
      case labels[4]:
        e.target.innerText = "Kiek kepyklai kainuoja pagaminti 1 kepalą";
        break;
    }
  });
  label.addEventListener("mouseleave", (e) => {
    e.target.innerText = tempHold;
    e.target.style.fontStyle = "normal";
  });
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("employee-count").valueAsNumber = 0;
  document.getElementById("loaves-per-employee").valueAsNumber = 0;
  document.getElementById("order-count").valueAsNumber = 0;
  document.getElementById("results").innerHTML = "<p>Kol kas nieko nėra. </p>";
});
