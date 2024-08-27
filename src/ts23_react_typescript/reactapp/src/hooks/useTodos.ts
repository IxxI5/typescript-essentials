// src/hooks/useTodos.ts

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../types";

// Custom hook to use the TodoContext
export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);

  // Ensures that the hook is used within a TodoProvider
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
};
