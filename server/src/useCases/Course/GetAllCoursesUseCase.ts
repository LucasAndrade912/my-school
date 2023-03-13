import { CoursesRepositoryInterface } from '../../repositories/Sql/Course/CoursesRepositoryInterface'


export class GetAllCoursesUseCase {
	constructor(
    private repository: CoursesRepositoryInterface
	) {}

	public async execute(userId: string) {
		const courses = await this.repository.findAllCourses(userId)

		return courses
	}
}