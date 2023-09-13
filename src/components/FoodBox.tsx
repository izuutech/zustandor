import { useCatStore } from "../stores/catStore";
import {
  useFoodStore,
  addOneFish,
  removeAllFish,
  removeOneFish,
} from "../stores/foodStore";

export default function FoodBox() {
  const fish = useFoodStore((state) => state.fish);
  // const { addOneFish, removeOneFish, removeAllFish } = useFoodStore();
  //   const addOneFish = useFoodStore((state) => state.addOneFish);
  //   const removeOneFish = useFoodStore((state) => state.removeOneFish);
  //   const removeAllFish = useFoodStore((state) => state.removeAllFish);
  const add5Fish = () => {
    useFoodStore.setState((state) => ({
      fish: state.fish + 5,
    }));
  };
  return (
    <div className="box">
      <h1>Food box</h1>
      <p>fish: {fish}</p>
      <button onClick={addOneFish}>add one fish</button>
      <button onClick={removeOneFish}>remove one fish</button>
      <button onClick={removeAllFish}>remove all fish</button>
      <button onClick={add5Fish}>add 5 fish</button>
    </div>
  );
}
