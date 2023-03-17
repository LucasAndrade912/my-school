import { Course } from '../../types/Course'

export interface CoursesRepositoryInterface {
  insert: (ownerId: string, course: Course) => Promise<void>
  findAllCourses: (userId: string) => Promise<Course[]>
}