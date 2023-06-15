import { ChatInputText } from "./ChatInputText";
import { ChatMessages } from "./ChatMessages";
import { AppButton } from "./AppButton";
import { useAuthDispatchContext } from "../hooks/useAuth";

import "./AppPrivateContainer.css";

export const AppPrivateContainer = () => {
  const { logout } = useAuthDispatchContext();
  return (
    <div className="app-private-container">
      <AppButton onClick={logout}>Выйти/сменить пользователя</AppButton>
      <ChatMessages />
      <ChatInputText />
    </div>
  );
};
