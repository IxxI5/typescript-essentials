// app.ts

/* Demonstration of the use of modules and namespaces, including importing and exporting modules, and module resolution, through a simple
   application that involves user authentication.

my-app/
├── src/
│   ├── models/
│   │   └── User.ts
│   ├── services/
│   │   └── AuthService.ts
│   ├── utils/
│   │   └── Logger.ts
│   └── app.ts
├── tsconfig.json
└── package.json

*/

import AuthService from "./services/AuthService";

const authService = new AuthService();

const email = "john@example.com";
const password = "secret";

const user = authService.login(email, password);

if (user) {
  console.log(`Welcome, ${user.name}!`);
} else {
  console.log("Authentication failed.");
}
