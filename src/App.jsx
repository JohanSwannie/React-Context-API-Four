import { useState, useEffect } from "react";
import { ThemeContextProvider } from "./contexts/themeContext";
import Card from "./components/Card";

function App() {
  const [themeDark, setThemeDark] = useState(false);

  useEffect(() => {
    if (!themeDark) {
      document.body.style.backgroundColor = "rgb(48, 44, 44)";
      document.querySelector(".container").style.backgroundColor =
        "rgb(149, 143, 143)";
    } else {
      document.body.style.backgroundColor = "rgb(149, 143, 143)";
      document.querySelector(".container").style.backgroundColor =
        "rgb(48, 44, 44)";
    }
  }, [themeDark]);

  return (
    <ThemeContextProvider value={{ themeDark }}>
      <div className="container">
        <button onClick={() => setThemeDark(!themeDark)}>
          Change the Theme
        </button>
        <Card />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
