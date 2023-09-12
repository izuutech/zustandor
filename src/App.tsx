import { useState } from "react";
import "./App.css";
import CatBox from "./components/CatBox";
import CatBox2 from "./components/CatBox2";
import CatController from "./components/CatController";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <CatBox />
      <CatBox2 />
      <CatController />
    </div>
  );
}

export default App;
