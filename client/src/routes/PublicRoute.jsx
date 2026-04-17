import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;