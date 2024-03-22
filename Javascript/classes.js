class Pizza{
    constructor(cheese, toppings){
        this.cheese = cheese;
        this.toppings = toppings
    }

      printNumber = () =>{
        console.log("printing number")
     }

     #printNumberPrivate = () =>{
        console.log("printing privately")
     }

     static staticFunc = () =>{
        console.log("static baby")
     }

      printNumberPublic = () =>{
        this.#printNumberPrivate()
        Pizza.staticFunc()
     }
}

const pizza = new Pizza("mozerella", "pepperoni")
console.log(pizza.cheese)
console.log(pizza.toppings)
pizza.printNumber()
pizza.printNumberPublic()
Pizza.staticFunc()