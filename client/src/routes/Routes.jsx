import { createBrowserRouter } from "react-router";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateLayout from "../layouts/PrivateLayout";
import PrivateRoute from "./PrivateRoute";
import Applications from "../pages/Applications";
import AddApplication from "../pages/AddApplication";
import ErrorPage from "../pages/ErrorPage";
import UpdateApplication from "../pages/UpdateApplication";
import PublicRoute from "./PublicRoute.jsx";

const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: (
      <PublicRoute>
        <Landing />
      </PublicRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },

  // Protected routes
  {
    element: <PrivateLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/applications",
        element: (
          <PrivateRoute>
            <Applications />
          </PrivateRoute>
        ),
      },
      {
        path: "/application/add",
        element: (
          <PrivateRoute>
            <AddApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "/application/update/:id",
        element: (
          <PrivateRoute>
            <UpdateApplication />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
