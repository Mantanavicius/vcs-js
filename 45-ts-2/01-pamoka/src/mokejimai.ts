import { CSVWritter } from "./csv-writter"

interface Mokėjimas {
    id: number
    suma: number
    gavėjas: string
    paskirtis: string
}

const paymentWriter = new CSVWritter<Mokėjimas>(['id', 'suma', 'gavėjas', 'paskirtis'])

paymentWriter.pridėtiEilutę([
    {id: 1, suma: 30, gavėjas: 'Bronius Broniauskas', paskirtis: 'dovana'},
    {id: 2, suma: 160, gavėjas: 'Kostas Kostauskas', paskirtis: 'programavimo konsultacija'}
])

paymentWriter.save('./data/mokejimai.csv')