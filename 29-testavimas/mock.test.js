// describe("mokomes mock veikimo", () => {
//   test("testuojam mock", () => {
//     // ARRANGE - pasiruosimas testui
//     const app = require("./mock");
//     const mock = jest.fn().mockReturnValue("Kazys Grinius");
//     app.getFullName = mock;
//     const snipas = jest.spyOn(app, "getFullName");

//     // ACT - funkciju iskvietimas
//     const result = app.greet("Kazys", "Grinius");
//     expect(snipas).toHaveBeenCalled();
//     expect(snipas).toHaveBeenCalledWith("Kazys", "Grinius");

//     // ASSERT - palyginame/tikriname reiksmes
//     expect(result).toBe("Labas, Kazys Grinius");
//   });
// });

// 1
const app = require("./mock");

describe("pirma uzduotis", () => {
  test("pirmos uzduoties testas", () => {
    const mockFirst = jest.fn().mockReturnValue("3 valanda");
    app.pirmosValanda = mockFirst;
    const spyOne = jest.spyOn(app, "pirmosValanda");

    app.pirmosPirma(3);
    expect(spyOne).toHaveBeenCalled();
    expect(spyOne).toHaveBeenCalledTimes(1);
  });
});

// 2

describe("antra uzduotis", () => {
  test("antros uzduoties testas", () => {
    const mockSecond = jest.fn().mockReturnValue("5 valanda");
    app.antrosValanda = mockSecond;
    const spyTwo = jest.spyOn(app, "antrosValanda");

    app.antrosPirma(5);
    expect(spyTwo).toHaveBeenCalledWith(5);
  });
});

// 3

describe("trecia uzduotis", () => {
  test("trecios uzduoties testas", () => {
    const mockThird = jest.fn().mockReturnValue("9 valanda");
    app.treciosValanda = mockThird;

    const result = app.treciosPirma(9);

    expect(result).toBe("Dabar: 9 valanda");
  });
});
