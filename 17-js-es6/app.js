let skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];

console.log("skaiciai", skaiciai);

let pak = skaiciai.map((x) => x + (x % 2 === 0 ? " lyginis" : " nelyginis"));

console.log("lyginis ar nelyginis skaicius", pak);
