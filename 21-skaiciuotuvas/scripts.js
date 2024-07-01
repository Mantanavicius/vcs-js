let firstNumber = 0;
let secondNumber = 0;
let action = "";
let answer = 0;

let input = document.getElementById("calc-input");
let calculationSpan = document.getElementById("calculation");

let history = [];

function onNumberClick(number) {
  input.value += number;
}

function onActionClick(clickedAction) {
  if (clickedAction === "sq") {
    if (input.value !== "") {
      firstNumber = parseFloat(input.value);
      action = clickedAction;
      calculateAnswer();
      input.value = `${firstNumber}²`;
      calculationSpan.innerText = `${firstNumber}²`;
      addToHistory();
    }
  } else if (clickedAction === "sqrt") {
    if (input.value !== "") {
      firstNumber = parseFloat(input.value);
      if (firstNumber >= 0) {
        action = clickedAction;
        calculateAnswer();
        input.value = `√${firstNumber}`;
        calculationSpan.innerText = `√${firstNumber}`;
        addToHistory();
      } else {
        input.value = "Error";
      }
    }
  } else {
    if (!action) {
      input.value += " " + clickedAction + " ";
      action = clickedAction;
    } else if (answer) {
      firstNumber = answer;
      input.value = `${firstNumber} ${clickedAction} `;
      action = clickedAction;
      answer = 0;
    } else {
      input.value = input.value.replace(action, clickedAction);
      action = clickedAction;
    }
  }
}

function onCountClick() {
  if (action !== "sq" && action !== "sqrt") {
    let splitted = input.value.split(" ");
    firstNumber = parseFloat(splitted[0]);
    action = splitted[1];
    secondNumber = parseFloat(splitted[2]);
    calculateAnswer();
    input.value = answer;
    calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;
    addToHistory();
  } else {
    calculateAnswer();
    input.value = answer;
    calculationSpan.innerText =
      action === "sq" ? `${firstNumber}²` : `√${firstNumber}`;
    addToHistory();
  }
}

function calculateAnswer() {
  switch (action) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "x":
      answer = firstNumber * secondNumber;
      break;
    case "/":
      answer = firstNumber / secondNumber;
      break;
    case "sq":
      answer = firstNumber ** 2;
      break;
    case "sqrt":
      answer = Math.sqrt(firstNumber);
      break;
  }
}

function onCleanClick() {
  firstNumber = 0;
  secondNumber = 0;
  action = "";
  answer = 0;
  input.value = "";
  calculationSpan.innerText = "";
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };

  history.push(historyItem);

  if (history.length > 5) {
    history.shift();
  }

  let formatted = history.map((x) => {
    if (x.action === "sq" || x.action === "sqrt") {
      return `<p>${x.firstNumber} ${x.action === "sq" ? "²" : "√"} = ${
        x.answer
      }</p>`;
    } else {
      return `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`;
    }
  });
  historyBlock.innerHTML = formatted.join("");

  if (history.length > 0) {
    document.querySelector("#emptyHistory").style.display = "none";
    clearHistoryBtn.style.display = "block";
  }
}

let historyBtn = document.getElementById("show-history");
let historyBlock = document.querySelector(".calculator .history-items");
let clearHistoryBtn = document.querySelector("#clearHistory");
let historyOpen = false;

function toggleHistory() {
  if (history.length === 0) {
    document.querySelector("#emptyHistory").style.display = "block";
  } else if (!historyOpen) {
    historyBtn.innerText = "Slėpti istoriją";
    historyBlock.style.display = "block";
    historyOpen = true;
    document.querySelector("#emptyHistory").style.display = "none";
    clearHistoryBtn.style.display = "block";
  } else {
    historyBtn.innerText = "Rodyti istoriją";
    historyBlock.style.display = "none";
    historyOpen = false;
  }
}
function clearHistory() {
  history = [];
  historyBlock.innerHTML = "";
  clearHistoryBtn.style.display = "none";
  calculationSpan.innerText = "";
  document.querySelector("#emptyHistory").style.display = "block";
  input.value = "";
}
function backspace() {
  input.value = input.value.slice(0, -1);
}
