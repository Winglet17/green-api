import { Routes, Route } from "react-router-dom";
import { AppPublicContainer } from "./AppPublicContainer";

export const AppPublicRoutes = () => (
  <Routes>
    <Route path="/" element={<AppPublicContainer />} />
  </Routes>
);
