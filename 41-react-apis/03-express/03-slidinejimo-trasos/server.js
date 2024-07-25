const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let trasos = [
  {
    id: 1,
    salis: "Italija",
    miestas: "Florencija",
    ilgis: 20,
    sudetingumas: 3,
  },
  {
    id: 2,
    salis: "Japonija",
    miestas: "Osaka",
    ilgis: 10,
    sudetingumas: 5,
  },
  {
    id: 3,
    salis: "Lenkija",
    miestas: "Zakopane",
    ilgis: 2,
    sudetingumas: 2,
  },
  {
    id: 4,
    salis: "Argentina",
    miestas: "Buenos Aires",
    ilgis: 5,
    sudetingumas: 4,
  },
  {
    id: 5,
    salis: "Austrija",
    miestas: "Viena",
    ilgis: 6,
    sudetingumas: 1,
  },
];

const validKeys = ["id", "salis", "miestas", "ilgis", "sudetingumas"];
const keyValidation = (obj) => {
  const objKeys = Object.keys(obj);
  return objKeys.every((key) => validKeys.includes(key));
};

app.get("/", (req, res) => {
  res.send("Slidinėjimo trasų serveris");
});

app.get("/tracks", (req, res) => {
  res.send(trasos);
});

app.get("/tracks/:id", (req, res) => {
  res.send(trasos.filter((trasa) => trasa.id == req.params.id));
});

app.get("/tracks/difficulty/:number", (req, res) => {
  res.send(trasos.filter((trasa) => trasa.sudetingumas == req.params.number));
});

app.get("/tracks/length/:number", (req, res) => {
  res.send(trasos.filter((trasa) => trasa.ilgis > req.params.number));
});

app.get("/tracks/country/:countryName", (req, res) => {
  res.send(
    trasos.filter(
      (trasa) =>
        trasa.salis.toLowerCase() == req.params.countryName.toLowerCase()
    )
  );
});

app.post("/tracks", (req, res) => {
  let { salis, miestas, ilgis, sudetingumas } = req.body;
  if (
    keyValidation(req.body) &&
    typeof salis === "string" &&
    salis &&
    typeof miestas === "string" &&
    miestas &&
    typeof ilgis === "number" &&
    ilgis &&
    typeof sudetingumas === "number" &&
    sudetingumas
  ) {
    let newTrack = {
      id: trasos.length + 1,
      salis,
      miestas,
      ilgis,
      sudetingumas,
    };
    trasos.push(newTrack);
    res.send(newTrack);
  } else {
    res.send(
      "Neteisingi duomenys, turite ivesti sali, miesta, ilgi bei sudetingumo lygi"
    );
  }
});

app.put("/tracks/:id", (req, res) => {
  let { salis, miestas, ilgis, sudetingumas } = req.body;
  if (
    keyValidation(req.body) &&
    typeof salis === "string" &&
    salis &&
    typeof miestas === "string" &&
    miestas &&
    typeof ilgis === "number" &&
    ilgis &&
    typeof sudetingumas === "number" &&
    sudetingumas
  ) {
    let updatedTrack = {
      id: req.params.id,
      salis,
      miestas,
      ilgis,
      sudetingumas,
    };
    trasos = trasos.map((trasa) => {
      if (trasa.id == req.params.id) {
        return updatedTrack;
      } else {
        return trasa;
      }
    });
    res.send(updatedTrack);
  } else {
    res.send(
      "Neteisingi duomenys, turite ivesti sali, miesta, ilgi bei sudetingumo lygi"
    );
  }
});

app.delete("/tracks/:id", (req, res) => {
  let deletedTrack = trasos.filter((trasa) => trasa.id == req.params.id);
  trasos = trasos.filter((trasa) => trasa.id != req.params.id);
  res.send(deletedTrack);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
