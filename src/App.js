import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increasecount } from "./Store/Slices/CountSlice";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);
  return (
    <div className="text-red-500">
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          dispatch(increasecount());
        }}
        className="outline py-2 px-6 m-2 bg-green-400"
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decreaseCount());
        }}
        className="outline py-2 px-6 m-2 bg-green-400"
      >
        -
      </button>
    </div>
  );
}

export default App;
