export interface iLesson {
  id: string;
  title: string;
  slug: string;
  thumb: string;
  moduleId: string;
  urlVideo: string;
}

export interface iModule {
  id: string;
  name: string;
  slug: string;
  description?: string;
  lessons: iLesson[];
  courseId: string;
}

export interface iCourse {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail?: string;
  modules: iModule[];
}
