import { useCatStore } from "../stores/catStore";

export default function CatBox2() {
  const { cats, increaseBigCats, increaseSmallCats, summary } = useCatStore();
  return (
    <div className="box">
      <h1>Cat box</h1>
      <p>{Math.random()}</p>
      <p>small cats:{cats.smallCats}</p>
    </div>
  );
}
