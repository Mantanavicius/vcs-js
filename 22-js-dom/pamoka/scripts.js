let payments = [
  { id: 1, type: "income", amount: 900, when: "2024-04-01 12:38:13" },
  { id: 2, type: "expense", amount: -300, when: "2024-04-03 14:58:52" },
  { id: 3, type: "expense", amount: -38, when: "2024-04-04 12:12:15" },
  { id: 4, type: "expense", amount: -120, when: "2024-04-05 13:31:27" },
  { id: 5, type: "expense", amount: -50, when: "2024-04-06 16:12:46" },
  { id: 6, type: "income", amount: 150, when: "2024-04-07 11:12:11" },
  { id: 7, type: "income", amount: 200, when: "2024-04-08 08:18:10" },
];

function load_data(
  data_wrapper_selector,
  data_array,
  balance_wrapper_selector
) {
  let data_wrapper = document.querySelector(data_wrapper_selector);
  let balance_wrapper = document.querySelector(balance_wrapper_selector);

  for (const item of data_array) {
    data_wrapper.innerHTML += `
        <div class='item-wrapper'>
            <p class="id">ID: ${item.id}</p>
            <p class="type ${item.type}">
                ${item.type === "income" ? "Pajamos" : "Išlaidos"}
            </p>
            <p class="amount ${item.type}">${item.amount} €</p>
            <p class="when">${item.when}</p>
        </div>
    `;
  }
  balance_wrapper.innerHTML = `
    <h3>Galutinis likutis:
        <span class="${
          calculateBalance(data_array) > 0 ? "income" : "expense"
        }">
            ${calculateBalance(data_array)} €
        </span>
    </h3>
    <p>Pajamos:<span class="income">${calculateIncome(data_array)} €</span></p>
    <p>Išlaidos:<span class="expense">${calculateExpense(
      data_array
    )} €</span></p>
  `;
}
load_data(".payments-wrapper", payments, ".balance-wrapper");

function calculateBalance(payment_data) {
  let sum = 0;
  for (const item of payment_data) {
    sum += item.amount;
  }
  return sum;
}

function calculateIncome(payment_data) {
  let sum = 0;
  for (const item of payment_data) {
    if (item.type === "income") {
      sum += item.amount;
    }
  }
  return sum;
}

function calculateExpense(payment_data) {
  return payment_data
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);
}

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const type = amount >= 0 ? "income" : "expense";

    payments.push({
      id: payments.length + 1,
      type,
      amount,
      when: getCurrentDateTime(),
    });

    let dataWrapper = document.querySelector(".payments-wrapper");
    let balanceWrapper = document.querySelector(".balance-wrapper");

    dataWrapper.innerHTML = "";
    balanceWrapper.innerHTML = "";

    load_data(".payments-wrapper", payments, ".balance-wrapper");

    document.getElementById("amount").value = "";
  });

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}