export enum AppRoutes {
  HOME = "/",
  LOGIN = "/login",
  CLASS = "/class",
  CLASS_DASHBOARD = "/class/dashboard",
  CLASS_PROFILE = "/class/profile",
  CLASS_COURSES = "/class/courses",
  CLASS_COURSE = "/class/course/:courseSlug/:moduleSlug/:lessonSlug",
  CLASS_CERTIFICATE = "/class/cerificates",
  CLASS_CERTIFICATE_VALIDATOR = "/class/cerificate/:courseId",
  LOGOFF = "/class/logoff",
}
