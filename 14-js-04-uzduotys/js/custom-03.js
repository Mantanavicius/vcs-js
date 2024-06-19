/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for (let i = 0; i < 10; i++) {
  console.log("labas");
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0 && i % 10 === 0) {
    continue;
  } else if (i % 2 === 0) {
    console.log(i);
  }
}
/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
let evenCount = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    evenCount++;
  }
}
console.log("Porinių skaičių kiekis", evenCount);
/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
let mt150 = 0;
let nums = "";
for (let i = 0; i <= 300; i++) {
  let num = Math.floor(Math.random() * 301);
  if (num > 275) {
    nums += `${num} `;
    mt150++;
  } else if (num > 150) {
    nums += `${num} `;
    mt150++;
  } else {
    nums += `${num} `;
  }
}
console.log(nums);
/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
let str = "";
for (let i = 0; i <= 3000; i++) {
  if (i === 2926 && i % 77 === 0) {
    str += `${i}`;
  } else if (i % 77 === 0) {
    str += `${i}, `;
  }
}
console.log(str);

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
let line = "";
for (let i = 0; i < 10; i++) {
  while (line.length <= 10) {
    line += "*";
  }
  console.log(line);
}
