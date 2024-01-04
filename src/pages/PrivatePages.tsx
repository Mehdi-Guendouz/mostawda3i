import { axiosInstance } from "@/api/config";
import { useUserStore } from "@/hooks/user-store";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const location = useLocation();
  const userStore = useUserStore();
  const token = userStore.token;

  useEffect(() => {
    const localToken = localStorage.getItem("token");

    // Check if there's a token in localStorage and if the user is not already authenticated
    if (localToken && !token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localToken}`;
      userStore.setToken(localToken);
      setLoading(false); // Set loading to false once the token is set
    } else {
      setLoading(false); // Set loading to false if there's no token or user is already authenticated
    }
  }, [token, userStore, navigate]); // Include userStore and navigate in the dependency array

  return loading ? (
    <Loader />
  ) : userStore.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
