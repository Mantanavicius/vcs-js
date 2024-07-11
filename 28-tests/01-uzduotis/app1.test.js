const [
  circleArea,
  palindrome,
  highestNum,
  priceAlreadyExists,
  waitForResponse,
  alwaysBeNull,
] = require("./app1");

// 1

test("circle radius is 0", () => {
  expect(circleArea(0)).toBe(0);
});

test("circle radius is 5", () => {
  expect(circleArea(5)).toBeCloseTo(78.54, 2);
});

test("circle radius is -1", () => {
  expect(circleArea(-1)).toBe("radius cannot be less than 0");
});

// 2

test("are words - 'A man, a plan, a canal. Panama' a palindrome?", () => {
  expect(palindrome("A man, a plan, a canal. Panama")).toBe(true);
});

test("are words - 'taco cat' a palindrome?", () => {
  expect(palindrome("taco cat")).toBe(true);
});

test("is word - A canal a palindrome?", () => {
  expect(palindrome("A canal")).toBe(false);
});

test("is word - Panama a palindrome?", () => {
  expect(palindrome("Panama")).toBe(false);
});

// 3

test("is the number 5 from 1,2,3,4,5 the highest?", () => {
  expect(highestNum([1, 2, 3, 4, 5])).toBe(5);
});

test("is the number 454 from 102,89,3,454,5 the highest?", () => {
  expect(highestNum([102, 89, 3, 454, 5])).toBe(454);
});

test("testing without any numbers", () => {
  expect(() => highestNum([])).toThrow("Not an array!");
});

// 4

test("adding an object with a price should return that the price already exists", () => {
  expect(priceAlreadyExists({ name: "Monitorius", kaina: 80 })).toBe(
    "Objektas jau turi kainą"
  );
});

test("adding an object without a price should return the new price", () => {
  expect(priceAlreadyExists({ name: "Monitorius" })).toBe(50);
});

// 5

test('testing if delay is less than 5s should return "spejo laiku"', async () => {
  await expect(waitForResponse(3000)).resolves.toBe("Spėjo laiku");
});

test('testing if delay is more than 5s should return "nespejo"', async () => {
  await expect(waitForResponse(6000)).rejects.toThrow('Nespėjo');
}, 7000);

// 6

test("expecting function to return null", () => {
  expect(alwaysBeNull()).toBeNull();
});
