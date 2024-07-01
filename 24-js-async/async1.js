// const getTodos = (resourse) => {
//     return new Promise((resolve,reject)=>{
//         const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     // console.log(request, request.readyState);
//     /*
//     Fazes:
//     0 - UNSENT - kai paruošiama užklausa
//     1 - OPENED - kai panaudojame open()
//     2 - HEADERS_RECEIVED - kai panaudojame send()
//     3 - LOADING - siunčiami duomenys
//     4 - DONE - kai baigė siųsti duomenis
//     */

//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       resolve(data)
//     } else if(request.readyState === 4){
//       reject('Error getting resource')
//     }
//   });

//   request.open("GET", "todos.json");
//   request.send();
// })
// }
// getTodos('./todos.json')
// .then(data => console.log('promise resolved',data))
// .catch(err => console.log('promise rejected', err))

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("some data");
//     reject("some error");
//   });
// };

// getSomething()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("todos.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// const getTodos = async () => {
//   const response = await fetch("todos.json");

//   if (response.status !== 200) {
//     throw new Error("cannot fetch the data");
//   }
//   const data = await response.json();
//   return data;
// };

// getTodos()
//   .then((data) => console.log("resolved", data))
//   .catch((err) => console.log("rejected", err.message));

// 1
function one(callback) {
  setTimeout(callback, 2000);
}
one(console.log("one"));

// 2
const two = () => {
  return new Promise((resolve, reject) => {
    resolve("two");
    reject("error");
  });
};
two()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// 3
const three = (numbers, callback) => {
  for (let number of numbers) {
    callback(number);
  }
};
three([1, 2, 3, 4, 5, 6], (number) =>
  console.log(number % 2 === 0 ? "lyginis" : "nelyginis")
);
// 4
const patikrinkZodzioIlgi = (masyvas, callback) => {
  for (let word of masyvas) {
    callback(word);
  }
};
patikrinkZodzioIlgi(["labas", "aguona", "data", "karve"], (word) =>
  console.log(word.length)
);
// 5
const five = (objectsArray, callback) => {
  for (object of objectsArray) {
    callback(object);
  }
};
five(
  [
    { vardas: "Tadas", amzius: 21, lytis: "vyras", studentas: true },
    { vardas: "Simona", amzius: 24, lytis: "moteris", studentas: true },
    { vardas: "Modestas", amzius: 26, lytis: "vyras", studentas: false },
  ],
  (object) => {
    console.log({ vardas: object.vardas, amzius: object.amzius });
  }
);
// 6
const six = (isUserLogedIn) => {
  return new Promise((resolve, reject) => {
    isUserLogedIn
      ? resolve("Vartotojas yra prisijungęs")
      : reject("Neprisijungta");
  });
};
six(true)
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err));
six(false)
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err));

// 7

const seven = async (age) => {
  if (typeof age !== "number") {
    throw new Error("Pateiktas amžius nėra skaičius");
  }
  if (age > 18) {
    return "vartotojas gali laikyti vairuotojo egzaminą";
  } else {
    throw new Error("Jūsų amžius turi būti daugiau nei 18");
  }
};

seven("21")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
seven(17)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
seven(21)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
