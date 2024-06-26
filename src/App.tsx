import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const numberOfFives = count / 5;
  let fivesArray = [];
  if (numberOfFives >= 1) {
    fivesArray = new Array(Math.floor(numberOfFives)).fill("squire");
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-screen">
        <div className="border border-green-500 bg-gray-50 px-10 py-14 rounded">
          <div className="flex items-center justify-center gap-4 ">
            <button
              onClick={() => dispatch(incrementByValue(5))}
              className="px-3 py-2 border border-green-600 bg-green-100 rounded-md text-xl font-semibold"
            >
              increment-5
            </button>
            <button
              onClick={() => dispatch(increment())}
              className="px-3 py-2 border border-green-600 bg-green-100 rounded-md text-xl font-semibold"
            >
              Increment
            </button>
            <h2 className="text-5xl px-3 py-2 font-bold">{count}</h2>
            <button
              onClick={() => dispatch(decrement())}
              className="px-3 py-2 border border-green-600 bg-green-100 rounded-md text-xl font-semibold"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(decrementByValue(5))}
              className="px-3 py-2 border border-green-600 bg-green-100 rounded-md text-xl font-semibold"
            >
              Decrement-5
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
            {fivesArray.map((_, index) => (
              <div
                key={index}
                className="h-14 w-14 border border-rose-500"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
