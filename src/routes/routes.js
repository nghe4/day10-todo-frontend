import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { TodoDetailPage } from "../pages/TodoDetailPage";
import { DoneListPage } from "../pages/DoneListPage";
import { DefaultLayout } from "../components/DefaultLayout";

export const router = createBrowserRouter([
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
