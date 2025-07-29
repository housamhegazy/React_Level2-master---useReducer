import { useState } from "react";
import "./App.css";
import "./theme.css";
import { useReducer } from "react";

const initialData = {
  name: "housam hegazy",
  age: 33,
  startCount: 10,
  theme: "light",
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME": {
      return { ...state, name: action.newValue };
    }
    case "CHANGE_AGE": {
      return { ...state, age: action.newValue };
    }
    case "CHANGE_COUNT": {
      return { ...state, count: action.newValue };
    }
    case "CHANGE_THEME": {
      return { ...state, theme: action.newTheme };
    }
  }
  throw Error("Unknown action: " + action.type);
}

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${allData.theme}`}>
      <button
        onClick={() => {
          dispatch({ type: `CHANGE_THEME`, newTheme: allData.theme === "dark" ? "light" : "dark" });
        }}
      >
        toggle theme
      </button>
      <div>
        <button onClick={()=>{
          dispatch({ type: `CHANGE_THEME`, newTheme: "light" });
        }} style={{ marginRight: "26px" }}>light</button>
        <button onClick={()=>{
          dispatch({ type: `CHANGE_THEME`, newTheme: "dark" });
        }} style={{ marginRight: "26px" }}>dark</button>
        <button onClick={()=>{
          dispatch({ type: `CHANGE_THEME`, newTheme: "gray" });
        }} style={{ marginRight: "26px" }}>gray</button>
        <button onClick={()=>{
          dispatch({ type: `CHANGE_THEME`, newTheme: "pink" });
        }} style={{ marginRight: "26px" }}>pink</button>
      </div>
      <h2>My name is {allData.name}</h2>
      <h2>My age is {allData.age}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", newValue: "gomaa hegazy" });
        }}
      >
        change name{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: `CHANGE_AGE`, newValue: "60" });
        }}
      >
        change age
      </button>
      <br />
      <div>my count is {allData.startCount}</div>
      <button
        onClick={() => {
          dispatch({
            type: `CHANGE_COUNT`,
            newValue: (allData.startCount += 1),
          });
        }}
      >
        increase count{" "}
      </button>
    </div>
  );
}

export default App;
