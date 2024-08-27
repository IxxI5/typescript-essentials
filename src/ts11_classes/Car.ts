import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
  // Public properties
  brand: string;
  model: string;
  private numDoors: number;

  // Constructor to initialize properties
  constructor(brand: string, model: string, numDoors: number) {
    this.brand = brand;
    this.model = model;
    this.numDoors = numDoors;
  }

  // Implementation of Vehicle interface method
  getDescription(): string {
    return `${this.brand} ${this.model} with ${this.numDoors} doors`;
  }

  // Getter for numDoors
  get doors(): number {
    return this.numDoors;
  }

  // Setter for numDoors
  set doors(value: number) {
    if (value > 0) {
      this.numDoors = value;
    } else {
      console.error("Number of doors must be positive.");
    }
  }
}
