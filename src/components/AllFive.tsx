import { useReducer } from "react";

type Action =
  | { type: "inc"; payload?: number }
  | { type: "dec"; payload?: number }
  | { type: "set"; payload: number }
  | { type: "reset" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "inc":
      return state + (action.payload ?? 5);
    case "dec":
      return state - (action.payload ?? 5);
    case "set":
      return state + action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }}
  function AllFive() {
    const [five, dispatch] = useReducer(reducer, 5);
  

  return (
    <>
      <h1>{five}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>inc 5</button>
      <button onClick={() => dispatch({ type: "dec" })}>dec 5</button>
      <button onClick={() => dispatch({ type: "set", payload: 50 })}>
        + 50
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
  }
export default AllFive;
