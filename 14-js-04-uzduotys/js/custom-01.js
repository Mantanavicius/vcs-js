/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let manoVardas = "Mantas";
let manoPavarde = "Antanavičius";
let manoGimimoMetai = 1997;
let dabartiniaiMetai = new Date(Date.now()).getFullYear();
let amzius = dabartiniaiMetai - manoGimimoMetai;

console.log(`Aš esu ${manoVardas} ${manoPavarde}. Man yra ${amzius} metai(-ų)`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let x1 = Math.floor(Math.random() * 5);
let x2 = Math.floor(Math.random() * 5);

console.log((Math.max(x1, x2) / Math.min(x1, x2)).toFixed(2));

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let a1 = Math.floor(Math.random() * 26);
let a2 = Math.floor(Math.random() * 26);
let a3 = Math.floor(Math.random() * 26);

console.log(a1 + a2 + a3 - Math.max(a1, a2, a3) - Math.min(a1, a2, a3));

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.floor(Math.random() * 10 + 1);
let kr2 = Math.floor(Math.random() * 10 + 1);
let kr3 = Math.floor(Math.random() * 10 + 1);

let krMax = Math.max(kr1, kr2, kr3);
let krSum = kr1 + kr2 + kr3;

// if(kr1+kr2<kr3 || kr2+kr3<kr1 || kr1+kr3<kr2){

if (krMax > krSum - krMax) {
  console.log("Trikampio sudaryti negalima");
} else {
  console.log("Trikampį sudaryti galima");
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let b1 = Math.floor(Math.random() * 3);
let b2 = Math.floor(Math.random() * 3);
let b3 = Math.floor(Math.random() * 3);
let b4 = Math.floor(Math.random() * 3);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

b1 === 0 ? nuliai++ : b1 === 1 ? vienetai++ : dvejetai++;
b2 === 0 ? nuliai++ : b2 === 1 ? vienetai++ : dvejetai++;
b3 === 0 ? nuliai++ : b3 === 1 ? vienetai++ : dvejetai++;
b4 === 0 ? nuliai++ : b4 === 1 ? vienetai++ : dvejetai++;

console.log("Nuliai:", nuliai);
console.log("Vienetai:", vienetai);
console.log("Dvejetai:", dvejetai);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let c1 = Math.floor(Math.random() * 21 - 10);
let c2 = Math.floor(Math.random() * 21 - 10);
let c3 = Math.floor(Math.random() * 21 - 10);
console.log(c1 < 0 ? `[${c1}]` : c1 === 0 ? `(${c1})` : `{${c1}}`);
console.log(c2 < 0 ? `[${c2}]` : c2 === 0 ? `(${c2})` : `{${c2}}`);
console.log(c3 < 0 ? `[${c3}]` : c3 === 0 ? `(${c3})` : `{${c3}}`);

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let zvakiuKiekis = Math.floor(Math.random() * 2996 + 5);
if (zvakiuKiekis > 2000) {
  console.log(
    `Žvakių kiekis: ${zvakiuKiekis}. Žvakių kaina: ${zvakiuKiekis * 0.96}€`
  );
} else if (zvakiuKiekis > 1000) {
  console.log(
    `Žvakių kiekis: ${zvakiuKiekis}. Žvakių kaina: ${zvakiuKiekis * 0.97}€`
  );
} else {
  console.log(`Žvakių kiekis: ${zvakiuKiekis}. Žvakių kaina: ${zvakiuKiekis}€`);
}

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let d1 = Math.floor(Math.random() * 101);
let d2 = Math.floor(Math.random() * 101);
let d3 = Math.floor(Math.random() * 101);
let numCount = 3;

let dAvg1 = Math.round((d1 + d2 + d3) / numCount);
console.log(dAvg1);

if (d1 < 10 || d1 > 90) {
  d1 = 0;
  numCount--;
}
if (d2 < 10 || d2 > 90) {
  d2 = 0;
  numCount--;
}
if (d3 < 10 || d3 > 90) {
  d3 = 0;
  numCount--;
}

let dAvg2 = Math.round((d1 + d2 + d3) / numCount);
console.log(dAvg2);

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
let h = Math.floor(Math.random() * 24);
let min = Math.floor(Math.random() * 60);
let s = Math.floor(Math.random() * 60);
console.log(`${h}:${min}:${s}`);

let papildomosSec = Math.floor(Math.random() * 301);

if (papildomosSec > 59) {
  min += Math.floor(papildomosSec / 60);
  s += papildomosSec % 60;
} else {
  s += papildomosSec;
}

if (s > 59) {
  min++;
  s = s % 60;
}

if (min > 59) {
  h++;
  s = s % 60;
}

if (h > 23) {
  h = 0;
}
console.log(`${h}:${min}:${s}`);
/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
let n1 = Math.floor(Math.random() * 9000 + 1000);
let n2 = Math.floor(Math.random() * 9000 + 1000);
let n3 = Math.floor(Math.random() * 9000 + 1000);
let n4 = Math.floor(Math.random() * 9000 + 1000);
let n5 = Math.floor(Math.random() * 9000 + 1000);
let n6 = Math.floor(Math.random() * 9000 + 1000);

let s1, s2, s3, s4, s5, s6;

s1 = Math.max(n1, n2, n3, n4, n5, n6);

if (s1 === n1) {
  n1 = 0;
} else if (s1 === n2) {
  n2 = 0;
} else if (s1 === n3) {
  n3 = 0;
} else if (s1 === n4) {
  n4 = 0;
} else if (s1 === n5) {
  n5 = 0;
} else {
  n6 = 0;
}
s2 = Math.max(n1, n2, n3, n4, n5, n6);

if (s2 === n1) {
  n1 = 0;
} else if (s2 === n2) {
  n2 = 0;
} else if (s2 === n3) {
  n3 = 0;
} else if (s2 === n4) {
  n4 = 0;
} else if (s2 === n5) {
  n5 = 0;
} else {
  n6 = 0;
}
s3 = Math.max(n1, n2, n3, n4, n5, n6);

if (s3 === n1) {
  n1 = 0;
} else if (s3 === n2) {
  n2 = 0;
} else if (s3 === n3) {
  n3 = 0;
} else if (s3 === n4) {
  n4 = 0;
} else if (s3 === n5) {
  n5 = 0;
} else {
  n6 = 0;
}
s4 = Math.max(n1, n2, n3, n4, n5, n6);

if (s4 === n1) {
  n1 = 0;
} else if (s4 === n2) {
  n2 = 0;
} else if (s4 === n3) {
  n3 = 0;
} else if (s4 === n4) {
  n4 = 0;
} else if (s4 === n5) {
  n5 = 0;
} else {
  n6 = 0;
}
s5 = Math.max(n1, n2, n3, n4, n5, n6);

if (s5 === n1) {
  n1 = 0;
} else if (s5 === n2) {
  n2 = 0;
} else if (s5 === n3) {
  n3 = 0;
} else if (s5 === n4) {
  n4 = 0;
} else if (s5 === n5) {
  n5 = 0;
} else {
  n6 = 0;
}
s6 = Math.max(n1, n2, n3, n4, n5, n6);

console.log(s1, s2, s3, s4, s5, s6);
