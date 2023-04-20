import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/userContext";

export const PrivateRoutes = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" />;
};
