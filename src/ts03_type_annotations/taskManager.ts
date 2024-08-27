// taskManager.ts

export class SimpleTaskManager {
  // Declare the type of the `tasks` array as an array of objects with specific properties
  tasks: { id: number; title: string; completed: boolean }[] = [];

  // Method to add a task, with the parameter type specified
  addTask(title: string): void {
    // Define the new task with type annotations for its properties
    const newTask = {
      id: this.tasks.length + 1,
      title: title,
      completed: false,
    };
    // Push the new task to the tasks array
    this.tasks.push(newTask);
  }

  // Method to list tasks, with the return type specified
  listTasks(): { id: number; title: string; completed: boolean }[] {
    return this.tasks;
  }

  // Method to mark a task as completed, with the parameter type specified
  markAsCompleted(id: number): void {
    // Find the task by id
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      // Mark the found task as completed
      task.completed = true;
    }
  }
}
