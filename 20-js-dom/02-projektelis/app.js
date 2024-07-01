let people = [];

// create variables
const personInput = document.getElementById("vardas");
const pridetiZmonesList = document.getElementById("pridetiZmones");
const placeholders = document.querySelectorAll(".tuscia");
const peoplePaymentInputs = document.querySelector("#zmones-inputs");
// create needed elements

// add people to the list and as an element for user to interact with

const addPerson = function () {
  let li = document.createElement("li");
  li.classList.add("person");
  let personDiv = document.createElement("div");
  personDiv.innerText = personInput.value;
  let personBtn = document.createElement("button");
  personBtn.innerText = "-";
  personBtn.classList.add("removeBtn");
  let alreadyExists = people.some((p) => p.name === personInput.value);
  let error = document.querySelector(".errorExists");
  if (alreadyExists) {
    error.style.display = "block";
  } else if (personInput.value.length > 0 && alreadyExists !== true) {
    // remove placeholder element & error if present
    for (let placeholder of placeholders) {
      placeholder.style.display = "none";
    }
    error.style.display = "none";
    // append the elements
    li.appendChild(personDiv);
    li.appendChild(personBtn);
    pridetiZmonesList.appendChild(li);

    // add person to the list of people
    people.push({ name: personInput.value });
    console.log(people);
    // reset the input
    personInput.value = "";

    personBtn.addEventListener("click", removePerson);
  }
  //add person to payments
  addPersonToPayments();
};
const addPersonToPayments = function () {
  const personPayments = document.createElement("div");
  const personPaymentsInput = document.createElement("input");
  personPaymentsInput.setAttribute("type", "number");
  for (let person of people) {
    personPayments.innerText = person.name;
    peoplePaymentInputs.appendChild(personPayments);
    peoplePaymentInputs.appendChild(personPaymentsInput);
  }
};

// removing people

function removePerson(e) {
  let button = e.target;
  let li = button.parentElement;
  li.remove();

  // Removing the person from the `people` array
  let personName = li.querySelector("div").innerText;
  personName
  people = people.filter((person) => person.name !== personName);
  console.log(people);

  // if no people left, show placeholder
  if (pridetiZmonesList.children.length === 0) {
    document.getElementById("tuscia").style.display = "block";
  }
}
