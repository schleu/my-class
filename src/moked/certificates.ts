import { myCourses } from "./courses";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface iCertificate {
  id: string;
  course: string;
  initDate: Date;
  endDate: Date;
}

function getCompletedCourses() {
  const mc = myCourses.filter((c) => c.progress >= 95);

  console.log(mc);
  return mc;
}
export const certificatesMoked = getCompletedCourses();
