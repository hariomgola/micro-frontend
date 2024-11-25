import React from "react";
import ReactDOM from "react-dom/client"; // For React 18

import App from "./components/App"; // Import App component

const root = ReactDOM.createRoot(document.getElementById("root")); // Use the new root API for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
