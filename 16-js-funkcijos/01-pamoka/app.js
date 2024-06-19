// 1
function prog() {
  console.log("Mano vardas Mantas ir man patinka kurti dalykus");
}
prog();
prog();
prog();

// 2
function eilerastis() {
  console.log(
    "Kiški piški,\nGreitakoji,\nPasakyk,\nKur tu nakvoji?\n\n- Prie miškelio,\nPo egle,\nBalto sniego\nPatale."
  );
}
eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();

// 3
function textOne() {
  console.log("text one");
}
function textTwo() {
  console.log("text two");
}
function textThree() {
  console.log("text three");
}
textOne();
textTwo();
textThree();

// 4
function firstLine() {
  console.log("Viena teksto eilutė");
}
function secondLine() {
  console.log("Kita teksto eilutė");
}
function logBoth() {
  firstLine();
  secondLine();
}
logBoth();

// 5
function randomNums() {
  let a = Math.floor(Math.random() * 10 + 1);
  let b = Math.floor(Math.random() * 10 + 1);
  console.log(`${a}+${b}=${a + b}`);
}
randomNums();
randomNums();

// 6

function policininkas() {
  let policininkas = {
    vardas: "Tadas",
    pavarde: "Pareigūnis",
    amžius: 28,
    alga: 1300,
    etatas: 1,
    specializacija: "tyrėjas",
  };
  console.log(
    `Pareigūnas ${policininkas.vardas} ${policininkas.pavarde}, ${policininkas.amžius}. Yra ${policininkas.specializacija} ir uždirba ${policininkas.alga} dirbdamas ${policininkas.etatas} etatu`
  );
}
policininkas();

// 7
function tenRandom() {
  let str = "";
  for (let i = 0; i < 10; i++) {
    str += ` ${Math.floor(Math.random() * 10 + 1)}`;
  }
  console.log(str);
}
tenRandom();
tenRandom();
tenRandom();
tenRandom();
tenRandom();

// 8
function randomNum() {
  console.log(Math.floor(Math.random() * 100 + 1));
}
for (let i = 0; i < 10; i++) {
  randomNum();
}

// 9
function pasisveikinimas(vardas) {
  console.log("Labas", vardas);
}
function atsisveikinimas(vardas) {
  console.log("Viso gero", vardas);
}
let vardas = "Mantas";

pasisveikinimas(vardas);
atsisveikinimas(vardas);

// 10
function biggerNum(a, b) {
  if (a > b) {
    console.log("Pirmas skaičius yra didesnis");
  } else if (b > a) {
    console.log("Antras skaičius yra didesnis");
  } else {
    console.log("Skaičiai yra lygūs");
  }
}
biggerNum(8, 12);
biggerNum(7, 7);
biggerNum(71, 7);

// 11
function masinosDuomenys(marke, modelis, gamybosMetai, darbinisTuris) {
  let automobilis = {
    marke,
    modelis,
    gamybosMetai,
    darbinisTuris,
  };
  console.log("Automobilio duomenys:");
  for (i in automobilis) {
    console.log(i + ": " + automobilis[i]);
  }
}
masinosDuomenys("Opel", "Astra", 2007, 1.9);
masinosDuomenys("Audi", "A6", 2010, 2.2);

// 12
function sum(a, b) {
  console.log(`${a}+${b}=${a + b}`);
}
function subtract(a, b) {
  console.log(`${a}-${b}=${a - b}`);
}
function multiply(a, b) {
  console.log(`${a}*${b}=${a * b}`);
}
function divide(a, b) {
  console.log(`${a}/${b}=${a / b}`);
}
function numGen() {
  let a = Math.floor(Math.random() * 10 + 1);
  let b = Math.floor(Math.random() * 10 + 1);
  sum(a, b);
  subtract(a, b);
  multiply(a, b);
  divide(a, b);
}
numGen();
numGen();
numGen();

// 13
function charCount(arr) {
  for (a of arr) {
    console.log(a, "-", a.length);
  }
}
let zodziai = ["krabas", "labas", "alus", "gardus", "gera", "gira", "trimitas"];
charCount(zodziai);

// 14
function numSquared(arr) {
  for (a of arr) {
    console.log(a, "^2", a ** 2, "/2", a / 2);
  }
}
let nums1 = [8, 15, 4, 9, 3];
let nums2 = [17, 2, 1, 85, 4];
numSquared(nums1);
numSquared(nums2);

