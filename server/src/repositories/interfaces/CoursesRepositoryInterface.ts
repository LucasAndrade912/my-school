import { Course } from '../../types/Course'
import { Nullish } from '../../types/Nullish'

export interface CoursesRepositoryInterface {
  insert: (ownerId: string, course: Course) => Promise<void>
  findCourse: (ownerId: string, courseId: string) => Promise<Course & { id: string } | Nullish>
  findAllCourses: (userId: string) => Promise<Course[]>
}