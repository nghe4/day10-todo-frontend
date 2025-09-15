import "./App.css";
import { useEffect, useReducer } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import { RouterProvider } from "react-router";
import { useTodoService } from "./useTodoService";
import { router } from "./routes/routes";

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);
  const { loadTodos } = useTodoService();
  useEffect(() => {
    loadTodos().then((todos) => {
      dispatch({ type: "LOAD_TODOS", payload: todos });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
