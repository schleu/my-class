import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../constants/AppRoutes";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { UserProvider } from "../provider/UserProvider";

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} Component={Home} />
      <Route
        path={AppRoutes.LOGIN}
        element={
          <UserProvider>
            <LoginPage />
          </UserProvider>
        }
      />
    </Routes>
  );
}
