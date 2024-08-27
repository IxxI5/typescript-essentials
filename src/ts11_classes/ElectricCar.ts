import { BaseVehicle } from "./BaseVehicle";

export class ElectricCar extends BaseVehicle {
  private numDoors: number;
  private batteryLife: number;

  constructor(
    brand: string,
    model: string,
    numDoors: number,
    batteryLife: number
  ) {
    super(brand, model);
    this.numDoors = numDoors;
    this.batteryLife = batteryLife;
  }

  // Implementation of the abstract method from BaseVehicle
  getDescription(): string {
    return `${this.displayInfo()} with ${
      this.numDoors
    } doors and a battery life of ${this.batteryLife} hours`;
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

  // Getter for batteryLife
  get battery(): number {
    return this.batteryLife;
  }

  // Setter for batteryLife
  set battery(value: number) {
    if (value >= 0) {
      this.batteryLife = value;
    } else {
      console.error("Battery life cannot be negative.");
    }
  }
}
