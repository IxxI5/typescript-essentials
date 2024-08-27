// src/types/index.ts

// Defines the structure of a Todo item
export interface Todo {
  id: number; // Unique identifier for the todo item
  text: string; // Text content of the todo item
  completed: boolean; // Whether the todo item is completed
}

// Defines the shape of the context value provided by TodoContext
export interface TodoContextType {
  todos: Todo[]; // Array of todo items
  addTodo: (text: string) => void; // Function to add a new todo item
  toggleTodo: (id: number) => void; // Function to toggle the completion status of a todo item
}
