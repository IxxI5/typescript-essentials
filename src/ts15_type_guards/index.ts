// index.ts
// Demonstration of type guards using typeof, instanceof, and custom type guards.

// Define a class Animal
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Define a class Dog that extends Animal
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} barks!`);
  }
}

// Define a class Cat that extends Animal
class Cat extends Animal {
  color: string;

  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }

  meow(): void {
    console.log(`${this.name} meows!`);
  }
}

// A function that uses 'typeof' for primitive type checking
function processInput(input: string | number): void {
  if (typeof input === "string") {
    console.log(`Processing a string: ${input.toUpperCase()}`); // Processing a string: HELLO
  } else if (typeof input === "number") {
    console.log(`Processing a number: ${input.toFixed(2)}`); // Processing a number: 42.00
  }
}

// Explanation for 'typeof' type guard:
// 'typeof' is used to differentiate between primitive types like "string" and "number".
// In the "processInput" function, "typeof" is used to check whether the "input" is a "string" or a "number",
// allowing us to handle each type accordingly.

// A function that uses 'instanceof' for checking if an object is an instance of a class
function interactWithAnimal(animal: Animal): void {
  if (animal instanceof Dog) {
    animal.bark(); // Safe to call bark because animal is known to be a Dog
  } else if (animal instanceof Cat) {
    animal.meow(); // Safe to call meow because animal is known to be a Cat
  } else {
    console.log(`${animal.name} is a generic animal.`);
  }
}

// Explanation for 'instanceof' type guard:
// 'instanceof' is used to check if an object is an instance of a specific class.
// In the "interactWithAnimal" function, "instanceof" is used to check if the "animal" is an instance of "Dog" or "Cat",
// allowing us to safely call methods specific to those classes.

// Custom type guard to check if an object is of type Dog
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

// Custom type guard to check if an object is of type Cat
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

// Explanation for custom type guards:
// Custom type guards are functions that return a boolean and have a special return type predicate ("animal is Dog")
// to narrow the type within a condition.
// The "isDog" and "isCat" functions are custom type guards. They check for the presence of specific methods
// ("bark" and "meow", respectively) to determine the exact type of the "animal" parameter.
// This ensures that within the guarded block, TypeScript knows the exact type, allowing safe access to specific properties or methods.

// A function that uses custom type guards
function interactWithAnimalCustom(animal: Animal): void {
  if (isDog(animal)) {
    animal.bark(); // Safe to call bark because isDog type guard confirms it's a Dog
  } else if (isCat(animal)) {
    animal.meow(); // Safe to call meow because isCat type guard confirms it's a Cat
  } else {
    console.log(`${animal.name} is a generic animal.`);
  }
}

// Example Usage

// Using typeof
processInput("hello"); // Output: Processing a string: HELLO
processInput(42); // Output: Processing a number: 42.00

// Using instanceof
const myDog = new Dog("Buddy", "Golden Retriever");
const myCat = new Cat("Whiskers", "Black");

interactWithAnimal(myDog); // Output: Buddy barks!
interactWithAnimal(myCat); // Output: Whiskers meows!

// Using custom type guards
interactWithAnimalCustom(myDog); // Output: Buddy barks!
interactWithAnimalCustom(myCat); // Output: Whiskers meows!
