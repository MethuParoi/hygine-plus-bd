import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/ui/Loader/Loader";

function AdminRoute({ children }) {
  const location = useLocation();
  const { loading } = useContext(AuthContext);
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  if (loading) {
    return (
      <div className="fixed top-1/2 left-1/2">
        <Loader />
      </div>
    );
  }

  if (isAdmin) {
    return children;
  }
  return <Navigate to="/admin-login" state={{ from: location }} replace />;
}

export default AdminRoute;
