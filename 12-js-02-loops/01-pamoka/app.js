// 1
let a1 = 8;
let a2 = 14;
let a3 = 12;

if (a1 === a2) {
}
if (a2 === a3) {
}
if (a1 > a2) {
}
if (a2 > a3 * 2) {
}
if (a1 % 2 === 0) {
}
if (a2 % 2 === 1) {
}
if (a3 > 0) {
}
if (a1 < 0) {
}
if (a2 % 4 === 0) {
}
if (a3 % 8 === 0) {
}
// 2
let age = 27;
if (age >= 18) {
  console.log("Jūs galite balsuoti");
}
// 3
let pazymys1 = 7;
let pazymys2 = 8;
let pazymys3 = 5;
if ((pazymys1 + pazymys2 + pazymys3) / 3 >= 5) {
  console.log("vidurkis teigiamas");
}
// 4
let number = 35;

if (number % 5 === 0) {
  console.log(number * 1);
  console.log(number * 2);
  console.log(number * 3);
  console.log(number * 4);
  console.log(number * 5);
}
if (number % 2 === 0) {
  console.log(number);
  console.log(number ** 2);
  console.log(number / 2);
}
if (number % 7 !== 0) {
  let number2 = 89;
  console.log(number + number2);
  console.log(number - number2);
  console.log(number * number2);
  console.log(number / number2);
}

// 5
let num1 = 4;
let num2 = 8;
let num3 = 18;

if (num1 > num2) {
} else if (num2 > num3) {
} else if (num3 > num1) {
} else if (num1 === num2) {
} else if (num2 === num3) {
} else if (num1 === 0) {
} else if (num2 < 0) {
} else if (num3 > 0) {
}

// 6
let pazymys = 8;

if (pazymys === 10) {
  console.log("puiku");
} else if (pazymys >= 9) {
  console.log("labai gerai");
} else if (pazymys >= 7) {
  console.log("gerai");
} else if (pazymys >= 5) {
  console.log("patenkinamai");
} else if (pazymys < 5) {
  console.log("egzaminas neišlaikytas");
}

// 7
let numb1 = 99;
console.log(numb1 % 2 === 0 ? "lyginis" : "nelyginis");

// 8
let numb2 = 75;
console.log(numb1 % 7 === 0 ? "dalinasi" : "nesidalina");

// 9
let numb3 = "/12-js-02/app.js";
console.log(numb3.endsWith(".js") ? "JS" : "ne JS");

// 10
let nu1 = 18;
if (nu1 % 2 === 0) {
  console.log("lyginis");
} else if (nu1 % 5 === 0) {
  console.log("dalinasi iš 5");
} else if (nu1 === 3) {
  console.log("lygu 3");
} else {
  console.error("whoops");
}

// 11
let s1 = 8;
let s2 = 16;
let s3 = 32;

if (s1 === s2) {
} else if (s1 === s3) {
} else if (s3 > s1) {
} else if (s2 === s3 * 2) {
} else if (s1 % 3 === 0) {
} else {
  console.error("whoopsie!");
}

// 12
let sk1 = 43;
let sk2 = 36;
let sk3 = 91;
if (sk1 >= sk2 && sk1 >= sk3) {
  console.log("pirmas");
} else if (sk2 >= sk1 && sk2 >= sk3) {
  console.log("antras");
} else {
  console.log("trečias");
}

// 13
let ska1 = 43;
let ska2 = 36;
let ska3 = 91;
if (sk1 < sk2 && sk1 < sk3) {
  console.log("pirmas");
} else if (sk2 < sk1 && sk2 < sk3) {
  console.log("antras");
} else {
  console.log("trečias");
}

// 14
let egz1 = 4;
let egz2 = 6;
let egz3 = 9;
let egzVidurkis = (egz1 + egz2 + egz3) / 3;
if (egzVidurkis >= 8 && egzVidurkis <= 10) {
  console.log("8-10");
} else if (egzVidurkis < 8 && egzVidurkis >= 5) {
  console.log("5-8");
} else if (egzVidurkis < 5) {
  console.log("neigiamas");
}

// 15
let skai1 = 20;
let skai2 = 3;
if (skai1 > skai2 || skai1 === 0) {
  console.log("pirma sąlyga");
}
if (skai2 > skai1 || skai2 === 5) {
  console.log("antra sąlyga");
}
if (skai1 > skai2 && skai1 === 20) {
  console.log("trečia sąlyga");
}
if (skai2 > skai1 && skai2 > 100) {
  console.log("ketvirta sąlyga");
}
