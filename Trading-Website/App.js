import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/header";

import RoutesPath from "./routes";
// Main application component
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <RoutesPath />
      </Router>
    </>
  );
}
