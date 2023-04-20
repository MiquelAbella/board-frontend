import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/main" element={<MainPage />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
