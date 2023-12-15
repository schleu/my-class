import { Route, Routes, Navigate } from "react-router-dom";
import { AppRoutes } from "../constants/AppRoutes";
// import { NotFound } from "../pages/404";
import { ClassPage } from "../pages/Class";
import { CoursePage } from "../pages/Class/pages/Course";
import { CoursesPage } from "../pages/Class/pages/Courses";
import { DashboardPage } from "../pages/Class/pages/Dashboard";
import { LogoffPage } from "../pages/Logoff";
import { ProfilePage } from "../pages/Class/pages/Profile";
import { CertificatesPage } from "../pages/Class/pages/Certificates";
import { CertificatePage } from "../pages/Class/pages/Certificate";

export function PrivateRouter() {
  return (
    <Routes>
      <Route
        path={AppRoutes.CLASS}
        element={<Navigate to={AppRoutes.CLASS_DASHBOARD} />}
      />
      <Route path={AppRoutes.CLASS} element={<ClassPage />}>
        <Route path={AppRoutes.CLASS_DASHBOARD} element={<DashboardPage />} />
        <Route
          path={AppRoutes.CLASS_CERTIFICATE}
          element={<CertificatesPage />}
        />
        <Route
          path={AppRoutes.CLASS_CERTIFICATE_VALIDATOR}
          element={<CertificatePage />}
        />
        <Route path={AppRoutes.CLASS_COURSES} element={<CoursesPage />} />
        <Route path={AppRoutes.CLASS_COURSE} element={<CoursePage />} />
        <Route path={AppRoutes.CLASS_PROFILE} element={<ProfilePage />} />
        <Route path={AppRoutes.LOGOFF} element={<LogoffPage />} />
        <Route path="*" element={<Navigate to={AppRoutes.CLASS_DASHBOARD} />} />
      </Route>
      {/* <Route path="*" Component={NotFound} /> */}
    </Routes>
  );
}
