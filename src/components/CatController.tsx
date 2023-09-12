import { shallow } from "zustand/shallow";
import { useCatStore } from "../stores/catStore";

export default function CatBox() {
  const { increaseBigCats, increaseSmallCats } = useCatStore(
    (state) => ({
      increaseBigCats: state.increaseBigCats,
      increaseSmallCats: state.increaseSmallCats,
    }),
    shallow
  );
  // const increaseBigCats = useCatStore.use.increaseBigCats();
  // const increaseSmallCats = useCatStore.use.increaseSmallCats();
  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <button onClick={increaseBigCats}>add big cats</button>
      <button onClick={increaseSmallCats}>add small cats</button>
    </div>
  );
}
