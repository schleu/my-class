import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../constants/AppRoutes";
import { Home } from "../pages/Home";
import { PrivacyPolicyPage } from "../pages/PolicePrivacity";
import { SignInPage } from "../pages/SignIn";
import { SignOutPage } from "../pages/SignOut";
import { SignUpPage } from "../pages/SignUp";
import { TermsOfUsePage } from "../pages/TermsOfUse";
import { UserProvider } from "../provider/UserProvider";

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Home />} />
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
      <Route
        path={AppRoutes.SIGN_OUT}
        element={
          <UserProvider>
            <SignOutPage />
          </UserProvider>
        }
      />
      <Route path={"/login"} element={<Navigate to={AppRoutes.SIGN_IN} />} />
      <Route path={"/logoff"} element={<Navigate to={AppRoutes.SIGN_OUT} />} />
    </Routes>
  );
}
