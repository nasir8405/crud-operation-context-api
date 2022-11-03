import React, { createContext, useReducer } from "react";
import { userData } from "./mockData";
export const Context = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedState = [...state, action.payload];
      return updatedState;
    case "DELETE":
      const restItem = state.filter((item) => item.id !== action.payload);
      return restItem;
    case "UPDATE":
      const updatedUser = [...state];
      updatedUser.splice(action.index, 1, action.user);
      return updatedUser;
    default:
      return state;
  }
};
export const StudentsProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, userData);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
