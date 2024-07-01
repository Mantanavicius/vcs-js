const recipes = document.querySelectorAll(".recipe");
let selectedRecipe = recipes[1];
const slider = document.querySelector("#range");
const sliderOutput = document.querySelector("#range-output");
const recipeOutput = document.getElementById("recipe-output");

for (let recipe of recipes) {
  recipe.addEventListener("click", selectRecipe);
}

function selectRecipe() {
  const selectedMark = document.createElement("div");
  selectedMark.classList.add("selected");

  const existingMark = selectedRecipe.querySelector(".selected");

  selectedRecipe.removeChild(existingMark);
  selectedRecipe = this;
  selectedRecipe.appendChild(selectedMark);
  showRecipe(selectedRecipe);
}

function setValue() {
  sliderOutput.innerText = slider.value;
  sliderOutput.style.left =
    ((1.065 * slider.clientWidth) / slider.max) * (slider.value - 1) + "px";
  showRecipe(selectedRecipe);
}

document.addEventListener("DOMContentLoaded", setValue());
slider.addEventListener("input", setValue);

function showRecipe() {
  switch ([...recipes].indexOf(selectedRecipe)) {
    case 0:
      recipeOutput.innerHTML = `
      <li>Vištienos krūtinėlės: <span class='amount'>${
        250 * slider.value
      } g</span></li>
      <li>Salotos: <span class='amount'>${1 * slider.value} vnt.</span></li>
      <li>Garstyčių-medaus padažo: <span class='amount'>${
        2 * slider.value
      } šaukšteliai</span></li>
      <li>Citrinų sulčių: <span class='amount'>${
        10 * slider.value
      } ml</span></li>
      `;
      break;
    case 1:
      recipeOutput.innerHTML = `
      <li>Miltų: <span class='amount'>${250 * slider.value} g</span></li>
      <li>Kiaušinių: <span class='amount'>${1 * slider.value} vnt.</span></li>
      <li>Mėlynių: <span class='amount'>${50 * slider.value} g</span></li>
      <li>Cukraus: <span class='amount'>${
        1 * slider.value
      } šaukštelių</span></li>
      `;
      break;
    case 2:
      recipeOutput.innerHTML = `
      <li>Makaronų: <span class='amount'>${250 * slider.value} g</span></li>
      <li>Jautienos faršo: <span class='amount'>${
        250 * slider.value
      } g</span></li>
      <li>Pomidorų pastos: <span class='amount'>${
        100 * slider.value
      } g</span></li>
      <li>Tarkuoto sūrio: <span class='amount'>${
        75 * slider.value
      } g</span></li>
      `;
      break;
  }
}
