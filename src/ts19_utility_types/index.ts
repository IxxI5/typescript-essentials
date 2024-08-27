// index.ts
// Utility types: Partial, Required, Readonly, Record, Pick, Omit

// Define a basic interface for a User
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Example using Partial:  If you have a user profile that you want to update, you might not want to provide the entire profile
// Partial makes all properties in the User interface optional
type UpdateUserPayload = Partial<User>;

// Example of how Partial can be used
const updateUser: UpdateUserPayload = {
  name: "John Doe", // Only the name property is provided
  email: "john.doe@example.com",
};

// Example using Required: If you have a configuration object where all properties must be set before it is used
// Required makes all properties in the User interface required
type UserWithAllProperties = Required<User>;

// Example of how Required can be used
const completeUser: UserWithAllProperties = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  age: 30,
};

// Example using Readonly: If you are working with configuration objects or data that should not be modified
// Readonly makes all properties in the User interface immutable
type ReadonlyUser = Readonly<User>;

// Example of how Readonly can be used
const user: ReadonlyUser = {
  id: 2,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

// user.age = 26; // Error: Cannot assign to 'age' because it is a read-only property

// Example using Record: If you need a dictionary or a map where the keys are user roles and the values are permissions
// Record allows you to create an object type with specific property keys and values
type UserRole = "admin" | "user" | "guest";
type RolePermissions = Record<UserRole, string[]>;

// Example of how Record can be used
const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read"],
  guest: ["read"],
};

// Example using Pick: If you only need a subset of user properties for a particular operation
// Pick allows you to create a type by selecting specific properties from another type
type UserPreview = Pick<User, "id" | "name">;

// Example of how Pick can be used
const userPreview: UserPreview = {
  id: 3,
  name: "Bob",
};

// Example using Omit: If you need a type with all properties of User except for email, Omit<T, K> is useful.
// Omit allows you to create a type by excluding specific properties from another type
type UserWithoutEmail = Omit<User, "email">;

// Example of how Omit can be used
const userWithoutEmail: UserWithoutEmail = {
  id: 4,
  name: "Charlie",
  age: 40,
};

// Explanation of the utility types used:

/*
    These utility types are designed to make your code more flexible, readable, and maintainable by allowing you to manipulate types in a precise and controlled way. They help you enforce constraints, create well-defined data structures, and avoid common pitfalls associated with object manipulation. If you work with complex types or need to handle different scenarios where certain properties may or may not be present, these utility types can be incredibly valuable.

1. Partial<T> - Constructs a type with all properties of T set to optional. Useful for scenarios where you want to update only a subset of the properties.
2. Required<T> - Constructs a type with all properties of T set to required. Useful for ensuring all properties are present.
3. Readonly<T> - Constructs a type with all properties of T set to readonly, meaning they cannot be modified after creation. Useful for immutability.
4. Record<K, T> - Constructs a type with properties K and values T. Useful for creating objects with a fixed set of keys.
5. Pick<T, K> - Constructs a type by picking a subset of properties K from T. Useful for creating a type with only specific properties.
6. Omit<T, K> - Constructs a type by omitting a subset of properties K from T. Useful for creating a type with all properties except some.
*/
