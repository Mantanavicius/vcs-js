let student = {
  vardas: "Mantas",
  pavardė: "Antanavičius",
  amzius: 27,
  studijuPrograma: "Programavimas",
  kreditai: 80,
  pazymiai: [8, 9, 7, 10, 8],
  ugis: 184,
  kursas: 3,
  mokykla: "VU",
};
console.log(student);
console.log(student.vardas);
console.log(student.pazymiai);
console.log(student.studijuPrograma);

let filmas = {
  pavadinimas: "Titanic",
  rezisierius: "James Cameron",
  biudzetas: 200000000,
  uzdirbo: 2200000000,
  zanras: "Historic, Romantic",
  trukme: "3h 14min",
  metai: 1997,
  aktoriai: ["Leonardo DiCaprio", "Kate Winslet"],
};
console.log(filmas);
console.log("Filmo pelnas:", filmas.uzdirbo - filmas.biudzetas);
console.log("Aktoriai:", filmas.aktoriai.length);
console.log("Amzius:", new Date(Date.now()).getFullYear() - filmas.metai);

let book1 = {
  pavadinimas: "Alchemikas",
  autorius: "Paulo Coelho",
  zanras: ["Novel", "Drama"],
  kaina: 13.3,
  puslapiai: 208,
  skyriai: ["skyrius1", "skyrius2", "skyrius3", "skyrius4"],
  metai: 1988,
  galimaRastiKnygynuose: true,
};
let book2 = {
  pavadinimas: "Haris Poteris ir Ugnies taurė",
  autorius: "J. K. Rowling",
  zanras: ["Fantasy", "Adventure"],
  kaina: 24.54,
  puslapiai: 636,
  skyriai: ["skyrius1", "skyrius2", "skyrius3", "skyrius4"],
  metai: 2000,
  galimaRastiKnygynuose: true,
};
console.log("Plonesnė:");
console.log("Ar būtų brangesnė:", book1.kaina * 2 > book2.kaina);

let preke1 = {
  pavadinimas: "Google Pixel 8 Pro",
  kaina: 650,
  savikaina: 400,
  kodas: "Pxl08p",
  kiekisSandelyje: 26,
  dezesMatmenys: { x: 20, y: 15, z: 10 },
};
let preke2 = {
  pavadinimas: "iPhone 15",
  kaina: 1000,
  savikaina: 900,
  kodas: "iPh015",
  kiekisSandelyje: 50,
  dezesMatmenys: { x: 18, y: 13, z: 19 },
};
let preke3 = {
  pavadinimas: "Samsung Galaxy S23",
  kaina: 800,
  savikaina: 600,
  kodas: "SGS23",
  kiekisSandelyje: 24,
  dezesMatmenys: { x: 19, y: 16, z: 14 },
};
console.log(preke1);
console.log(preke2);
console.log(preke3);
console.log(
  `Pirma prekė kainuoja ${preke1.kaina}, antra prekė kainuoja ${preke2.kaina}, trečia prekė kainuoja ${preke3.kaina}`
);
if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
  console.log("Brangiausia prekė:", preke1);
} else if (preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina) {
  console.log("Brangiausia prekė", preke2);
} else {
  console.log("Brangiausia prekė", preke3);
}
console.log(
  "Dėžė 1:",
  preke1.dezesMatmenys.x * preke1.dezesMatmenys.y * preke1.dezesMatmenys.z
);
console.log(
  "Dėžė 2:",
  preke2.dezesMatmenys.x * preke2.dezesMatmenys.y * preke2.dezesMatmenys.z
);
console.log(
  "Dėžė 3:",
  preke3.dezesMatmenys.x * preke3.dezesMatmenys.y * preke3.dezesMatmenys.z
);

console.log(
  "Pelningumas 1",
  (preke1.kaina - preke1.savikaina) * preke1.kiekisSandelyje
);
console.log(
  "Pelningumas 2",
  (preke2.kaina - preke2.savikaina) * preke2.kiekisSandelyje
);
console.log(
  "Pelningumas 3",
  (preke3.kaina - preke3.savikaina) * preke3.kiekisSandelyje
);

const automobilis = {};
automobilis.marke = "Opel";
automobilis.modelis = "Astra";
automobilis.rida = 220560;
automobilis.gamybosMetai = 2007;
automobilis.spalva = "Sidabrinė";
automobilis.darbinisTuris = 1900;
automobilis.dauzta = false;
automobilis.parduodama = false;
automobilis.amzius =
  new Date(Date.now()).getFullYear() - automobilis.gamybosMetai;
console.log("Automobilio amžius", automobilis.amzius);
console.log(
  "Per metus vidutiniškai nuvažiavo:",
  Math.round(automobilis.rida / automobilis.amzius),
  "km"
);

