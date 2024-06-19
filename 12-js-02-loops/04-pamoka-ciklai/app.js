// 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// 2
for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}
// 3
for (let i = 1; i <= 20; i += 3) {
  console.log(`[${i}]`);
}
// 4
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}
// 5
let start = 1;
let end = 15;
if (start < end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i} ${i ** 2}`);
  }
}
// 6
let start1 = 1;
let end1 = 30;
if (start1 < end1) {
  for (let i = start1; i <= end1; i++) {
    if (i % 2 === 1 || i % 8 === 0) {
      console.log(i);
    }
  }
}
// 7
let num1 = 8;
let num2 = 7;
let result = 0;
for (let i = 1; i <= num2; i++) {
  result += num1;
}
console.log(`${result}`);
// 8
let res = 0;
for (let i = 1; i <= 100; i++) {
  res += i;
}
console.log(res);
// 9
let res1 = 0;
for (let i = 20; i <= 50; i += 2) {
  res1 += i;
}
console.log(res1);
// 10
let res2 = 0;
for (let i = 31; i <= 60; i += 2) {
  res2 += i;
}
console.log(res2);
// 11
let res3 = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    res3 += i;
  }
}
console.log(res3);
// 12
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// 13
let fibNumbers = 10;
let a = 1;
let b = 1;
let ab = 0;
console.log(a);
console.log(b);
for (let i = 2; i < fibNumbers; i++) {
  ab = a + b;
  b = a;
  a = ab;
  console.log(ab);
}

// WHILE
console.log("While start");
// 1
let i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}
// 2
let i2 = 1;
while (i2 <= 50) {
  if (i2 % 2 === 0) {
    console.log(`${i2} - lyginis`);
  } else {
    console.log(`${i2} - nelyginis`);
  }
  i2++;
}
// 3
let i3 = 25;
while (i3 <= 50) {
  if (i3 % 3 === 0) {
    console.log(`skaičius ${i3} dalinasi iš 3`);
  } else {
    console.log(i3);
  }
  i3++;
}
// 4
let i4 = 1;
while (!(i4 % 3 === 0 && i4 % 5 === 0)) {
  console.log(i4);
  i4++;
}
// 5
let i5 = 1;
let sum5 = 0;
while (i5 <= 100) {
  if (i5 % 2 === 0) {
    sum5 += i5;
  }
  i5++;
}
console.log(sum5);
// 6
let skaicius = 1;
while (skaicius < 5) {
  console.log(`${skaicius} - ${skaicius ** 2}`);
  skaicius++;
}
// 7
let i7 = 0;
let i7stop = Math.floor(Math.random() * 100);
while (i7 < i7stop) {
  console.log(Math.floor(Math.random() * 100));
  i7++;
}
// 8
let i8 = 0;
let sum8 = 0;
let i8stop = Math.floor(Math.random() * 100);
while (i8 < i8stop) {
  i8temp = Math.floor(Math.random() * 100);
  sum8 += i8temp;
  console.log(`sum num: ${i8temp}`);
  i8++;
}
console.log(`skaičių suma: ${sum8}`);
