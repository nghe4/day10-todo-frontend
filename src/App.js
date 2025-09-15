import "./App.css";
import { useReducer } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import { TodoList } from "./components/TodoList";

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: false },
];

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <main>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodoContext.Provider>
    </main>
  );
}

export default App;