let kompiuteris = {
  make: "Alienware",
  year: 2018,
  gpu: "Nvidia GTX 1080",
  cpu: "Intel i9",
  isDamaged: true,
  owner: "Mantas",
};
console.log(kompiuteris);
console.log(
  "Kompiuterio amžius:",
  new Date(Date.now()).getFullYear() - kompiuteris.year
);
// 7
console.log("------------------------");

let knygynas = {
  pavadinimas: "Pegasas",
  adresas: "Upės g. 9, Vilnius",
  plotas: 200,
  knygos: 12000,
  darboValandos: "10-21",
  atidarytas: true,
};
for (const key in knygynas) {
  console.log(key, knygynas[key]);
}
for (const key in knygynas) {
  if (knygynas[key].typeof !== "string") console.log(key, knygynas[key]);
}

// 8
const studentas1 = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  studijuPrograma: "Kinezoterapija",
  pazymiai: [8, 7, 6, 10, 4, 6],
};
const studentas2 = {
  vardas: "Petras",
  pavarde: "Petraitis",
  studijuPrograma: "Politologija",
  pazymiai: [7, 7, 8, 10, 5],
};
pSum1 = 0;
pSum2 = 0;
for (let pazymys of studentas1.pazymiai) {
  pSum1 += pazymys;
}
for (let pazymys of studentas2.pazymiai) {
  pSum2 += pazymys;
}
studentas1.vidurkis = (pSum1 / studentas1.pazymiai.length).toFixed(2);
studentas2.vidurkis = (pSum2 / studentas2.pazymiai.length).toFixed(2);
console.log(studentas1);
console.log(studentas2);
console.log("Pirmo studento vidurkis:", studentas1.vidurkis);
console.log("Antro studento vidurkis:", studentas2.vidurkis);
console.log(
  studentas1.vidurkis > studentas2.vidurkis
    ? `Pirmo studento (${studentas1.vardas} ${studentas1.pavarde}) vidurkis didesnis`
    : `Antro studento (${studentas2.vardas} ${studentas2.pavarde}) vidurkis didesnis`
);

// 9

const darzove = {
  rusis: "bulve",
  derlius: [150, 120, 232, 180, 150, 134],
  vidutinisDerlius: function () {
    let sum = 0;
    for (let metuDerlius of this.derlius) {
      sum += metuDerlius;
    }
    return sum / this.derlius.length;
  },
};
console.log("DARŽOVĖ", darzove, "\n");
console.log("Kasmetiniai derliai", darzove.derlius, "\n");
console.log("Derliaus vidurkis", darzove.vidutinisDerlius());

// 10

let telefonas = {
  pavadinimas: "Xiaomi Redmi Note 10",
  kodas: "XRN10",
  kaina: 449.99,
  kiekisSandelyje: 200,
  pardavus: function () {
    console.log(
      "Pardavus prekę galėtume uždirbti:",
      this.kaina * this.kiekisSandelyje
    );
  },
};
console.log("telefonas:", telefonas);
telefonas.pardavus();

// 11
let knygos = [
  { pavadinimas: "Knyga1", puslapiai: 350, autorius: "Autorius Autorevičius" },
  { pavadinimas: "Knyga2", puslapiai: 420, autorius: "Rašytojas Raševičius" },
  { pavadinimas: "Knyga3", puslapiai: 350, autorius: "Knygius Knygevičius" },
];
for (let knyga of knygos) {
  console.log(knyga);
}
console.log(knygos[0]);
console.log(knygos[1].puslapiai);

// 12
let prekes = [
  { pavadinimas: "stalas", kaina: 120, aukstis: 80 },
  { pavadinimas: "kėdė", kaina: 40, aukstis: 45 },
  { pavadinimas: "spintelė", kaina: 99, aukstis: 60 },
];
for (let preke of prekes) {
  console.log("Prekės pavadinimas:", preke.pavadinimas);
  console.log("Prekės kaina:", preke.kaina);
  console.log("Prekės aukštis", preke.aukstis);
}

// 13
let automobiliai = [
  { marke: "Audi", metai: 2005, spalva: "raudona" },
  { marke: "Opel", metai: 2007, spalva: "sidabrinė" },
  { marke: "BMW", metai: 2000, spalva: "juoda" },
];
for (let auto of automobiliai) {
  console.log("Automobilio markė:", auto.marke);
  console.log("Automobilio pagaminimo metai:", auto.metai);
  console.log(
    "Automobilio amžius:",
    new Date(Date.now()).getFullYear() - auto.metai
  );
}

// 14
let imones = [
  { pavadinimas: "Kelmarova", darbuotojai: 50, ikurta: 1990 },
  { pavadinimas: "Ratlankis.LT", darbuotojai: 12, ikurta: 2006 },
  { pavadinimas: "SkanuGardu", darbuotojai: 80, ikurta: 2014 },
];
let totalEmployees = 0;
for (let imone of imones) {
  totalEmployees += imone.darbuotojai;
  console.log(
    `Įmonė ${imone.pavadinimas} turi ${imone.darbuotojai} darbutoju(-s) ir yra įkurta ${imone.ikurta}`
  );
  console.log(
    "Įmonės amžius:",
    new Date(Date.now()).getFullYear() - imone.ikurta
  );
}
console.log(`Iš viso šios visos įmonės turi ${totalEmployees} darbuotojus`);

