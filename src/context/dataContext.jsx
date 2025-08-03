import { createContext, useReducer } from "react";
const DataContexttt = createContext();

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
      return { ...state, startCount: action.newValue };
    }
    case "CHANGE_THEME": {
      return { ...state, theme: action.newTheme };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  //change name function
  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName });
  };
  //change age
  const changeAge = (newAge) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge });
  };
  // change theme function
  const changeTheme = (toggledTheme) => {
    dispatch({
      type: `CHANGE_THEME`,
      newTheme: toggledTheme,
    });
  };

  const changeCount = (newCount)=>{
    dispatch({
            type: `CHANGE_COUNT`,
            newValue: newCount,
          });
  }
  return (
    //export alldata and functions to all website
    <DataContexttt.Provider
      value={{ ...firstState, changeName, changeAge, changeTheme,changeCount }}
    >
      {children}
    </DataContexttt.Provider>
  );
}

export default DataContexttt;
