import { useState } from "react";
import "./App.css";
import CatBox from "./components/CatBox";
import CatBox2 from "./components/CatBox2";
import CatController from "./components/CatController";
import BearBox from "./components/BearBox";
import FoodBox from "./components/FoodBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox />
      </div>
      {/* <div>
      
        <CatBox />
        <CatBox2 />
        <CatController />
      </div> */}
    </div>
  );
}

export default App;
