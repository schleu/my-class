import { Route, Routes, Navigate } from "react-router-dom";
import { AppRoutes } from "../constants/AppRoutes";
import { Home } from "../pages/Home";
import { SignInPage } from "../pages/SignIn";
import { UserProvider } from "../provider/UserProvider";
import { SignUpPage } from "../pages/SignUp";
import { PrivacyPolicyPage } from "../pages/PolicePrivacity";
import { TermsOfUsePage } from "../pages/TermsOfUse";
import { SignOutPage } from "../pages/SignOut";

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} Component={Home} />
      <Route path={AppRoutes.POLICY_PRIVACY} element={<PrivacyPolicyPage />} />
      <Route path={AppRoutes.TERMS_OF_USE} element={<TermsOfUsePage />} />
      <Route
        path={AppRoutes.SIGN_IN}
        element={
          <UserProvider>
            <SignInPage />
          </UserProvider>
        }
      />
      <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
      <Route path={AppRoutes.SIGN_OUT} element={<SignOutPage />} />
      <Route path={"login"} element={<Navigate to={AppRoutes.SIGN_IN} />} />
      <Route path={"logoff"} element={<Navigate to={AppRoutes.SIGN_OUT} />} />
    </Routes>
  );
}
