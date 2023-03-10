export interface Class {
  name: string,
  description?: string,
  startTime: number,
  endTime: number,
  assisted: boolean,
  weekDays: number[]
}