import { Course } from '../../types/Course'

export interface SqlCoursesRepositoryInterface {
  insert: (ownerId: string, course: Course) => Promise<Course>
  findAllCourses: (userId: string) => Promise<Course[]>
}