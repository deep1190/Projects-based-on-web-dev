import React from "react";
//renders web application's user interface onto the screen.
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Create the root element for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
