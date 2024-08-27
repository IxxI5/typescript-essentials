// src/context/TodoContext.tsx

import React, { createContext, useState, ReactNode, FC } from "react";
import { Todo, TodoContextType } from "../types";

// Creates the Todo context with a default value of undefined
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

// Provides the Todo context to its children components
export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]); // State to hold the array of todos

  // Function to add a new todo item
  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Function to toggle the completion status of a todo item
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Provides the context value to children components
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
