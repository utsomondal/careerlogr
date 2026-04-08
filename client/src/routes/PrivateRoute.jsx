import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
