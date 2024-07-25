const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let projects = [
  {
    id: 1,
    adresas: "Vilniaus g. 32-12, Vilnius",
    tipas: "butas",
    kvadratura: 84,
    privalumai: ["šildomos grindys", "privatus parkingas", "puiki lokacija"],
    kaina: 250000,
  },
  {
    id: 2,
    adresas: "Šaulių g. 14, Šiauliai",
    tipas: "namas",
    kvadratura: 130,
    privalumai: ["kondicionierius", "daug erdvės", "arti gamtos"],
    kaina: 300000,
  },
  {
    id: 3,
    adresas: "Tauro g. 12-2, Kaunas",
    tipas: "butas",
    kvadratura: 65,
    privalumai: ["naujas", "privatus parkingas", "puiki lokacija"],
    kaina: 150000,
  },
  {
    id: 4,
    adresas: "Taško g. 5, Klaipėda",
    tipas: "namas",
    kvadratura: 100,
    privalumai: ["kondicionierius", "puiki lokacija", "Daug erdvės"],
    kaina: 280000,
  },
  {
    id: 5,
    adresas: "Trakų g. 55-48, Kaunas",
    tipas: "butas",
    kvadratura: 105,
    privalumai: ["šildomos grindys", "privatus parkingas", "arti gamtos"],
    kaina: 320000,
  },
  {
    id: 6,
    adresas: "Gegūnio g. 12, Vilnius",
    tipas: "namas",
    kvadratura: 90,
    privalumai: ["kondicionierius", "puiki lokacija", "didelis kiemas"],
    kaina: 250000,
  },
];

const keysMatchArray = (obj, keysArray) => {
  const objKeys = Object.keys(obj);
  return objKeys.every((key) => keysArray.includes(key));
};

app.get("/", (req, res) => {
  res.send("Sveiki atvykę į NT projektų serverį");
});

app.get("/places", (req, res) => {
  res.send(projects);
});
app.get("/places/:id", (req, res) => {
  res.send(projects.filter((project) => project.id == req.params.id));
});

app.post("/places", (req, res) => {
  let { adresas, tipas, kvadratura, privalumai, kaina } = req.body;
  if (
    typeof adresas === "string" &&
    adresas &&
    typeof tipas === "string" &&
    tipas &&
    typeof kvadratura === "number" &&
    kvadratura &&
    Array.isArray(privalumai) &&
    privalumai.length > 0 &&
    typeof kaina === "number" &&
    kaina
  ) {
    let newProject = {
      id: projects.length + 1,
      adresas,
      tipas,
      kvadratura,
      privalumai,
      kaina,
    };
    projects.push(newProject);

    res.send({
      message: "Naujas projektas sukurtas",
      data_received: newProject,
    });
  } else {
    res.send({
      message: `Nepavyko sukurti naujo projekto, jūsų objektas turi turėti šias reikšmes:
      {adresas:string,tipas:string,kvadratura:number,privalumai:array,kaina:number}`,
      data_received: req.body,
    });
  }
});

app.patch("/places/:id", (req, res) => {
  let update = req.body;
  const project = projects.find((project) => project.id == req.params.id);
  const validFields = ["adresas", "tipas", "kvadratura", "privalumai", "kaina"];
  if (project) {
    if (keysMatchArray(update, validFields)) {
      Object.assign(project, update);
      res.send({
        message: "Projektų informacija atnaujinta",
        updated_project: project,
      });
    } else {
      res.send({
        message: `Nepavyko atnaujinti projekto, jūsų objektas gali turėti šias reikšmes:
        {adresas:string,tipas:string,kvadratura:number,privalumai:array,kaina:number}`,
        data_received: req.body,
      });
    }
  } else {
    res.send({
      message: "Projektas nebuvo rastas",
    });
  }
});

app.delete("/places/:id", (req, res) => {
  let id = req.params.id;
  if (id) {
    projects = projects.filter((project) => project.id != id);
    res.send({
      message: "Projektas pašalintas",
      deleted_id: id,
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
