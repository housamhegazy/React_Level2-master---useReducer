import { useState } from "react";
import "./App.css";
import "./theme.css";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContexttt, { DataProvider } from "./context/dataContext";

function App() {
  //import all context data
  const { name, age, theme,startCount,changeCount, changeName, changeAge, changeTheme } =
    useContext(DataContexttt);
  // const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${theme}`}>
      <Link to={"./Page2"}>go to page 2</Link>
      <button
        onClick={() => {
          changeTheme(`${theme}` === "dark" ? "light" : "dark" );
        }}
      >
        toggle theme
      </button>
      
    
      <div>
        <button onClick={()=>{
          changeTheme("light")
        }} style={{ marginRight: "26px" }}>light</button>
        <button onClick={()=>{
          changeTheme("dark")
        }} style={{ marginRight: "26px" }}>dark</button>
        <button onClick={()=>{
          changeTheme("gray")
        }} style={{ marginRight: "26px" }}>gray</button>
        <button onClick={()=>{
          changeTheme("pink")
        }} style={{ marginRight: "26px" }}>pink</button>
      </div>
      <h2>My name is {name}</h2>
      <h2>My age is {age}</h2>
      <button onClick={() => changeName("hegazy")}>change name</button>
      <button
        onClick={() => {
          changeAge("55");
        }}
      >
        change age
      </button>
      
      
      <br />
      <div>my count is {startCount}</div>
      <button
        onClick={() => {
          changeCount(startCount + 1)
        }}
      >
        increase count{" "}
      </button>
    </div>
  );
}

export default App;
