// 1

function circleArea(radius) {
  let result = Math.PI * Math.pow(radius, 2);
  return radius < 0 ? "radius cannot be less than 0" : result;
}

// 2

function palindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
}

// 3

function highestNum(numArr) {
  if (!Array.isArray(numArr) || numArr.length === 0) {
    throw new Error("Not an array!");
  } else {
    return numArr.sort((a, b) => b - a)[0];
  }
}

// 4

function priceAlreadyExists(obj) {
  return obj.kaina ? "Objektas jau turi kainą" : (obj.kaina = 50);
}

// 5

async function waitForResponse(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay <= 5000) {
        resolve("Spėjo laiku");
      } else {
        reject(new Error("Nespėjo..."));
      }
    }, delay);
  });
}

// 6

function alwaysBeNull() {
  return null;
}

module.exports = [
  circleArea,
  palindrome,
  highestNum,
  priceAlreadyExists,
  waitForResponse,
  alwaysBeNull,
];
