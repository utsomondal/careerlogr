import { createBrowserRouter } from "react-router";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateLayout from "../layouts/PrivateLayout";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  // Public
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // Protected — with sidebar
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
