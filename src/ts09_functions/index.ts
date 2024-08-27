// index.ts

// Function Signature: Defines the structure of a function, including the parameter types and return type.
type GreetFunction = (name: string, age?: number) => string;

// Regular function syntax (non-arrow function) with Optional and Default Parameters, using signature enforcement
const greet: GreetFunction = function (name, age = 25): string {
  // The 'age' parameter is optional and has a default value of 25.
  if (age) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}! Your age is a mystery.`;
  }
};

// Normal Function without Signature Enforcement
function normalGreet(name: string, age?: number): string {
  // This function does not use a type alias for its signature.
  // The 'age' parameter is optional and has no default value.
  if (age !== undefined) {
    return `Hi, ${name}! You are ${age} years old.`;
  } else {
    return `Hi, ${name}! Your age is unknown.`;
  }
}

// Function Signature for a more complex function
type CalculateFunction = (a: number, b: number, operation?: string) => number;

// Arrow function with Optional and Default Parameters
const calculate: CalculateFunction = (a, b, operation = "add") => {
  // 'operation' is an optional parameter with a default value of "add".
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Unsupported operation");
  }
};

// Using the functions
console.log(greet("Alice")); // Output: Hello, Alice! You are 25 years old.
console.log(greet("Bob", 30)); // Output: Hello, Bob! You are 30 years old.

console.log(normalGreet("Charlie")); // Output: Hi, Charlie! Your age is unknown.
console.log(normalGreet("Dana", 40)); // Output: Hi, Dana! You are 40 years old.

console.log(calculate(10, 5)); // Output: 15 (default operation is "add")
console.log(calculate(10, 5, "subtract")); // Output: 5
console.log(calculate(10, 5, "multiply")); // Output: 50
console.log(calculate(10, 5, "divide")); // Output: 2

/*
Explanation:
1. Function Signatures:
   - "GreetFunction" and "CalculateFunction" are examples of function signatures in TypeScript.
   - A function signature defines the structure of a function, specifying the types of its parameters and the type of its return value.
   - For instance, "GreetFunction" expects a string as the first parameter, an optional number as the second parameter, and returns a string.
   - The "greet" function is declared with the type "GreetFunction", which enforces that it must match this signature.

2. Regular Function Syntax:
   - The "greet" function is defined using the regular function syntax (non-arrow function) with the "function" keyword.
   - This syntax explicitly declares the function's name and binds "this" when applicable, though "this" is not used in this example.
   - This function uses a function signature for enforcement, ensuring it matches the expected type.

3. Normal Function without Signature Enforcement:
   - The "normalGreet" function is defined without using a function signature type alias.
   - It manually handles the optional "age" parameter but does not enforce the function signature via a type alias.
   - It does not have a default value for "age" and uses a simple check for undefined.

4. Optional and Default Parameters:
   - In the "greet" function, the "age" parameter is optional.
   - If the caller doesn't provide this parameter, TypeScript will assign it the default value of 25 ("age = 25").
   - Similarly, in the "calculate" function, the "operation" parameter is optional and defaults to "add" if not provided.

5. Arrow Functions:
   - The "calculate" function is defined using the arrow function syntax (=>).
   - Arrow functions provide a more concise syntax for writing functions and automatically bind "this" to the context in which they were defined, though in this example, we don't use "this".
   - The structure is more modern and is preferred in many contexts due to its brevity and clarity.
*/
