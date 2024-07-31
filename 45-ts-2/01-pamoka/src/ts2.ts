type Base = 'clasic' | 'thick' | 'thin' | 'garlic'

interface HasFormatter{
    format(): string

}
abstract class MenuItem implements HasFormatter {
    constructor(private title: string,private price: number){
        this.title= title
        this.price = price
    }
    get details(): string {
        return `${this.title} - $${this.price}`
    }
    abstract format(): string
}

class Pizza extends MenuItem{
    constructor(title: string,price: number){
        super(title,price)
    }
    private base: Base = 'clasic'
    private toppings: string[] = []

    addTopping (topping: string):void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string):void {
        this.toppings = this.toppings.filter(t => t !== topping)
    }
    selectBase(b: Base):void {
        this.base = b
    }
    format():string{
        let formatted = this.details + '\n'

        //base 
        formatted += `Pizza on a ${this.base} base `

        //toppings
        if(this.toppings.length <1){
            formatted += 'with no toppings'
        }
        if(this.toppings.length > 0){
            formatted += `with ${this.toppings.join(', ')}`
        }
        return formatted
    }
}

const pizza = new Pizza('Domino special', 15)
pizza.addTopping('mushrooms')
pizza.addTopping('pepperonni')
pizza.addTopping('olives')
pizza.removeTopping('olives')
pizza.selectBase('thin')

console.log(pizza)

const pizza2 = new Pizza('Dodo special', 14)

function addMushroomstoPizzas(pizzas: Pizza[]):void {
    for(const p of pizzas) {
        p.addTopping('mushrooms')
    }
}

function printMenuItem(item:MenuItem):void{
    console.log(item.details)
}

function printFormated(value: HasFormatter):void{
    console.log(value.format())
}


addMushroomstoPizzas([pizza, pizza2])
printMenuItem(pizza)
printFormated(pizza)
console.log(pizza, pizza2)