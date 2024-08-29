// userRegistration.ts

// User registration system.
// The system should handle various types of errors, such as invalid user input, database connectivity issues, and external API failures. We implement
// exception handling to ensure that these errors are managed appropriately.

export class UserRegistrationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserRegistrationError";
  }
}

export class InvalidInputError extends UserRegistrationError {
  constructor(message: string) {
    super(message);
    this.name = "InvalidInputError";
  }
}

export class DatabaseError extends UserRegistrationError {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

export class EmailServiceError extends UserRegistrationError {
  constructor(message: string) {
    super(message);
    this.name = "EmailServiceError";
  }
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export function validateInput(user: User): void {
  if (!user.username || !user.email || !user.password) {
    throw new InvalidInputError("All fields are required.");
  }
  if (!/\S+@\S+\.\S+/.test(user.email)) {
    throw new InvalidInputError("Invalid email format.");
  }
  if (user.password.length < 6) {
    throw new InvalidInputError("Password must be at least 6 characters long.");
  }
}

export async function saveUserToDatabase(user: User): Promise<void> {
  try {
    // Simulate database save with a delay
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    // throw new Error("Database connection failed."); // Uncomment to simulate a database error
  } catch (error) {
    throw new DatabaseError("Failed to save user to the database.");
  }
}

export async function sendWelcomeEmail(user: User): Promise<void> {
  try {
    // Simulate sending email with a delay
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    // throw new Error("Email service is down."); // Uncomment to simulate an email service error
  } catch (error) {
    throw new EmailServiceError("Failed to send welcome email.");
  }
}

export async function registerUser(user: User): Promise<void> {
  try {
    validateInput(user);
    await saveUserToDatabase(user);
    await sendWelcomeEmail(user);
    console.log("User registered successfully.");
  } catch (error) {
    if (error instanceof InvalidInputError) {
      console.error("Validation Error:", error.message);
    } else if (error instanceof DatabaseError) {
      console.error("Database Error:", error.message);
    } else if (error instanceof EmailServiceError) {
      console.error("Email Service Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
    // Additional logging, retry mechanisms, or notifications can be added here.
  }
}

/*
    Explanation of Key Aspects

    1. Custom Error Classes: We create custom error classes (UserRegistrationError, InvalidInputError, DatabaseError, and EmailServiceError) to categorize different types of errors. This makes it easier to identify and handle specific errors.

    2. Input Validation: The validateInput function checks the user input. If any validation fails, it throws an InvalidInputError. This is an example of proactive error handling to prevent invalid data from entering the system.

    3. Try-Catch Block: The registerUser function uses a try-catch block to handle exceptions. This ensures that any error occurring during the registration process is caught and managed appropriately.

    4. Error Handling: In the catch block, we check the type of the error using instanceof and handle each type accordingly. This allows us to provide specific error messages and take appropriate actions.

    5. Graceful Degradation: Even if an error occurs, the application doesn't crash. Instead, it logs the error and can continue running. This is crucial in real-world applications where uptime and user experience are important.

    6. Asynchronous Error Handling: The use of async and await allows us to handle errors in asynchronous operations (e.g., database save, email sending) just like synchronous ones.
*/
