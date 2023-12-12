import { Route, Routes, Navigate } from "react-router-dom";
import { AppRoutes } from "../constants/AppRoutes";
import { NotFound } from "../pages/404";
import { ClassPage } from "../pages/Class";
import { CoursePage } from "../pages/Class/Course";
import { CoursesPage } from "../pages/Class/Courses";
import { DashboardPage } from "../pages/Class/Dashboard";
import { LogoffPage } from "../pages/Logoff";
import { ProfilePage } from "../pages/Class/Profile";

export function PrivateRouter() {
  return (
    <Routes>
      <Route
        path={AppRoutes.CLASS}
        element={<Navigate to={AppRoutes.CLASS_DASHBOARD} />}
      />
      <Route path={AppRoutes.CLASS} element={<ClassPage />}>
        <Route path={AppRoutes.CLASS_DASHBOARD} element={<DashboardPage />} />
        <Route path={AppRoutes.CLASS_COURSES} element={<CoursesPage />} />
        <Route path={AppRoutes.CLASS_COURSE} element={<CoursePage />} />
        <Route path={AppRoutes.CLASS_PROFILE} element={<ProfilePage />} />
        <Route path={AppRoutes.LOGOFF} element={<LogoffPage />} />
        <Route path="*" element={<Navigate to={AppRoutes.CLASS_DASHBOARD} />} />
      </Route>
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
