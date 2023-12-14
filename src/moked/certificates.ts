import { myCoursesMoked } from "./courses";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface iCertificate {
  id: string;
  course: string;
  initDate: Date;
  endDate: Date;
}

function getCompletedCourses() {
  const mc = myCoursesMoked.filter((c) => c.progress >= 95);
  return mc;
}
export const certificatesMoked = getCompletedCourses();
