import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
