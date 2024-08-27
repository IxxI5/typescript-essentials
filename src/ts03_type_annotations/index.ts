// index.ts
// Simulating a simple task management system using TypeScript's basic type annotations.

import { SimpleTaskManager } from "./taskManager";

// Create an instance of the task manager
const manager = new SimpleTaskManager();

// Add tasks
manager.addTask("Complete TypeScript tutorial");
manager.addTask("Write blog post about TypeScript");

// List and display tasks
const tasks = manager.listTasks();
console.log("Tasks:");
tasks.forEach((task) => {
  console.log(
    `ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`
  );
});

// Mark the first task as completed
manager.markAsCompleted(1);

// List and display tasks again to see the update
console.log("\nUpdated Tasks:");
manager.listTasks().forEach((task) => {
  console.log(
    `ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`
  );
});

/*  Output
    Tasks:
    ID: 1, Title: Complete TypeScript tutorial, Completed: false
    ID: 2, Title: Write blog post about TypeScript, Completed: false

    Updated Tasks:
    ID: 1, Title: Complete TypeScript tutorial, Completed: true
    ID: 2, Title: Write blog post about TypeScript, Completed: false
*/
