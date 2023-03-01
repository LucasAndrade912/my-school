import { SqlCoursesRepositoryInterface } from '../../repositories/Course/SqlCoursesRepositoryInterface'


export class GetAllCoursesUseCase {
	constructor(
    private repository: SqlCoursesRepositoryInterface
	) {}

	public async execute(userId: string) {
		const courses = await this.repository.findAllCourses(userId)

		return courses
	}
}