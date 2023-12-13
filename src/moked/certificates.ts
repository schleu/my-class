import { myCourses } from "./courses";

function getCompletedCourses() {
  const mc = myCourses.filter((c) => c.progress >= 95);
  console.log(mc);
  return mc;
}
export const certificatesMoked = getCompletedCourses();
