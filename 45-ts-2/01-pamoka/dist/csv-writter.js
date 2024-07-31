"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWritter = void 0;
const fs_1 = require("fs");
class CSVWritter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    pridėtiEilutę(values) {
        let eilutės = values.map(v => this.formuotiEilutę(v));
        this.csv += eilutės.join('\n');
        console.log(this.csv);
    }
    formuotiEilutę(m) {
        return this.stulpeliai.map(stul => m[stul]).join(',');
    }
    save(filemane) {
        (0, fs_1.appendFileSync)(filemane, this.csv);
        this.csv = '\n';
        console.log('File saved to', filemane);
    }
}
exports.CSVWritter = CSVWritter;
