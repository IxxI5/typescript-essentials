export class Person {
  // Public properties
  name: string;
  age: number;

  // Private property
  private socialSecurityNumber: string;

  // Constructor to initialize properties
  constructor(name: string, age: number, socialSecurityNumber: string) {
    this.name = name;
    this.age = age;
    this.socialSecurityNumber = socialSecurityNumber;
  }

  // Public method
  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Private method
  private getSSN(): string {
    return this.socialSecurityNumber;
  }
}
