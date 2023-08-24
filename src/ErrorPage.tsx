import { type FC } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage: FC = () => {
  const error = useRouteError() as any;
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{Boolean(error.statusText) || error.message}</i>
      </p>
    </div>
  );
};
