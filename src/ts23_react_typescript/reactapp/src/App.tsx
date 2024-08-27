// src/components/App.tsx

// Todo List App

import React, { FC } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

// Main App component
const App: FC = () => {
  const { todos, toggleTodo } = useTodos(); // Accesses todos and toggleTodo from the context

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList todos={todos} toggleTodo={toggleTodo} />{" "}
      {/* Passes todos and toggleTodo to TodoList */}
    </div>
  );
};

export default App;

/* 
Explanation:

1. Typing React Components:
   - "TodoList" component uses typed props "TodoListProps" to ensure that it receives an array of "Todo" objects and a function "toggleTodo" that takes an "id" as a number.
   - The "AddTodo" component is typed as a "FC" (Function Component) which is a generic type in TypeScript representing a React component.
   - The "App" and "Root" components are also typed as "FC".

2. Hooks:
   - The "useState" hook is used in "TodoProvider" to manage the array of to-do items, and in "AddTodo" to manage the input text state.
   - "useTodos" is a custom hook that ensures the context is properly used and provides type safety for the state and actions it exposes.

3. Context Types:
   - The "TodoContext" is created using "createContext" with a type of "TodoContextType", which is an interface defining the shape of the context value (todos, addTodo, toggleTodo).
   - The "TodoProvider" wraps the application and provides the context value to all components within it.
   - Using the "useContext" hook, we consume the context in the "useTodos" hook, ensuring that the context is always used correctly within the provider's scope.
*/
