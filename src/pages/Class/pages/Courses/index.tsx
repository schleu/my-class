import { CourseCard } from "../../../../components/CourseCard";
import { Section } from "../../../../components/Section";
import { myCoursesMoked } from "../../../../moked/courses";

export function CoursesPage() {
  return (
    <Section title="Meus cursos">
      <div className="w-full flex flex-wrap gap-8 justify-center md:justify-start">
        {myCoursesMoked.map((e) => (
          <CourseCard
            key={e.id}
            image={e.thumbnail || ""}
            title={e.name}
            description="Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem."
            progress={e.progress}
            courseSlug={e.slug}
            moduleSlug={e.modules[0].slug}
            lessonSlug={e.modules[0].lessons[0].slug}
          />
        ))}
      </div>
    </Section>
  );
}
