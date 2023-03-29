import { Course } from '../../types/Course'
import { Nullish } from '../../types/Nullish'

interface Class {
  name: string,
  description?: string,
  startTime: number,
  endTime: number,
  assisted: boolean,
  days: string[]
}

interface CourseFinded extends Course {
  id: string
  classes: Class[]
}

export interface CoursesRepositoryInterface {
  insert: (ownerId: string, course: Course) => Promise<void>
  findCourse: (ownerId: string, courseId: string) => Promise<CourseFinded | Nullish>
  findAllCourses: (userId: string) => Promise<Course[]>
}