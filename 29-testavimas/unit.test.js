const resolve = require("resolve");

const maistoProduktai = ["pienas", "duona", "vanduo"];

function grazinaMasyva() {
  return ["pienas", "duona", "vanduo"];
}

test("Tikriname ar nepamirsom pieno", () => {
  expect(maistoProduktai).toContain("pienas");
  const maistoProduktai2 = grazinaMasyva();
  expect(maistoProduktai2).toContain("pienas");
});

//async

async function delayedFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Atsakymas");
    }, 2000);
  });
}

test("testuojam async funkcija", async () => {
  const res = await delayedFunction();
  expect(res).toBe("Atsakymas");
});

async function fakeAPI(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay > 2000) {
        reject("negausi duomenu");
      }
      resolve("Atsakymas");
    }, delay);
  });
}

test("testuojam fakeAPI funkcija", async () => {
  const res = await fakeAPI(1000);
  expect(res).toBe("Atsakymas");
  // const res2 = await fakeAPI(2500)
  // expect(res2).toBe('negausi duomenu')
});

test("testuojam fakeAPI funkcija", async () => {
  const res = await fakeAPI(1000);
  expect(res).toBe("Atsakymas");
  try {
    const res2 = await fakeAPI(2500);
    expect(res2).toBe("Atsakymas");
  } catch (error) {
    expect(error).toBe("negausi duomenu");
  }
});

const atmetantiFunkcija = async () => {
  return Promise.reject(new Error("nutiko bedele"));
};

test("tikrinam atmetimo funkcija", async () => {
  try {
    await atmetantiFunkcija();
  } catch (error) {
    expect(error.message).toBe("nutiko bedele");
  }
});

////////////////////////////////////////////////

// 1

async function grazinaTrue() {
  return new Promise((resolve) => {
    resolve(true);
  });
}

// alternate
// const resolvePromise = async () => {
//   return Promise.resolve(true);
// };

// 1 test

test("tikrinam ar grazina true", async () => {
  const res = await grazinaTrue();
  expect(res).toBe(true);
});

// 2

async function rejectionFunction() {
  return Promise.reject(new Error("nutiko klaida"));
}

// 2 test

test("tikrinam atmetima ir jos zinute", async () => {
  try {
    await rejectionFunction();
  } catch (e) {
    expect(e.message).toBe("nutiko klaida");
  }
});

// 3

async function masyvasPoSekundes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 5, 7, 8, 9, 10]);
    }, 1000);
  });
}

// 3 test

test("tikrinam ar grazintas masyvas turi skaiciu 10", async () => {
  const res = await masyvasPoSekundes();
  expect(res).toContain(10);
});

// 4

function divide(a, b) {
  if (b === 0) {
    throw new Error("dalyba is 0 yra neleistina");
  }
  return a / b;
}

// 4 test

test("tikriname ar gausime klaida dalindami is nulio", () => {
  try {
    divide(5, 0);
  } catch (e) {
    expect(e.message).toBe("dalyba is 0 yra neleistina");
  }
});

test("testuojame dalybos funkcija kai nera 0", () => {
  expect(divide(4, 2)).toBe(2);
});
