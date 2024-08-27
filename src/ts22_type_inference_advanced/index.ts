// index.ts
// Type Inference in Complex Scenarios

// TypeScript code demonstrating type inference in complex scenarios
// focusing on contextual typing and inferred types with generics.

type EventHandler = (event: { type: string; payload?: any }) => void;

// Contextual Typing Example
function registerEventHandler(handler: EventHandler) {
  // Here, TypeScript infers the type of "event" parameter based on the "EventHandler" type.
  const exampleEvent = { type: "click", payload: { x: 10, y: 20 } };
  handler(exampleEvent);
}

// Using the function with a handler - the event parameter is contextually typed
registerEventHandler((event) => {
  // "event" is inferred to have the type "{ type: string; payload?: any }"
  console.log(event.type); // Correctly inferred as string
  if (event.payload) {
    console.log(event.payload.x, event.payload.y); // Correctly inferred as number
  }
});

// Inferred Types with Generics Example
function identity<T>(arg: T): T {
  // TypeScript infers the type of "T" based on the argument passed
  return arg;
}

// When calling the identity function, TypeScript infers the type automatically
const numberResult = identity(42); // T is inferred as number
const stringResult = identity("Hello, TypeScript!"); // T is inferred as string

// TypeScript also infers the type when using generics in more complex scenarios
function mapArray<T, U>(arr: T[], mapFn: (item: T) => U): U[] {
  return arr.map(mapFn);
}

// Using mapArray with inferred types
const numbers = [1, 2, 3];
const strings = mapArray(numbers, (num) => num.toString()); // T is inferred as number, U as string

// The return type of "strings" is inferred as "string[]"
strings.forEach((str) => console.log(str)); // Correctly inferred as string

/** Output
 *  click
    10 20
    1
    2
    3
 */

/*
Explanation:

1. Contextual Typing:
   - The "registerEventHandler" function expects a parameter of type "EventHandler".
   - When we pass an inline function to "registerEventHandler", TypeScript infers the type of the "event" parameter
     based on the "EventHandler" type. This is an example of contextual typing, where the type is inferred from
     the surrounding context.

2. Inferred Types with Generics:
   - The "identity" function uses a generic type "T", which is inferred based on the argument passed when the function
     is called. This allows for flexible and type-safe functions.
   - In the "mapArray" function, TypeScript infers the types of both "T" and "U" based on the input array and the
     mapping function provided. This demonstrates how TypeScript can infer types in more complex scenarios involving
     generics.
*/
