import { useRouteError, Link } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2>Ha ocurrido un error: {error.status}</h2>
      <p>
        <b>
          <i>
            {error.status === 404
              ? "La página no existe."
              : error.statusText || error.message}
          </i>
        </b>
      </p>
      <Link to="/">Regresar</Link>
    </div>
  );
}

export default ErrorBoundary;
