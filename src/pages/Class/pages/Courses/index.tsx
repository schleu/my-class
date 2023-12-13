import { CourseCard } from "../../../../components/CourseCard";
import { Section } from "../../../../components/Section";
import { createSlug } from "../../../../hooks/useSlug";
import { myCourses } from "../../../../moked/courses";

export function CoursesPage() {
  return (
    <Section title="Meus cursos">
      <div className="w-full flex flex-wrap gap-4">
        {myCourses.map((e) => (
          <CourseCard
            key={e.id}
            image={e.thumbnail || ""}
            title={e.name}
            description="Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem."
            progress={e.progress}
            courseSlug={e.slug}
            moduleSlug={createSlug(e.modules[0].name)}
            classSlug={createSlug(e.modules[0].lessons[0].title)}
          />
        ))}
      </div>
    </Section>
  );
}