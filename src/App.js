import "./App.css";
import { useReducer } from "react";
import { TodoGroup } from "./components/TodoGroup";
import { TodoGenerator } from "./components/TodoGenerator";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: false },
];

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
