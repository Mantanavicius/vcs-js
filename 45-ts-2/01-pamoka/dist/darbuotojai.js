"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_writter_1 = require("./csv-writter");
const employeeWriter = new csv_writter_1.CSVWritter(['id', 'vardas', 'pareigos', 'atlyginimas']);
employeeWriter.pridėtiEilutę([
    { id: 1, vardas: 'Viktoras', atlyginimas: 3000, pareigos: 'verslo analitikas' },
    { id: 2, vardas: 'Sandra', atlyginimas: 1800, pareigos: 'prekybos vadybininkė' },
    { id: 3, vardas: 'Silvija', atlyginimas: 4000, pareigos: 'vadovė' },
    { id: 4, vardas: 'Darius', atlyginimas: 1300, pareigos: 'vairuotojas' },
]);
employeeWriter.save('./data/darbuotojai.csv');
