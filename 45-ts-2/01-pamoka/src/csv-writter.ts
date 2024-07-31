import {appendFileSync} from 'fs'

export class CSVWritter<T> {
    constructor(private stulpeliai: (keyof T)[]) {
        this.csv = this.stulpeliai.join(',') + '\n'
    }
    private csv: string

    pridėtiEilutę(values:T[]): void {
        let eilutės = values.map(v => this.formuotiEilutę(v))
        this.csv += eilutės.join('\n') 
        console.log(this.csv)
    }

    private formuotiEilutę(m: T): string {
        return this.stulpeliai.map(stul => m[stul]).join(',')
    }

    save(filemane: string): void {
        appendFileSync(filemane, this.csv)
        this.csv = '\n'

        console.log('File saved to', filemane)
        }
}

