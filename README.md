# TypeScript Essentials With Real-World Examples

Author: IxxI5

### Description

This repository offers a fresh and engaging approach to mastering the essentials of TypeScript programming. By using small, simulated real-world examples, it makes learning both intuitive and practical. Whether you're a beginner just starting out or an advanced user looking to deepen your understanding, this method is designed to keep you engaged. The idea is simple: the more you practice, the more you retain. In the end, mastering programming comes down to three things—practice, practice, and practice. This hands-on approach ensures that learning is not only easier but also more enjoyable and effective for everyone.

### Prerequisites

- **VS Code** is installed or download it from: https://code.visualstudio.com/

- **Node JS** is installed or download the latest version from: https://nodejs.org/en

### Launch a sub-project

After downloading the typescript-essentials repository, follow these steps:

- **Unzip** the downloaded file.
- **Open** VS Code Terminal
- **Install Dependencies** through VS Code Terminal:

  ```javascript
  npm install                        /* install the dependencies */
  ```

- **Launch** a sub-project e.g. ts01_basic_types from Terminal:

  ```javascript
  npm run build:ts01                 /* compiles the ts01_basic_types/index.ts to
                                        ts01_basic_types/index.js */

  npm run start:ts01                 /* runs the ts01_basic_types/index.js */
  ```

**Important Note:**
The following sections, **VS Code Configuration** and **Project Configuration**, provide general guidelines for setting up your own TypeScript projects.

### VS Code Configuration

- **Open** the VS Code Terminal and execute the following commands:

  ```javascript
  mkdir myProject                    /* creates the myProject directory */

  npm install -g typescript          /* install TypeScript globally */

  /* Important Note: Once TypeScript is installed globally, you don't need to reinstall it
     for any new project. */
  ```

### Project Configuration

- **Open** the VS Code Terminal and execute the following commands:

  ```javascript
  tsc --init                         /* create the tsconfig.json */
  ```

- **Create** a **tsconfig.json** file, and enter the following:

  ```javascript
  {
  "target": "es2019", // or "es6", "es2016", "es2017", etc.
  "module": "commonjs", // or another module system
  "strict": true, // Optional, for strict type-checking
  "esModuleInterop": true, // Optional, allows default imports from modules
  "skipLibCheck": true, // Optional, skips type checking of declaration files
  "compilerOptions": {
    "lib": ["es2019", "dom"], // Add "dom" to the lib array
    "outDir": "./dist/", // Output directory for compiled files
    "rootDir": "./src/", // Source files directory (current directory)
    "sourceMap": false // Optional, generates source maps
  },
  "include": [
    "**/*" // Include all TypeScript files in this directory and subdirectories
  ],
  "exclude": ["node_modules"]
  }
  ```

  Save the modified **tsconfig.json** file.

- **Create** the **src** and **dist** directories using the VS Code UI or Terminal:

  ```javascript
  mkdir src                          /* creates the src folder */

  mkdir dist                         /* creates the dist folder */
  ```

- **Create** the **package.json** file using the Terminal:

  ```javascript
   npm init                           /* creates the package.json file, which contains the
                                         project's description and manages its dependencies
                                         (packages) */
  ```

  Press **Enter** for all prompts. Open the **package.json** file and modify it as needed.

- **Modify** the **package.json** file as follows:

  ```javascript
  {
  "name": "myProject",
  "version": "1.0.0",
  "description": "Project Description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:myProject": "npx tsc --project src/tsconfig.json",
    "start:myProject": "node dist/index.js"
  },
  "author": "Your Name",
  "license": "MIT"
  }
  ```

- **Create** the **index.ts** file and write some code e.g.:

  ```javascript
  let greeting: string = "Hello, World!";
  console.log(greeting);
  ```

  Press save.

- **Launch** the myProject from Terminal:

  ```javascript
  npm run build:myProject                 /* compiles the myProject/src/index.ts to
                                             myProject/dist/index.js */

  npm run start:myProject                 /* runs the myProject/dist/index.js */
  ```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