// 15
function studentInfo(pazymiai, vardas, pavarde) {
  console.log("Studentas:", vardas, pavarde);
  console.log("Studento pažymiai:", pazymiai);
  let numSum = 0;
  for (pazymys of pazymiai) {
    numSum += pazymys;
  }
  console.log("Studento vidurkis:", numSum / pazymiai.length);
}
let studentName = "Monika";
let studentSurname = "Svydaitė";
let studentGrades = [3, 7, 4, 8, 2, 7, 7, 9];
studentInfo(studentGrades, studentName, studentSurname);

// 16
function highestInTheRoom(arr) {
  let max = arr[0];
  for (num of arr) {
    if (num > max) {
      max = num;
    }
  }
  console.log(max);
}
function fillArray(arr, nums) {
  for (let i = 0; i < nums; i++) {
    arr.push(Math.floor(Math.random() * 10 + 1));
  }
}

let arr1 = [];
let arr2 = [];
let arr3 = [];

fillArray(arr1, 5);
fillArray(arr2, 5);
fillArray(arr3, 5);

console.log(arr1);
console.log(arr2);
console.log(arr3);

highestInTheRoom(arr1);
highestInTheRoom(arr2);
highestInTheRoom(arr3);

// 17
function sakinys() {
  let fraze = "Kas kas tas ir ras";
  return fraze;
}
console.log(sakinys());

// 18
function rng() {
  return Math.floor(Math.random() * 10 + 1);
}
console.log(rng());
console.log(rng());

// 19
function vardasVidurkis(vardas, vidurkis) {
  return `Studentas ${vardas} turi vidurkį ${vidurkis}`;
}
console.log(vardasVidurkis("Tadas", 9.25));
console.log(vardasVidurkis("Raminta", 7.5));

// 20
function maziausiasDaliklis(num) {
  for (let i = num - 1; i >= 1; i--) {
    if (num % i === 0) {
      return i;
    }
  }
}
for (let i = 10; i <= 30; i++) {
  console.log(maziausiasDaliklis(i));
}

// 21
function isPrime(num) {
  for (let i = num - 1; i >= 1; i--) {
    if (num % i === 0) {
      return i === 1 ? true : false;
    }
  }
}
for (let i = 2; i <= 15; i++) {
  console.log(i, isPrime(i));
}

// 22
function sudetis(a, b, c) {
  return a + b + c;
}
function atimtis(a, b, c) {
  return a - b - c;
}
function sandauga(a, b, c) {
  return a * b * c;
}
function dalyba(a, b, c) {
  return a / b / c;
}
function genAndCalc() {
  let a = Math.floor(Math.random() * 100 + 1);
  let b = Math.floor(Math.random() * 100 + 1);
  let c = Math.floor(Math.random() * 100 + 1);
  console.log(`${a} + ${b} + ${c} = ${sudetis(a, b, c)}`);
  console.log(`${a} - ${b} - ${c} = ${atimtis(a, b, c)}`);
  console.log(`${a} * ${b} * ${c} = ${sandauga(a, b, c)}`);
  console.log(`${a} / ${b} / ${c} = ${dalyba(a, b, c)}`);
}
genAndCalc();

// 23
function arraySum(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}
let numArr1 = [18, 5, 24, 16, 9, 2];
let numArr2 = [7, 4, 28, 54, 16, 1];

console.log(arraySum(numArr1));
console.log(arraySum(numArr2));

if (arraySum(numArr1) > arraySum(numArr2)) {
  console.log("Didesnė pirmoji suma:", arraySum(numArr1));
} else if (arraySum(numArr1) < arraySum(numArr2)) {
  console.log("Didesnė antroji suma:", arraySum(numArr2));
} else {
  console.log("Both sums are equal");
}

// 24
function longestWord(arr) {
  let max = arr[0];
  for (i in arr) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
}
let wordsArr = ["mokykla", "labas", "šuo", "trigonometrija"];
console.log(longestWord(wordsArr), "-", longestWord(wordsArr).length);

// 25
function arPazymiaiTeigiami(numArr) {
  for (n of numArr) {
    if (n < 5) {
      return false;
    }
  }
  return true;
}
let paz1 = [8, 7, 4, 8, 9, 10];
let paz2 = [7, 6, 5, 8, 10, 8];
console.log(arPazymiaiTeigiami(paz1));
console.log(arPazymiaiTeigiami(paz2));
function arTeigiamas(bool) {
  console.log(
    bool === true
      ? "Visi studento pažymiai teigiami"
      : "studentas turi bent vieną neigiamą pažymį"
  );
}
arTeigiamas(arPazymiaiTeigiami(paz1));
arTeigiamas(arPazymiaiTeigiami(paz2));
