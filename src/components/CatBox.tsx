import { useCatStore } from "../stores/catStore";

export default function CatBox() {
  const { cats, increaseBigCats, increaseSmallCats, summary } = useCatStore();
  return (
    <div className="box">
      <h1>Cat box</h1>
      <p>big cats:{cats.bigCats}</p>
      <p>small cats:{cats.smallCats}</p>
      <button onClick={increaseBigCats}>add big cats</button>
      <button onClick={increaseSmallCats}>add small cats</button>
      <p>{summary()}</p>
    </div>
  );
}
