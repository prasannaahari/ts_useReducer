import { useReducer } from "react";
type Action =
  | { type: "inc"; payload?: number }
  | { type: "dec"; payload?: number }
  | { type: "set"; payload: number }
  | { type: "reset" };

  function reducer(state:number,action:Action):number{
    switch(action.type){
        case "inc":return state+(action.payload??7)
        case "dec":return state-(action.payload??7)
        case "set":return state+(action.payload)
        case "reset":return 0
        default:return state
    }
  }
function AllSeven() {
  const [seven, dispatch] = useReducer(reducer, 7);
  return (<>
  <h1>{seven}</h1>

  <button onClick={()=>dispatch({type:"inc"})}>inc by 7</button>
  <button onClick={()=>dispatch({type:"dec"})}>dec by 7</button>
  <button onClick={()=>dispatch({type:"set",payload:70})}>inc by 70</button>
  <button onClick={()=>dispatch({type:"reset"})}>reset</button>
  </>);
}

export default AllSeven;
