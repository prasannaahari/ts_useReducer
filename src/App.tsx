import { useReducer } from "react";
import AllFive from "./components/AllFive";
import AllSeven from "./components/AllSeven";
import AllTwelve from "./components/AllTwelve";
import AllFour from "./components/AllFour";
import Form from "./components/Form";

type Action =
  | { type: "inc"; payload: number }
  | { type: "dec"; payload: number }
  | { type: "reset" }
  | { type: "set"; payload: number };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "inc": {
      return state + (action.payload ?? 1);
    }
    case "dec": {
      return state - (action.payload ?? 1);
    }
    case "reset": {
      return 0;
    }
    case "set": {
      return state+(action.payload);
    }
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "inc", payload: 5 })}>inc 5</button>
      <button onClick={() => dispatch({ type: "dec",payload:3})}>dec 3</button>
      <button onClick={() => dispatch({ type: "set", payload: 100 })}>
        +100
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <AllFive/>
      <AllSeven/>
      <AllTwelve/>
      <AllFour/>
      <br /><br />
      <Form/>
    </>
  );
}

export default App;
