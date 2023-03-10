import { Class } from '../../types/Class'

type Classes = Array<Omit<Class, 'weekDays'> & { id: string }>

export interface SqlClassRepositoryInterface {
  insert: (courseId: string, data: Class) => Promise<void>
  findClassesByWeekDay: (courseId: string, weekDay: number) => Promise<Classes>
}