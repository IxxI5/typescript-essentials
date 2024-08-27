// src/models/User.ts

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default User;

// Avoid using namespaces for types or interfaces that we want to export directly since it will lead to error.
