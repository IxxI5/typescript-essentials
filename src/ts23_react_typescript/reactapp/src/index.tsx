// src/index.tsx

import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";
import { TodoProvider } from "./context/TodoContext";

// Create a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById("root")!); // Create a root using the 'root' element

// Render the App component within the TodoProvider
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
