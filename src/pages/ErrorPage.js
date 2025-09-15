import { useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      {error.status === 404 ? <h1>404 Not Found</h1> : JSON.stringify(error)}
    </div>
  );
};
