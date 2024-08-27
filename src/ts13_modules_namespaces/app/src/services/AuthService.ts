// src/services/AuthService.ts
import { User } from "../models/User";
import { logInfo, logError } from "../utils/Logger";

namespace Services {
  export class AuthService {
    private users: User[] = [];

    constructor() {
      this.users.push({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        password: "secret",
      });
    }

    public login(email: string, password: string): User | null {
      const user = this.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        logInfo(`User ${user.name} logged in successfully.`);
        return user;
      } else {
        logError("Login failed: Invalid credentials.");
        return null;
      }
    }
  }
}

export default Services.AuthService;
