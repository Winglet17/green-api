import { createContext, useContext, useState } from "react";

export const AuthFormContext = createContext();

export const useAuthFormContext = () => useContext(AuthFormContext);

export const AuthFormProvider = ({ children }) => {
  const [idInstance, setIdInstance] = useState("1101830309");
  const [apiTokenInstance, setApiTokenInstance] = useState(
    "ff54b8e78936495babc1638062bc0c857cc15b432f1a4539bb"
  );
  const [chatId, setChatId] = useState("79084711793@c.us");

  const value = {
    idInstance,
    setIdInstance,
    apiTokenInstance,
    setApiTokenInstance,
    chatId,
    setChatId,
  };

  return (
    <AuthFormContext.Provider value={value}>
      {children}
    </AuthFormContext.Provider>
  );
};
