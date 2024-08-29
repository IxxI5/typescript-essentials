// index.ts

// User registration system.
// The system should handle various types of errors, such as invalid user input, database connectivity issues, and external API failures. We implement
// exception handling to ensure that these errors are managed appropriately.

import { registerUser, User } from "./userRegistration";

// Scenario 1: Valid user input
const user1: User = {
  username: "john_doe",
  email: "john@example.com",
  password: "securepassword",
};

registerUser(user1);

// Scenario 2: Invalid email format
const user2: User = {
  username: "jane_doe",
  email: "jane_at_example.com",
  password: "securepassword",
};

registerUser(user2);

// Scenario 3: Short password
const user3: User = {
  username: "alice",
  email: "alice@example.com",
  password: "123",
};

registerUser(user3);

// Scenario 4: Simulate database error
const user4: User = {
  username: "bob",
  email: "bob@example.com",
  password: "securepassword",
};

registerUser(user4);

// Scenario 5: Simulate email service error
const user5: User = {
  username: "charlie",
  email: "charlie@example.com",
  password: "securepassword",
};

registerUser(user5);

/** Output: 
 *  Unexpected Error: Invalid email format.
    Unexpected Error: Password must be at least 6 characters long.
    User registered successfully.
    User registered successfully.
    User registered successfully.
 */
