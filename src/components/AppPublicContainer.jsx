import { AuthForm } from "./AuthForm";
import { AppButton } from "./AppButton";

import { useAuthDispatchContext } from "../hooks/useAuth";

import "./AppPublicContainer.css";

export const AppPublicContainer = () => {
  const { login } = useAuthDispatchContext();

  return (
    <div className="app-public-container">
      <AuthForm />
      <AppButton onClick={login}>Войти</AppButton>
    </div>
  );
};
