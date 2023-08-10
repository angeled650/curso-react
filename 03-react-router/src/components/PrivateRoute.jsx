import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo }) => {
  let auth;
  auth = true;
  auth = false;

  return auth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
