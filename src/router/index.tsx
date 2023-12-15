import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../constants/AppRoutes";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { UserProvider } from "../provider/UserProvider";
import { CreateAccountPage } from "../pages/CreateAccount";
import { PrivacyPolicyPage } from "../pages/PolicePrivacity";
import { TermsOfUsePage } from "../pages/TermsOfUse";

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
      <Route path={AppRoutes.CREATE_ACCOUNT} element={<CreateAccountPage />} />
      <Route path={AppRoutes.POLICY_PRIVACY} element={<PrivacyPolicyPage />} />
      <Route path={AppRoutes.TERMS_OF_USE} element={<TermsOfUsePage />} />
    </Routes>
  );
}
