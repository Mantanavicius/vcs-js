"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_writter_1 = require("./csv-writter");
const paymentWriter = new csv_writter_1.CSVWritter(['id', 'suma', 'gavėjas', 'paskirtis']);
paymentWriter.pridėtiEilutę([
    { id: 1, suma: 30, gavėjas: 'Bronius Broniauskas', paskirtis: 'dovana' },
    { id: 2, suma: 160, gavėjas: 'Kostas Kostauskas', paskirtis: 'programavimo konsultacija' }
]);
paymentWriter.save('./data/mokejimai.csv');
