import "./App.css";
import { useReducer } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { TodoDetailPage } from "./pages/TodoDetailPage";
import { DoneListPage } from "./pages/DoneListPage";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router";

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/done">Done List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

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
