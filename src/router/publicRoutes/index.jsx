import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/userContext";

export const PublicRoutes = () => {
  const { user } = useUser();

  return !user ? <Outlet /> : <Navigate to="/main" />;
};
