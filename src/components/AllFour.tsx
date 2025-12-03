import { useReducer } from "react";
type Action =
  | { type: "inc"; payload?: number }
  | { type: "dec"; payload?: number }
  | { type: "set"; payload: number }
  | { type: "reset" };

function reducer(state: number, action: Action):number{
    switch(action.type){
        case "inc":return state+(action.payload??7)
        case "reset":return 0
        case "set":return state+(action.payload)
        case "dec":return state-(action.payload??7)
        default:return state
    }
}

function AllFour() {
  const [four, dispatch] = useReducer(reducer, 4);
  return (
    <>
      <h1>{four}</h1>
      <button onClick={() => dispatch({ type: "inc",payload:4 })}>inc by 4</button>
      <button onClick={() => dispatch({ type: "dec",payload:4 })}>dec by 4</button>
      <button onClick={() => dispatch({ type: "set",payload:40 })}>+40</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default AllFour;
