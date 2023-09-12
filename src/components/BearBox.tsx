import { useBearStore } from "../stores/bearStore";

export default function BearBox() {
  //   const bears = useBearStore((state) => state.bears);
  //   const increasePopulation = useBearStore((state) => state.increasePopulation);
  //     const removeAllBears = useBearStore((state) => state.removeAllBears);
  const { bears, increasePopulation, removeAllBears } = useBearStore();
  return (
    <div className="box">
      <h1>Bear box</h1>
      <p>Bears: {bears}</p>
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
