import React from "react";
import "./App.css";
import { Hamburger, TotalPrice, Ingredient } from "./components";

function App() {
  return (
    <div>
      <Hamburger />
      <TotalPrice />
      <Ingredient />
    </div>
  );
}

export default App;
