import { useReducer } from "react";

type Action =
  | { type: "inc"; payload?: number }
  | { type: "dec"; payload?: number }
  | { type: "set"; payload: number }
  | { type: "reset" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "inc":
      return state + (action.payload??12);
    case "dec":
      return state - (action.payload??12);
    case "set":
      return state + action.payload;
    case "reset":
      return 0;
  }
}

function AllTwelve() {
  const [twelve, dispatch] = useReducer(reducer, 12);
  return (
    <>
      <h1>{twelve}</h1>
      <button onClick={() => dispatch({ type: "inc", payload: 12 })}>
        inc 12
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 12 })}>
        dec 12
      </button>
      <button onClick={() => dispatch({ type: "set", payload: 120 })}>
        + 120
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default AllTwelve;
