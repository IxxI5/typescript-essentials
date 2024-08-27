// index.ts

// Define a basic type for a user profile
interface UserProfile {
  username: string;
  email: string;
  age: number;
}

// Create a mapped type that makes all properties of UserProfile optional
type PartialUserProfile = {
  [K in keyof UserProfile]?: UserProfile[K];
};

// Create a mapped type that makes all properties of UserProfile readonly
type ReadonlyUserProfile = {
  readonly [K in keyof UserProfile]: UserProfile[K];
};

// Define a function to update a user profile
function updateUserProfile(
  profile: UserProfile,
  updates: PartialUserProfile // Use PartialUserProfile to allow partial updates
): UserProfile {
  return { ...profile, ...updates };
}

// Example usage
const user: UserProfile = {
  username: "johndoe",
  email: "john.doe@example.com",
  age: 30,
};

const updates: PartialUserProfile = {
  email: "john.doe@newdomain.com",
};

// Update user profile
const updatedUser = updateUserProfile(user, updates);
console.log(updatedUser);

// Create a readonly profile
const readonlyProfile: ReadonlyUserProfile = {
  username: "janedoe",
  email: "jane.doe@example.com",
  age: 28,
};

// Attempting to modify a readonly property would result in a TypeScript error
// readonlyProfile.email = 'new.email@example.com'; // Error: Cannot assign to 'email' because it is a read-only property

console.log(readonlyProfile);

/* Output:
{ username: 'johndoe', email: 'john.doe@newdomain.com', age: 30 }
{ username: 'janedoe', email: 'jane.doe@example.com', age: 28 }
 */

/*
Explanation:

1. **Basic Type Definition ("UserProfile")**:
   - "UserProfile" defines the structure of a user profile with "username", "email", and "age".

2. **Mapped Type ("PartialUserProfile")**:
   - "PartialUserProfile" is a mapped type that makes all properties of "UserProfile" optional. This is done using the "keyof UserProfile" to iterate over each property and the "?" modifier to make each property optional.

3. **Readonly Mapped Type ("ReadonlyUserProfile")**:
   - "ReadonlyUserProfile" is a mapped type that makes all properties of "UserProfile" readonly. This is achieved using the "readonly" keyword in the mapped type.

4. **Function to Update Profiles ("updateUserProfile")**:
   - This function takes a "UserProfile" and an object of type "PartialUserProfile". It merges the existing profile with the updates, allowing partial updates to the user profile.

5. **Example Usage**:
   - We create a user profile and some updates. The "updateUserProfile" function demonstrates how partial types are useful for allowing partial updates.

6. **Readonly Profile**:
   - The "readonlyProfile" example shows how "Readonly" types prevent modifications to the properties, providing immutability for the profile object.

By leveraging these mapped types and utility types, you can create flexible, reusable, and type-safe constructs for managing and manipulating data structures in TypeScript.
*/
