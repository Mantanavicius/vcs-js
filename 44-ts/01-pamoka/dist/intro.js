"use strict";
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}
const pirmaSpalva = randomColor();
const antraSpalva = randomColor();
console.log(pirmaSpalva);
console.log(antraSpalva);
const pirmasMokinys = {
    name: 'Petras',
    grade: 8
};
function formatMokinys(mokinys) {
    console.log(`${mokinys.name} gavo pažymį: ${mokinys.grade}`);
}
formatMokinys(pirmasMokinys);
formatMokinys({ name: "Vaida", grade: 8 });
let id;
id = 1;
id = '2';
let email = null;
email = "tomas@tomauskas.lt";
email = null;
function keistiIdTipa(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const pirmasId = keistiIdTipa(1);
const antrasId = keistiIdTipa('2');
console.log(pirmasId, antrasId);
const kazkas = { quantity: 300 };
function printQuanitity(item) {
    console.log(`The quanity of the item is ${item.quantity}`);
}
const vaisius = { name: 'mangas', quantity: 50 };
const transportas = { type: "autobusas", quantity: 12 };
const asmuo = { name: "Tomas", age: 25 };
printQuanitity(vaisius);
printQuanitity(transportas);
printQuanitity(asmuo);
printQuanitity({ quantity: 40, svoris: 33 });
let skaiciavimai = [];
function sudetis(a, b) {
    return a + b;
}
function daugyba(pirmas, antras) {
    return pirmas * antras;
}
function kvadratu(num) {
    return num * num;
}
function sujungtiSkaicius(num1, num2) {
    return `${num1}${num2}`;
}
skaiciavimai.push(sudetis);
skaiciavimai.push(daugyba);
skaiciavimai.push(kvadratu);
skaiciavimai.push(sujungtiSkaicius);
const pirmas = {
    name: 'kvadratas',
    calcArea(ilgis) {
        return ilgis * ilgis;
    }
};
const antras = {
    name: 'apskritimas',
    calcArea(r) {
        return Math.PI * r ^ 2;
    }
};
pirmas.calcArea(5);
antras.calcArea(10);
const user = {
    id: 1,
    format() {
        return `Šis klientas turi id: ${this.id}`;
    }
};
const bill = {
    id: 2,
    amount: 50,
    server: "Jurga",
    format() {
        return `Čekio, kurio id: ${this.id}, mokėtina suma: ${this.amount} €`;
    }
};
function printFormatted(value) {
    console.log(value.format());
}
printFormatted(user);
printFormatted(bill);
function printBill(bill) {
    console.log('Padavėjas', bill.server);
    console.log(bill.format());
}
printBill(user);
printBill(bill);
const pirmasas = {
    id: 1,
    firstName: 'Saulius'
};
const antrasas = {
    id: "2",
    firstName: 'Milda',
    email: 'milda@swedbank.lt'
};
const trecias = {
    email: 'dainius@seb.lt'
};
function printUser(user) {
    console.log(user.id, user.firstName, user.email);
}
printUser(pirmasas);
printUser(antrasas);
printUser(trecias);
