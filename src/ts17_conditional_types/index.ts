// index.ts

// Example demonstrating Conditional Types in TypeScript

// 1. Basic Syntax

// Define a conditional type that checks if a type is `string`.
// If it is, it resolves to 'String Type'; otherwise, it resolves to 'Other Type'.
type IsString<T> = T extends string ? "String Type" : "Other Type";

// Test cases for the basic syntax
type Test1 = IsString<string>; // 'String Type'
type Test2 = IsString<number>; // 'Other Type'
type Test3 = IsString<boolean>; // 'Other Type'

// Helper function to print the result of a type
function printType<T>(type: T) {
  console.log(type);
}

// We cannot directly print types in TypeScript, but we can simulate this by creating objects
// and logging their values to illustrate the types.

const example1: "String Type" = "String Type"; // Should match Test1
const example2: "Other Type" = "Other Type"; // Should match Test2
const example3: "Other Type" = "Other Type"; // Should match Test3

printType(example1); // Prints: String Type
printType(example2); // Prints: Other Type
printType(example3); // Prints: Other Type

// 2. Distributive Conditional Types

// Define a conditional type that applies to each element of a union type.
type ElementType<T> = T extends (infer U)[] ? U : T;

// Test cases for distributive conditional types

// For an array of strings, the ElementType will be string.
type TestArray1 = ElementType<string[]>; // string

// For an array of numbers, the ElementType will be number.
type TestArray2 = ElementType<number[]>; // number

// For a number (not an array), the ElementType will be number itself (because it's not an array).
type TestArray3 = ElementType<number>; // number

// Again, simulate printing these types
const arrayExample1: string = "string"; // Should match TestArray1
const arrayExample2: number = 42; // Should match TestArray2
const arrayExample3: number = 42; // Should match TestArray3

printType(arrayExample1); // Prints: string
printType(arrayExample2); // Prints: 42
printType(arrayExample3); // Prints: 42

// Explanation:
// - Basic Syntax: The conditional type `IsString<T>` checks if type `T` extends `string`.
//   If true, it results in 'String Type'; otherwise, it results in 'Other Type'.

// - Distributive Conditional Types: The conditional type `ElementType<T>` uses the `infer` keyword
//   to extract the type of elements in an array. If `T` is an array, it infers the element type `U`.
//   If `T` is not an array, it simply returns `T`.
