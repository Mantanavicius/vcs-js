const darboValandos = 8;
let kepalaiPerValanda = 4;
let darbuotojai = 2;
let savikaina = 1.25
let kaina = 2
let uzsakymai = 140

let kepalaiPerDiena = darboValandos * kepalaiPerValanda * darbuotojai
console.log(`Iš viso iškeps: ${kepalaiPerDiena}`)

let dienosSavikaina = kepalaiPerDiena * savikaina
let dienosPajamos = kepalaiPerDiena * kaina
let dienosPelnas = dienosPajamos - dienosSavikaina
console.log(`Dienos savikaina: ${dienosSavikaina}€`)
console.log(uzsakymai <= kepalaiPerDiena ? `Dienos pajamos: ${dienosPajamos}€` : 'užsakymas nebuvo įvykdytas');
console.log(uzsakymai <= kepalaiPerDiena ? `Dienos pelnas: ${dienosPelnas}€`: 'užsakymas nebuvo įvykdytas');


if(kepalaiPerDiena >= uzsakymai){
    console.log('Dienos užsakymai išpildyti')
}
else{
    console.log(`Per dieną nespėjo išpildyti: ${uzsakymai - kepalaiPerDiena} užsakymų`)
}

