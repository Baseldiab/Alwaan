import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

const RequireAdminAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.isAdmin) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
export default RequireAdminAuth;
