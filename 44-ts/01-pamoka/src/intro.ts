type Rgb = [number, number, number]

function randomColor():Rgb{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

const pirmaSpalva = randomColor();
const antraSpalva = randomColor()
console.log(pirmaSpalva);
console.log(antraSpalva);

type Mokinys = {
    name: string,
    grade: number
}

const pirmasMokinys: Mokinys = {
    name: 'Petras',
    grade: 8
}

function formatMokinys(mokinys: Mokinys):void {
    console.log(`${mokinys.name} gavo pažymį: ${mokinys.grade}`);
}

formatMokinys(pirmasMokinys);
formatMokinys({name:"Vaida", grade:8})

let id: number|string
id = 1
id = '2'

let email: string|null = null
email = "tomas@tomauskas.lt"
email = null



type Id = number | string
function keistiIdTipa(id: Id): Id {
    if(typeof id === 'string'){
        return parseInt(id)
    } else {
        return id.toString()
    }
}
const pirmasId = keistiIdTipa(1)
const antrasId = keistiIdTipa('2')

console.log(pirmasId, antrasId)

interface hasQuantity {
    quantity: number
}

const kazkas:hasQuantity = {quantity: 300}

function printQuanitity(item: hasQuantity):void {
console.log(`The quanity of the item is ${item.quantity}`)}

const vaisius = {name: 'mangas', quantity: 50}
const transportas = {type: "autobusas", quantity: 12}
const asmuo = {name: "Tomas", age: 25}

printQuanitity(vaisius)
printQuanitity(transportas)
printQuanitity(asmuo)
printQuanitity({quantity: 40, svoris: 33})

type Skaiciuotuvas = (num1:number, num2: number) => number


let skaiciavimai: Skaiciuotuvas[]=[]

function sudetis(a:number, b:number){
    return a+b
}

function daugyba(pirmas:number, antras:number){
    return pirmas*antras
}

function kvadratu(num:number){
    return num*num
}

function sujungtiSkaicius(num1:number, num2:number){
    return `${num1}${num2}`
}

skaiciavimai.push(sudetis)
skaiciavimai.push(daugyba)
skaiciavimai.push(kvadratu)
skaiciavimai.push(sujungtiSkaicius)


interface HasArea {
    name: string,
    calcArea(a:number):number
}

const pirmas: HasArea = {
    name: 'kvadratas',
    calcArea(ilgis:number){
        return ilgis*ilgis
    }
}

const antras: HasArea = {
    name: 'apskritimas',
    calcArea(r:number){
        return Math.PI*r^2
    }
}
pirmas.calcArea(5)
antras.calcArea(10)

interface HasFormatter {
    format():string
}

interface Bill extends HasFormatter {
    id: string | number
    amount: number
    server: string
}

const user = {
    id: 1,
    format(): string{
        return `Šis klientas turi id: ${this.id}`
    }
}

const bill = {
    id: 2,
    amount: 50,
    server: "Jurga",
    format(): string{
        return `Čekio, kurio id: ${this.id}, mokėtina suma: ${this.amount} €`
    }
}

function printFormatted(value: HasFormatter):void{
    console.log(value.format())
}

printFormatted(user)
printFormatted(bill)

function printBill(bill: Bill):void{
    console.log('Padavėjas', bill.server)
    console.log(bill.format())
}

printBill(user)
printBill(bill)

type Person = {
    id: string|number
    firstName: string
}
const pirmasas = {
    id: 1,
    firstName: 'Saulius'
}

type User = Person & {
    email: string
}

const antrasas = {
    id: "2",
    firstName: 'Milda',
    email: 'milda@swedbank.lt'
}

const trecias = {
    email: 'dainius@seb.lt'
}

function printUser(user:User){
    console.log(user.id, user.firstName, user.email)
}

printUser(pirmasas)
printUser(antrasas)
printUser(trecias)