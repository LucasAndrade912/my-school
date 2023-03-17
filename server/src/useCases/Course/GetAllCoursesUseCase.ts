import { CoursesRepositoryInterface } from '../../repositories/interfaces/CoursesRepositoryInterface'

export class GetAllCoursesUseCase {
	constructor(
    private repository: CoursesRepositoryInterface
	) {}

	public async execute(userId: string) {
		if (!userId) {
			throw new Error('Send user id')
		}

		const courses = await this.repository.findAllCourses(userId)

		return courses
	}
}