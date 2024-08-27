// index.ts
// Real-World Scenario: A utility to work with deeply nested objects, allowing for safe access and flattening.

///////////////////////////
// 1. Conditional Types with Generics
///////////////////////////

// Utility type to safely access a deeply nested property using a tuple of keys.
type NestedAccess<T, Keys extends any[]> = Keys extends [
  infer First,
  ...infer Rest
] // Check if there are keys left in the tuple
  ? First extends keyof T // If the first key is valid
    ? Rest extends [] // If there are no more keys left
      ? T[First] // Return the type at this level
      : NestedAccess<T[First], Rest> // Recurse into the next level
    : never // Invalid key
  : T; // Return the original type if no keys are provided

// Example usage of NestedAccess
type ExampleObject = {
  user: {
    profile: {
      name: string;
      age: number;
    };
    settings: {
      theme: string;
      notifications: boolean;
    };
  };
};

type UserNameType = NestedAccess<ExampleObject, ["user", "profile", "name"]>; // string
type UserThemeType = NestedAccess<ExampleObject, ["user", "settings", "theme"]>; // string

///////////////////////////
// 2. Recursive Types
///////////////////////////

// Utility type to flatten a deeply nested object into a single-level object with concatenated keys.
type Flatten<T extends object> = {
  [K in keyof T]: T[K] extends object
    ? Flatten<T[K]> extends infer O // Recursively flatten each level
      ? { [P in keyof O as `${K & string}.${P & string}`]: O[P] } // Concatenate keys with '.'
      : never
    : { [P in K]: T[K] }; // If the value is not an object, just use it
}[keyof T];

// Example usage of Flatten
type FlattenedExampleObject = Flatten<ExampleObject>;
// FlattenedExampleObject is equivalent to:
// {
//     'user.profile.name': string;
//     'user.profile.age': number;
//     'user.settings.theme': string;
//     'user.settings.notifications': boolean;
// }

///////////////////////////
// 3. Variadic Tuple Types
///////////////////////////

// A function to get a value from a deeply nested object using a variadic tuple of keys.
function getValue<T, Keys extends (keyof any)[]>(
  obj: T,
  ...keys: Keys
): NestedAccess<T, Keys> {
  return keys.reduce((acc, key) => acc[key], obj) as any;
}

// Example usage of getValue
const exampleObj: ExampleObject = {
  user: {
    profile: {
      name: "John Doe",
      age: 30,
    },
    settings: {
      theme: "dark",
      notifications: true,
    },
  },
};

const userName = getValue(exampleObj, "user", "profile", "name"); // "John Doe"
const userTheme = getValue(exampleObj, "user", "settings", "theme"); // "dark"

/* Explanation
1. **Conditional Types with Generics**:
   - The `NestedAccess` type is a generic utility that safely accesses a deeply nested property within an object. It uses conditional types to recursively drill down through the tuple of keys.

2. **Recursive Types**:
   - The `Flatten` type recursively flattens a nested object structure into a single-level object, where the keys are concatenated with a period ('.'). This allows you to work with deeply nested objects in a more manageable way.

3. **Variadic Tuple Types**:
   - The `getValue` function accepts a variadic tuple of keys to safely access a nested value within an object. It leverages the `NestedAccess` type to ensure type safety while navigating through the object.

These advanced generics allow you to create powerful utilities for managing and interacting with complex nested data structures in a type-safe manner.
*/
