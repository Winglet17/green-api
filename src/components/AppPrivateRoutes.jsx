import { Routes, Route } from "react-router-dom";
import { AppPrivateContainer } from "./AppPrivateContainer";

export const AppPrivateRoutes = () => (
  <Routes>
    <Route path="/" element={<AppPrivateContainer />} />
  </Routes>
);
