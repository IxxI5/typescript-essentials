export abstract class BaseVehicle {
  protected brand: string;
  protected model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  // Abstract method to be implemented in derived classes
  abstract getDescription(): string;

  // Protected method that can be used by derived classes
  protected displayInfo(): string {
    return `${this.brand} ${this.model}`;
  }
}
