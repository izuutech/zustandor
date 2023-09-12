import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore";
import { useFoodStore } from "../stores/foodStore";
import { shallow } from "zustand/shallow";

export default function BearBox() {
  const [bgColor, setBgColor] = useState<"lightgreen" | "lightpink">(
    "lightpink"
  );
  //   const bears = useBearStore((state) => state.bears);
  //   const increasePopulation = useBearStore((state) => state.increasePopulation);
  //     const removeAllBears = useBearStore((state) => state.removeAllBears);
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  const fish = useFoodStore((state) => state.fish);

  useEffect(() => {
    // const unsub = useFoodStore.subscribe((state, prevState) => {
    //   if (prevState.fish <= 5 && state.fish > 5) {
    //     setBgColor("lightgreen");
    //   } else if (prevState.fish > 5 && state.fish <= 5) {
    //     setBgColor("lightpink");
    //   }
    // });
    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        if (fish === prevFish) {
          if (fish < 5) {
            setBgColor("lightpink");
          } else {
            setBgColor("lightgreen");
          }
        }
        if (prevFish <= 5 && fish > 5) {
          setBgColor("lightgreen");
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor("lightpink");
        }
      },
      { equalityFn: shallow, fireImmediately: true }
    );
    return unsub;
  }, []);
  return (
    <div className={`box`} style={{ backgroundColor: bgColor }}>
      <h1>Bear box</h1>
      <p>Bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove bear</button>
        <button onClick={useBearStore.persist.clearStorage}>
          clear storage
        </button>
      </div>
    </div>
  );
}
