import { CSVWritter } from "./csv-writter";

interface Darbuotojas {
    id: number
    vardas: string
    pareigos: string
    atlyginimas: number
}

const employeeWriter = new CSVWritter<Darbuotojas>(['id', 'vardas', 'pareigos', 'atlyginimas'])

employeeWriter.pridėtiEilutę([
    {id: 1, vardas: 'Viktoras', atlyginimas: 3000, pareigos: 'verslo analitikas'},
    {id: 2, vardas: 'Sandra', atlyginimas: 1800, pareigos: 'prekybos vadybininkė'},
    {id: 3, vardas: 'Silvija', atlyginimas: 4000, pareigos: 'vadovė'},
    {id: 4, vardas: 'Darius', atlyginimas: 1300, pareigos: 'vairuotojas'},
])

employeeWriter.save('./data/darbuotojai.csv')