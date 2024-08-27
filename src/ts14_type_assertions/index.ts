// Define a User interface
interface User {
  id: number;
  name: string;
  email: string;
  address?: string; // address is optional
}

// Simulate a function that fetches data from an API
function fetchUserFromAPI(): any {
  return {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    // address is missing in this mock data
  };
}

// Function to process user data
function processUserData(user: User) {
  // Type assertion using 'as' keyword
  // The data fetched from the API is of type `any`.
  // We use `as User` to assert that the object conforms to the `User` interface.
  const userData = fetchUserFromAPI() as User;

  console.log("User ID:", userData.id); // User ID: 1
  console.log("User Name:", userData.name); // User Name: John Doe
  console.log("User Email:", userData.email); // User Email: john.doe@example.com

  // Non-null assertion when accessing address
  // Since `address` is optional, it might be null or undefined.
  // By using the non-null assertion (`!`), we're telling TypeScript that we are
  // confident this field is not `null` or `undefined` at this point.
  console.log("User Address:", userData.address!); // User Address: undefined
}

// Main function to run the example
function main() {
  try {
    const user = fetchUserFromAPI();
    // Type assertion using 'as' keyword when passing the user data to `processUserData`
    processUserData(user as User);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
