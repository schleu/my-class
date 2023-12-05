import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/404";
import { Home } from "../pages/Home";
import { AppRoutes } from "../constants/AppRoutes";
import { LoginPage } from "../pages/Login";
import { ClassPage } from "../pages/Class";

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} Component={Home} />
      <Route path={AppRoutes.LOGIN} Component={LoginPage} />
      <Route path={AppRoutes.CLASS} Component={ClassPage} />

      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
