// 1
let kates = [
  "bengalas",
  "leopardas",
  "liūtas",
  "gepardas",
  "Savanos katė",
  "lūšis",
];
console.log(kates[0]);
console.log(kates[kates.length - 1]);
console.log(kates[2], "ir", kates[3]);
console.log(kates.length);
// 2
let sunys = [
  "pudelis",
  "labradoras",
  "spanielis",
  "dalmantinas",
  "rotveileris",
  "pitbulis",
];
console.log(sunys);
sunys[2] = "kokerspanielis";
sunys[3] = "balbantinas";
sunys[4] = "bloomveileris";
console.log(sunys);
// 3
let duomenys = [];
duomenys.push("a", "b", "c", "d");
console.log(duomenys);
// 4
let skaiciai = [];
for (let i = 0; i < 10; i++) {
  skaiciai.push(Math.floor(Math.random() * 100));
}
// skaiciai.push(
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10)
// );
console.log(skaiciai);
// 5
let pazymiai = [8, 4, 10, 7, 9];
let pazymiai1 = [9, 8, 10, 5, 9];

// let vidurkis =
//   (pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4]) /
//   pazymiai.length;

// let vidurkis1 =
//   (pazymiai1[0] + pazymiai1[1] + pazymiai1[2] + pazymiai1[3] + pazymiai1[4]) /
//   pazymiai1.length;

// let vidurkis = pazymiai.reduce((a,b)=>a+b) / pazymiai.length
// let vidurkis1 = pazymiai1.reduce((a, b) => a + b) / pazymiai1.length;
let sum = 0;
for (let i = 0; i < pazymiai.length; i++) {
  sum += pazymiai[i];
}
let vidurkis = sum / pazymiai.length;

let sum1 = 0;
for (let i = 0; i < pazymiai1.length; i++) {
  sum1 += pazymiai1[i];
}
let vidurkis1 = sum1 / pazymiai1.length;

console.log("Pirmas vidurkis", vidurkis);
console.log("Antras vidurkis", vidurkis1);
console.log("Didžiausias vidurkis:", Math.max(vidurkis, vidurkis1));

// 6
let studijuProgramos = [
  "ekonomika",
  "psichologija",
  "inžinerija",
  "medicina",
  "teise",
];
for (let i = 0; i < studijuProgramos.length; i++) {
  console.log(studijuProgramos[i]);
}

// 7
let salys = ["Vokietija", "Ukraina", "Lietuva", "Norvegija", "Kongas"];
for (let i = 0; i < salys.length; i++) {
  console.log(`šalis - ${salys[i]}`);
}
// 8
let projectsCompleted = ["Elega", "SOS", "Skanus maistas", "Kelionės jums"];
for (let i = 0; i < projectsCompleted.length; i++) {
  console.log(`${i + 1}-as projektas: ${projectsCompleted[i]}`);
}
// 9
let numbers = [1, 6, 84, 53, 21, 3, 34, 16, 2, 9];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i]);
  }
}
// 10
let sum10 = 0;
let numbers10 = [];
for (let i = 0; i < 10; i++) {
  numbers10.push(Math.floor(Math.random() * 1000));
}
for (let i = 0; i < numbers10.length; i++) {
  if (numbers10[i] % 4 === 0) {
    sum10 += numbers10[i];
  }
}
console.log(
  sum10 > 0
    ? `skaičių, kurie dalinasi iš 4 suma: ${sum10}`
    : "nei vienas iš skaičių nesidalino iš 4 :("
);
// 11
let grades = [];
for (let i = 0; i < 10; i++) {
  grades.push(Math.ceil(Math.random() * 10));
}
let gradeSum = 0;
for (let i = 0; i < grades.length; i++) {
  gradeSum += grades[i];
}
let gpa = gradeSum / grades.length;
console.log(`Pažymiai: ${grades}. Vidurkis: ${gpa}`);

// 12
let grades12 = [];
for (let i = 0; i < 10; i++) {
  grades12.push(Math.floor(Math.random() * 10 + 1));
}
let gradeSum12 = 0;
for (let i = 0; i < grades12.length; i++) {
  gradeSum12 += grades12[i];
}
let gpa12 = gradeSum12 / grades12.length;
let aboveGpa = [];
for (let i = 0; i < grades12.length; i++) {
  if (grades12[i] > gpa12) {
    aboveGpa.push(grades12[i]);
  }
}
console.log(`Vidurkis: ${gpa12}. Pažymiai aukštesni už vidurkį: ${aboveGpa}`);

// 13
let nums13 = [4, 84, 51, 13, 48, 63, 4782, 47, 21, 13, 2];
for (let i = 0; i < nums13.length; i++) {
  if (nums13[i] % 2 === 0) {
    console.log(nums13[i], nums13[i] ** 2);
  } else {
    console.log(nums13[i]);
  }
}

// 14
let grades14 = [];
for (let i = 0; i < 10; i++) {
  grades14.push(Math.floor(Math.random() * 10 + 1));
}
for (let i = 0; i < grades14.length; i++) {
  if (grades14[i] < 5) {
    console.log(
      `${grades14[i]} - neigiamas. Iki teigiamo balo trūko ${
        (grades14[i] - 5) * -1
      }`
    );
  } else {
    console.log(grades14[i], "- teigiamas");
  }
}

