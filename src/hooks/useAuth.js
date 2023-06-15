import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextDispatch = createContext();

export const useAuthContext = () => useContext(AuthContext);
export const useAuthDispatchContext = () => useContext(AuthContextDispatch);

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const logout = () => setAuth(false);

  const login = () => setAuth(true);

  return (
    <AuthContext.Provider value={isAuth}>
      <AuthContextDispatch.Provider
        value={{
          logout,
          login,
        }}
      >
        {children}
      </AuthContextDispatch.Provider>
    </AuthContext.Provider>
  );
};
