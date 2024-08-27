import { Person } from "./Person";
import { Car } from "./Car";
import { ElectricCar } from "./ElectricCar";

// Create an instance of Person
const person = new Person("Alice", 30, "123-45-6789");
console.log(person.greet()); // Output: "Hello, my name is Alice and I am 30 years old."

// Create an instance of Car
const myCar = new Car("Toyota", "Corolla", 4);
console.log(myCar.getDescription()); // Output: "Toyota Corolla with 4 doors"

// Create an instance of ElectricCar
const myElectricCar = new ElectricCar("Tesla", "Model 3", 4, 350);
console.log(myElectricCar.getDescription()); // Output: "Tesla Model 3 with 4 doors and a battery life of 350 hours"

// Access and modify properties of ElectricCar
myElectricCar.battery = 400; // Update battery life
console.log(myElectricCar.battery); // Output: 400

myElectricCar.doors = 2; // Update number of doors
console.log(myElectricCar.getDescription()); // Output: "Tesla Model 3 with 2 doors and a battery life of 400 hours"

myElectricCar.doors = -1; // Invalid update, will trigger an error message

// Explanation:

// 1. **Simple Class**:
//    - The "Person" class demonstrates a basic class structure with both public and private members.
//    - It includes a constructor to initialize properties and methods for interacting with them.
//    - The "greet" method is public and accessible outside the class, while the "getSSN" method is private and used internally.

// 2. **Class Implementing an Interface**:
//    - The "Car" class implements the "Vehicle" interface, which requires the class to have "brand", "model", and a "getDescription" method.
//    - The "Car" class provides its own implementation of the "getDescription" method and manages its properties ("brand", "model", and "numDoors") with a public getter and setter for "numDoors".

// 3. **Class Extending an Abstract Class**:
//    - The "BaseVehicle" abstract class provides a base structure for vehicle types with shared properties and methods.
//    - It includes an abstract method "getDescription" that must be implemented by subclasses.
//    - The "ElectricCar" class extends "BaseVehicle" but does not implement the "Vehicle" interface.
//    - It provides its own implementation of "getDescription" using the "displayInfo" method from "BaseVehicle" and adds additional properties for "numDoors" and "batteryLife", with getters and setters to manage these properties.

// This structure demonstrates TypeScript's class features, including inheritance, abstract classes, and interfaces, for building a well-organized class hierarchy with varying levels of abstraction and functionality.
