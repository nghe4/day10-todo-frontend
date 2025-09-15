import "./App.css";
import { useReducer } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import { TodoList } from "./components/TodoList";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router";

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      {error.status === 404 ? <h1>404 Not Found</h1> : JSON.stringify(error)}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <TodoList /> }],
  },
]);

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: false },
];

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
