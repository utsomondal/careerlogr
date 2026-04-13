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

const router = createBrowserRouter([
  // 🌐 Public routes
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />, 
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // 🔐 Protected routes
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
    ],
  },

  // ❗ fallback for any unmatched route
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
