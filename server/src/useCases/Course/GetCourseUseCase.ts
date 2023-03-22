import { CoursesRepositoryInterface } from '../../repositories/interfaces/CoursesRepositoryInterface'

interface GetCourseUseCaseRequest {
  ownerId: string
  courseId: string
}

export class GetCourseUseCase {
	constructor(
    private repository: CoursesRepositoryInterface
	) {}

	public async execute({ ownerId, courseId }: GetCourseUseCaseRequest) {
		if (!ownerId) throw new Error('Send owner id')
		if (!courseId) throw new Error('Send course id')

		const course = await this.repository.findCourse(ownerId, courseId)
		return course
	}
}