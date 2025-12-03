import { useReducer, type ChangeEvent } from "react";
type Action =
  | { type: "name"; payload: string }
  | { type: "email"; payload: string }
  | { type: "phone"; payload: number };

type Obj = {
  name: string;
  email: string;
  phone: number;
};

function Form() {
  const initialState: Obj = {
    name: "",
    email: "",
    phone: 0,
  };

  function reducer(state: Obj, action: Action): Obj {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "phone":
        return { ...state, phone: action.payload };
      default:
        return state;
    }
  }

  function handleName(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "name", payload: e.target.value });
  }
  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "email", payload: e.target.value });
  }

  function handlePhone(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "phone", payload:Number( e.target.value) });
  }
  const [val, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="enter name"
          value={val.name}
          onChange={handleName}
        />{" "}
        <br />
        <br />
        <input
          type="email"
          placeholder="enter email"
          value={val.email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <input
          type="tel"
          placeholder="enter no."
          value={val.phone===0?"":val.phone}
          onChange={handlePhone}
        />
        <br />
        <br />
        <button type="button">submit</button>
      </form>
       <br></br>
      <br />
      <br />
      <ul>
        {Object.entries(val).map(([key,value])=>
        <li key={key}>{key}:{value}</li>
      )}
      </ul>
    </>
  );
}

export default Form;
