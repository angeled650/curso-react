import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useParams,
  createHashRouter,
} from "react-router-dom";
import Home from "../routes/Home";
import Acerca from "../routes/Acerca";
import Contacto from "../routes/Contacto";
import ErrorBoundary from "../routes/ErrorBoundary";
import MenuBasicos from "./MenuBasicos";
import Usuarios from "../routes/Usuarios";
import Productos from "../routes/Productos";
import ReactTopics from "../routes/ReactTopics";
import Login from "../routes/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../routes/Dashboard";

const Topic = () => {
  const { topic } = useParams();
  return (
    <div>
      <h3>
        {topic === "jsx"
          ? topic.toUpperCase()
          : topic.charAt(0).toUpperCase() + topic.slice(1)}
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem
        vel? Fuga distinctio iusto voluptatibus quibusdam mollitia velit
        excepturi autem? Ex quasi quas eligendi ea asperiores aliquid dolore,
        facere atque.
      </p>
    </div>
  );
};

function ConceptosBasicos() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuBasicos title="Browser Router" />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/acerca",
          element: <Acerca />,
        },
        {
          path: "/contacto",
          element: <Contacto />,
        },
        {
          path: "/usuario/:username",
          element: <Usuarios />,
        },
        {
          path: "/productos",
          element: <Productos />,
        },
        { path: "/about", element: <Navigate to="/acerca" /> },
        { path: "/contact", element: <Navigate to="/contacto" /> },
        {
          path: "/react",
          element: <ReactTopics />,
          children: [{ path: "/react/:topic", element: <Topic /> }],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRoute redirectTo="/login">
              <Dashboard />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  const hashRouter = createHashRouter([
    {
      path: "/",
      element: <MenuBasicos title="Hash Router" />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/acerca",
          element: <Acerca />,
        },
        {
          path: "/contacto",
          element: <Contacto />,
        },
        {
          path: "/usuario/:username",
          element: <Usuarios />,
        },
        {
          path: "/productos",
          element: <Productos />,
        },
        { path: "/about", element: <Navigate to="/acerca" /> },
        { path: "/contact", element: <Navigate to="/contacto" /> },
        {
          path: "/react",
          element: <ReactTopics />,
          children: [{ path: "/react/:topic", element: <Topic /> }],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRoute redirectTo="/login">
              <Dashboard />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={hashRouter} />
      <hr />
      <RouterProvider router={router} />
    </>
  );
}

export default ConceptosBasicos;
