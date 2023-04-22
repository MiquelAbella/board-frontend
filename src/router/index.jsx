import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

const MainPage = lazy(() => import("../pages/MainPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/main"
            element={
              <Suspense fallback={<></>}>
                <MainPage />
              </Suspense>
            }
          />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <LoginPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
