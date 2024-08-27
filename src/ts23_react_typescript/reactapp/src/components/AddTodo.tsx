// src/components/AddTodo.tsx

import React, { useState, FC } from "react";
import { useTodos } from "../hooks/useTodos";

// Component for adding a new todo item
const AddTodo: FC = () => {
  const [text, setText] = useState(""); // State to manage the input text
  const { addTodo } = useTodos(); // Accesses the addTodo function from the context

  // Handles form submission to add a new todo item
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText(""); // Clears the input field after adding the todo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Updates the text state on input change
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
