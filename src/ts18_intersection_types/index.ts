// index.ts

/*
    Intersection types in TypeScript allow you to combine multiple types into one. This can be particularly useful for creating complex types that need to adhere to multiple constraints simultaneously. 
 */

// Define the basic types that will be used in intersection
interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
  postalCode: string;
}

// Combine Person and Address types using intersection (&)
type PersonWithAddress = Person & Address;

// Create a function that requires a PersonWithAddress type
function printPersonDetails(person: PersonWithAddress): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(
    `Address: ${person.street}, ${person.city}, ${person.postalCode}`
  );
}

// Create an object that matches the PersonWithAddress type
const personDetails: PersonWithAddress = {
  name: "John Doe",
  age: 30,
  street: "123 Main St",
  city: "Anytown",
  postalCode: "12345",
};

// Call the function with the object
printPersonDetails(personDetails);

/** Output:
    Name: John Doe
    Age: 30
    Address: 123 Main St, Anytown, 12345
 */
