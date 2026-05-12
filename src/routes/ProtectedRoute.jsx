import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { token, user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!token && !user) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