// 15
let ligonines = [
  {
    pavadinimas: "Lazdynų ligoninė",
    adresas: "Lazdynų gatvė 9",
    darbuotojai: 150,
    lankytojai: 4000,
  },
  {
    pavadinimas: "Centro ligoninė",
    adresas: "Kažkokia gatvė 6",
    darbuotojai: 80,
    lankytojai: 1000,
  },
  {
    pavadinimas: "Vaikų ligoninė",
    adresas: "Kažkokia kita gatvė 123",
    darbuotojai: 75,
    lankytojai: 1500,
  },
];
let darbuotaiSum;
for (let ligonine of ligonines) {
  console.log("Ligoninė:", ligonine.pavadinimas);
  console.log("Ligoninės adresas:", ligonine.adresas);
  darbuotaiSum += ligonine.darbuotojai;
}
console.log(
  "Vidutinis darbuotojų skaičius ligoninėse:",
  darbuotaiSum / ligonines.length
);

// 16
let studentai = [
  {
    vardas: "Tomas",
    pavarde: "Tomauskas",
    amzius: 21,
    pazymiai: [8, 7, 6, 8, 4, 10],
    studijuPrograma: "Inžinerija",
    kursas: 2,
  },
  {
    vardas: "Tadas",
    pavarde: "Tadauskas",
    amzius: 24,
    pazymiai: [10, 9, 8, 8, 7, 10],
    studijuPrograma: "Dailė",
    kursas: 4,
  },
  {
    vardas: "Timis",
    pavarde: "Timauskas",
    amzius: 20,
    pazymiai: [9, 7, 5, 8, 7, 10],
    studijuPrograma: "Architektūra",
    kursas: 1,
  },
];
let visiPazymiai = [];
let visuPazymiuSuma = 0;
for (let studentas of studentai) {
  console.log(
    `Studentas: ${studentas.vardas} ${studentas.pavarde}. Amžius: ${studentas.amzius}. Studijų programa: ${studentas.studijuPrograma}. Kursas: ${studentas.kursas}`
  );
  console.log("Studento pažymiai:", studentas.pazymiai);
  let gradeSum = 0;
  for (let grade of studentas.pazymiai) {
    gradeSum += grade;
    visiPazymiai.push(grade);
    visuPazymiuSuma += grade;
  }

  console.log(
    "Pažymių vidurkis:",
    (gradeSum / studentas.pazymiai.length).toFixed(2)
  );
}
console.log("----------------");
console.log(
  "Visų studentų pažymių vidurkis:",
  (visuPazymiuSuma / visiPazymiai.length).toFixed(2)
);

// 17

let parduotuve = {
  pavadinimas: "Pardavykla",
  adresas: "Adresu g. 18",
  darbuotojai: 20,
  prekes: [
    {
      pavadinimas: "Obuoliai",
      kodas: "OBL-01",
      kaina: 1.5,
      savikaina: 0.9,
      kiekis: 1000,
    },
    {
      pavadinimas: "Morkos",
      kodas: "MRK-02",
      kaina: 1.1,
      savikaina: 0.6,
      kiekis: 3500,
    },
    {
      pavadinimas: "Bananai",
      kodas: "BNN-03",
      kaina: 2.5,
      savikaina: 1.2,
      kiekis: 2500,
    },
  ],
};
console.log(parduotuve);
console.log("Prekės");
let prekesSum = 0;
let daugiausia = parduotuve.prekes[0];
let maziausia = parduotuve.prekes[0];
for (let preke of parduotuve.prekes) {
  prekesSum += preke.kiekis;
  console.log(preke.pavadinimas, "1kg kaina:", preke.kaina, "EUR");
  if (preke.kiekis > daugiausia.kiekis) {
    daugiausia = preke;
  } else if (preke.kiekis < maziausia.kiekis) {
    maziausia = preke;
  }
}
console.log("Parduotuvės visas prekių kiekis:", prekesSum);
console.log("Daugiausiai prekės turi:", daugiausia.pavadinimas);
console.log("Mažiausią prekių kiekį turi:", maziausia.pavadinimas);

// 18

let gyvunai = [
  { rusis: "Katinas", amzius: 13, vardas: "Runce" },
  { rusis: "Šuo", amzius: 5, vardas: "Spotas" },
  { rusis: "Papūga", amzius: 3, vardas: "Karamba" },
];
totalAge = 0;
for (let gyvunas of gyvunai) {
  totalAge += gyvunas.amzius;
  console.log(
    `Mano ${gyvunas.rusis} yra vardu: ${gyvunas.vardas} ir jam/jai yra ${gyvunas.amzius} metų(-ai)`
  );
}
console.log(`Vidutinis gyvūnų amžius yra ${totalAge / gyvunai.length}`);
