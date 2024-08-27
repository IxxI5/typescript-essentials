// index.ts

// Utility Library for Math Operations

// Function Overloading
// The "calculate" function is overloaded to handle different types of inputs:
// - Two numbers to be added
// - Two strings to be concatenated
// - An array of numbers to be summed

function calculate(a: number, b: number): number;
function calculate(a: string, b: string): string;
function calculate(a: number[]): number;
function calculate(a: any, b?: any): any {
  if (Array.isArray(a)) {
    // If an array is provided, return the sum of the array
    return a.reduce((acc, curr) => acc + curr, 0);
  }
  if (typeof a === "number" && typeof b === "number") {
    // If both arguments are numbers, return their sum
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    // If both arguments are strings, concatenate them
    return a + b;
  }
  // If none of the above conditions match, throw an error
  throw new Error("Invalid arguments");
}

// Higher-Order Function
// The "applyOperation" function is a higher-order function because it takes another
// function as an argument. This function ("operation") is then applied to two numbers.

function applyOperation(
  operation: (x: number, y: number) => number,
  a: number,
  b: number
): number {
  return operation(a, b);
}

// Example operations to use with the higher-order function
const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;

// Using the overloaded "calculate" function
console.log(calculate(5, 10)); // Output: 15 (number + number)
console.log(calculate("Hello, ", "World!")); // Output: "Hello, World!" (string + string)
console.log(calculate([1, 2, 3, 4, 5])); // Output: 15 (sum of array)

// Using the higher-order "applyOperation" function
console.log(applyOperation(add, 5, 10)); // Output: 15 (addition operation)
console.log(applyOperation(multiply, 5, 10)); // Output: 50 (multiplication operation)

/* 
Explanation:

- Function Overloading:
  - The "calculate" function demonstrates how TypeScript's function overloading works by defining multiple versions of the function with different signatures.
  - Inside the function, we use conditional logic to handle different cases: summing an array, adding two numbers, or concatenating two strings.

- Higher-Order Functions:
  - The "applyOperation" function takes a function as an argument and applies it to two numbers. This is an example of a higher-order function, which enhances code reusability and flexibility.
  - You can pass different operations like "add" or "multiply" to "applyOperation", allowing you to easily change the behavior of the function without modifying its core logic.
*/
