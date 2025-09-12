import "./App.css";
import { createContext, useReducer } from "react";
import { TodoGroup } from "./components/TodoGroup";
import { TodoGenerator } from "./components/TodoGenerator";

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: false },
];

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    case "ADD_TODO":
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        done: action.payload.done,
      };
      return [...state, newTodo];
    default:
      break;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <div>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoGroup />
        <TodoGenerator />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
