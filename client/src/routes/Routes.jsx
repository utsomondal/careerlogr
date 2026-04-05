import { createBrowserRouter } from "react-router";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

// temporarily comment these out until you build them
// import PrivateLayout from '../layouts/PrivateLayout'
// import PrivateRoute from '../components/PrivateRoute'
// import Dashboard from '../pages/Dashboard'
// import Applications from '../pages/Applications'
// import AddApplication from '../pages/AddApplication'
// import ApplicationDetail from '../pages/ApplicationDetail'

const router = createBrowserRouter([
  // Public — no sidebar
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // Protected — with sidebar
  // {
  //   element: <PrivateLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: (
  //         <PrivateRoute>
  //           <Dashboard />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "/applications",
  //       element: (
  //         <PrivateRoute>
  //           <Applications />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "/applications/add",
  //       element: (
  //         <PrivateRoute>
  //           <AddApplication />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "/applications/:id",
  //       element: (
  //         <PrivateRoute>
  //           <ApplicationDetail />
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // },
]);

export default router;
