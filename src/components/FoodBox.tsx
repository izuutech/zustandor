import { useCatStore } from "../stores/catStore";
import { useFoodStore } from "../stores/foodStore";

export default function FoodBox() {
  const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore();
  return (
    <div className="box">
      <h1>Food box</h1>
      <p>fish: {fish}</p>
      <button onClick={addOneFish}>add one fish</button>
      <button onClick={removeOneFish}>remove one fish</button>
      <button onClick={removeAllFish}>remove all fish</button>
    </div>
  );
}
