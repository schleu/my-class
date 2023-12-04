import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/404";
import { Home } from "../pages/Home";
import { AppRoutes } from "../contants/AppRoutes";

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} Component={Home} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
