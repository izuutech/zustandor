import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BearBox from "./components/BearBox";
import CatBox from "./components/CatBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Zustand Tutorial</h1>
      <CatBox />
    </div>
  );
}

export default App;
