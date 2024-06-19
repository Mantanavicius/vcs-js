let pasirinkimas = 1

switch (pasirinkimas){
    case 1 : console.log('laimėjote vandens'); break;
    case 2 : console.log('laimėjote limonadą'); break;
    case 3 : console.log('laimėjote arbatą'); break;
    case 4 : console.log('laimėjote kavą'); break;
    default: console.log('Neteisingas pasirinkimas')
}

let num1 = 2
let num2 = 14
let num3 = 3

switch(num1){
    case 1: console.log(num1+num2+num3); break;
    case 2: console.log(num2*num3); break;
    case 3: console.log(num1**2); break;
    default: console.log('Klaida');
}

let klaida = '404'

switch(klaida){
    case 'whoops!': console.log('We made a mistake.'); break;
    case '404': console.log('not found'); break;
    case 'syntax error': console.log('syntax error'); break;
    default: console.log('unknown error code');
}