// 15
let zodziai = ["labas", "krabas", "saule", "piene", "stalas"];
let totalChars = 0;
for (let i = 0; i < zodziai.length; i++) {
  console.log(`${zodziai[i]} - sudaro ${zodziai[i].length} raidės`);
  totalChars += zodziai[i].length;
}
console.log(`iš viso raidžių: ${totalChars}`);

// 16
let nums16 = [8, 14, 21, 6, 7, 414, 34, 71, 9, 36];
let numSum = 0;
let numsDivisibleBy3 = [];
for (let i = 0; i < nums16.length; i++) {
  if (nums16[i] % 3 === 0) {
    numSum += nums16[i];
    numsDivisibleBy3.push(nums16[i]);
  }
}
let numAvg = numSum / numsDivisibleBy3.length;
console.log(`
Pradiniai duomenys: ${nums16}. Skaičių, kurie dalinasi iš 3 suma: ${numSum}. 
Skaičių kurie dalinasi iš 3 vidurkis: ${numAvg}`);

// 17
let zodziai17 = [
  "kompiuteris",
  "programa",
  "klaviatūra",
  "deimantas",
  "kolonėlė",
  "arbata",
];
for (let index in zodziai17) {
  console.log(index, "-", zodziai17[index]);
}

// 18
let pirkiniai = ["kamembertas", "duona", "sūris", "pienas", "kumpis", "salota"];
console.log(pirkiniai.length, ":");
for (let pirkinys of pirkiniai) {
  console.log("-", pirkinys);
}

// 19
let studentoPazymiai = [4, 9, 10, 5, 6, 7, 8];
let sum19 = 0;
for (let pazymys of studentoPazymiai) {
  sum19 += pazymys;
}
let gpa19 = sum19 / studentoPazymiai.length;
console.log(`Pažymiai: ${studentoPazymiai}. Vidurkis: ${gpa19}`);

// 20
let nuvaziuotiKm = [120, 350, 400, 100, 60, 250];
for (let dienosKm of nuvaziuotiKm) {
  if (dienosKm > 150) {
    console.log(dienosKm);
  }
}

// 21
let files = [
  "app.js",
  "index.html",
  "style.css",
  "normalize.css",
  "data.json",
  "README.txt",
];
for (let file of files) {
  if (file.endsWith(".txt") || file.endsWith(".json")) {
    console.log(file);
  }
}

// 22
let cars = ["opel", "audi", "skoda", "volkswagen", "Seat", "BMW", "Toyota"];
for (let car of cars) {
  console.log(car, "-", car.length);
}

// 23
let errorCodes = [404, 409, 410, 429, 502, 503, 666];
for (let errorCode of errorCodes) {
  switch (errorCode) {
    case 404:
      console.log(errorCode, "Not found");
      break;
    case 409:
      console.log(errorCode, "Conflict");
      break;
    case 410:
      console.log(errorCode, "Gone");
      break;
    case 429:
      console.log(errorCode, "Too many requests");
      break;
    case 502:
      console.log(errorCode, "Bad Gateway");
      break;
    case 503:
      console.log(errorCode, "Service Unavailable");
      break;
    default:
      console.log(errorCode, "Invalid error code");
  }
}

// 24
let sandelioLikuciai = [16, 24, 100, 83, 51];
for (let likutis of sandelioLikuciai) {
  console.log(
    `Atsargos yra: ${likutis}, jų užteks maždaug dar: ${Math.round(
      likutis / 5
    )}'dienų(-ai)(-oms)`
  );
}

// 25
let studentGrades = [];
let gradeSum25 = 0;
let negativeGrades = [];
while (studentGrades.length < 10) {
  let grade = Math.ceil(Math.random() * 10);
  studentGrades.push(grade);
  gradeSum25 += grade;
  if (grade < 5) {
    negativeGrades.push(grade);
  }
}
let studentGpa = gradeSum25 / studentGrades.length;
for (let g in studentGrades) {
  if (g > 5) {
    console.log(g);
  }
}
console.log("Vidurkis:", studentGpa);
console.log("Neigiamų pažymių kiekis:", negativeGrades.length);

// 26
let stud1 = [];
let stud2 = [];
let gradeSum1 = 0;
let gradeSum2 = 0;
while (stud1.length < 10 && stud2.length < 10) {
  let grade1 = Math.ceil(Math.random() * 10);
  let grade2 = Math.ceil(Math.random() * 10);
  stud1.push(grade1);
  stud2.push(grade2);
  gradeSum1 += grade1;
  gradeSum2 += grade2;
}
let gpa1 = gradeSum1 / stud1.length;
let gpa2 = gradeSum2 / stud2.length;
console.log("Pirmojo studento pažymai:", stud1);
console.log("Antrojo studento pažymai:", stud2);
console.log("Pirmojo studento vidurkis:", gpa1);
console.log("Antrojo studento vidurkis:", gpa2);
console.log(
  gpa1 > gpa2
    ? "Pirmo studento vidurkis aukštesnis"
    : gpa1 < gpa2
    ? "Antro studento vidurkis aukštesnis"
    : "Studentų vidurkiai vienodi"
);

// 27
let zdz = ["kiemas", "šuo", "kiaune", "kiaule", "kaimas", "alio", "kaip"];
let trumpiZodziai = [];
for (let z of zdz) {
  if (z.length < 5) {
    trumpiZodziai.push(z);
  }
}
console.log(zdz);
console.log(trumpiZodziai);
