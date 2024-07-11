const [sum, subtract] = require("./scripts1");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -6 - 9 to equal -15", () => {
  expect(sum(-6, -9)).toBe(-15);
});

test("ar 9 - 2 to equal 7", () => {
  expect(subtract(9, 2)).toBe(7);
});

test("ar -6 - 9 to equal -15", () => {
  expect(subtract(-6, -9)).toBe(3);
});
