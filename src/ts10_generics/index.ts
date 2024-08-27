// index.ts

// Generic Interface
interface List<T> {
  add(item: T): void;
  remove(item: T): void;
  getAll(): T[];
}

// Generic Class implementing the interface
class ItemList<T> implements List<T> {
  private items: T[] = [];

  // Add an item to the list
  add(item: T): void {
    this.items.push(item);
  }

  // Remove an item from the list
  remove(item: T): void {
    this.items = this.items.filter((i) => i !== item);
  }

  // Retrieve all items from the list
  getAll(): T[] {
    return this.items;
  }
}

// Generic Function without Constraints
function getFirstElement<T>(items: T[]): T | undefined {
  // No constraint on T; this function works with any type of array
  if (items.length > 0) {
    return items[0];
  }
  return undefined;
}

// Usage Examples:

// Generic List for strings
const stringList = new ItemList<string>();
stringList.add("apple");
stringList.add("banana");
console.log(stringList.getAll()); // Output: ["apple", "banana"]
stringList.remove("apple");
console.log(stringList.getAll()); // Output: ["banana"]

// Generic List for numbers
const numberList = new ItemList<number>();
numberList.add(1);
numberList.add(2);
console.log(numberList.getAll()); // Output: [1, 2]
numberList.remove(1);
console.log(numberList.getAll()); // Output: [2]

// Using the generic function without constraint
const firstString = getFirstElement(["hello", "world"]);
console.log(firstString); // Output: "hello"

const firstNumber = getFirstElement([10, 20, 30]);
console.log(firstNumber); // Output: 10

/*
Explanation:
1. Generic Interfaces:
   - The List<T> interface is a generic interface that defines methods for managing a list of items of type T.
   - T is a placeholder for any type that will be specified when the interface is implemented or used.

2. Generic Classes:
   - The ItemList<T> class implements the List<T> interface.
   - This class manages a list of items of type T and provides methods to add, remove, and retrieve items.
   - The generic class allows the same class to be used for different types of items (e.g., strings, numbers).

3. Generic Functions:
   - The getFirstElement<T> function is a generic function that takes an array of items of type T and returns the first element.
   - This function does not have any constraints on T, meaning it can handle arrays of any type.

4. No Constraints:
   - In this example, the getFirstElement function does not use any constraints. It works with arrays of any type, without enforcing that T has specific properties or methods.
   - This flexibility allows the function to handle various types but does not enforce any additional type safety beyond the basic type parameter T.

The example demonstrates how generics can be used to create flexible and reusable components without imposing additional constraints. This approach is useful when you need to work with a variety of types without restricting the type parameter T.
*/
