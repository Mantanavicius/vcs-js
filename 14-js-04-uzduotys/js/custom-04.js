/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai = [
  "pienė",
  "rožė",
  "ąžuolas",
  "liepa",
  "beržas",
  "kaktusas",
  "tulpė",
  "čiobrelis",
  "ramunė",
  "pupa",
];
/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
for (let augalas of augalai) {
  console.log(augalas);
}
/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
for (let i in augalai) {
  console.log(augalai[augalai.length - 1 - i]);
}
/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
let trumpiPavadinimai = [];
let ilgiPavadinimai = [];
for (let augalas of augalai) {
  if (augalas.length < 5) {
    trumpiPavadinimai.push(augalas);
  } else if (augalas.length > 7) {
    ilgiPavadinimai.push(augalas);
  }
}
console.log(trumpiPavadinimai.length);
console.log(ilgiPavadinimai.length);
