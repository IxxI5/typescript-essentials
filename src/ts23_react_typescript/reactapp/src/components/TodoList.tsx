// src/components/TodoList.tsx

import React, { FC } from "react";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[]; // List of todo items to display
  toggleTodo: (id: number) => void; // Function to toggle the completion status of a todo item
}

// Component to display the list of todo items
const TodoList: FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        onClick={() => toggleTodo(todo.id)} // Toggles completion status on click
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

export default TodoList;
