import React from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("ReactApp-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);                                                  

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
  );
};

export default App;