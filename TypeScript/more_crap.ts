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
      // super(name)
      super("I am an animal")
      // this.name = "I am a dog"
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


  enum CardinalDirections {
    North = 1,
    East = 2,
    South = 3,
    West = 4
  }
  
  const pizza : CardinalDirections = CardinalDirections.North

  interface Point {
    x: number;
    y: number;
  }
  
  interface SetPoint {
    (x: number, y: number): void;
  }

  type Pointy = {
    x: number;
    y: number;
  };



  // enums

  // class inheiritance

  enum ConstraintTypes {
    DISTANCE = "DISTANCE",
    WEATHER = "WEATHER",
  }
  