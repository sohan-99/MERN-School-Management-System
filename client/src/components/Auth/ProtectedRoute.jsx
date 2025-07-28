// import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
