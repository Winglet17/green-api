import { useAuthContext } from "../hooks/useAuth";
import { AppPrivateRoutes } from "./AppPrivateRoutes";
import { AppPublicRoutes } from "./AppPublicRoutes";

export const AppRoutes = () => {
  const isLogin = useAuthContext();
  const privateRoute = isLogin;

  if (privateRoute) {
    return <AppPrivateRoutes />;
  }

  return <AppPublicRoutes />;
};
