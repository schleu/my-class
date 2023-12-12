import { CourseCard } from "../../../components/CourseCard";
import { Section } from "../../../components/Section";
import { myCourses } from "../../../moked/courses";

export function CoursesPage() {
  return (
    <Section title="Meus cursos">
      <div className="w-full flex gap-4">
        {myCourses.map((e) => (
          <CourseCard
            key={e.id}
            id={e.id}
            image={e.thumbnail || ""}
            title={e.name}
            description="Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem."
            progress={e.progress}
          />
        ))}
      </div>
    </Section>
  );
}
