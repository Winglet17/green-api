import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

import { AuthProvider } from "../hooks/useAuth";
import { AuthFormProvider } from "../hooks/useAuthForm";

function App() {
  return (
    <AuthProvider>
      <AuthFormProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthFormProvider>
    </AuthProvider>
  );
}

export default App;
