class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Generic animal sound");
    }
  }
  
  class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name); // Call the constructor of the base class
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Woof!");
    }
  }
  
  const dog = new Dog("Buddy", "Golden Retriever");
  console.log(dog.name); // Output: Buddy
  console.log(dog.breed); // Output: Golden Retriever
  dog.makeSound(); // Output: Woof!
  dog.makeSound(); // Output: Generic animal sound