import "./App.css";
import { useEffect, useReducer } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { TodoDetailPage } from "./pages/TodoDetailPage";
import { DoneListPage } from "./pages/DoneListPage";
import { DefaultLayout } from "./components/DefaultLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useTodoService } from "./useTodoService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "/about",
    element: <DefaultLayout />,
    children: [{ path: "/about", element: <AboutUsPage /> }],
  },
  {
    path: "/todo/:id",
    element: <DefaultLayout />,
    children: [{ path: "/todo/:id", element: <TodoDetailPage /> }],
  },
  {
    path: "/done",
    element: <DefaultLayout />,
    children: [{ path: "/done", element: <DoneListPage /> }],
  },
]);

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
