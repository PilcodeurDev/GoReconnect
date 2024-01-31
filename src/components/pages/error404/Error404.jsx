/**
 * The external imports
 */
import { useRouteError } from "react-router-dom";

/**
 * The internal imports
 */
import "./Error404.css";

export default function Error404() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Une erreur est survenue :</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </div>
  );
}
