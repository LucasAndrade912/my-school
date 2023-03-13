import { CoursesRepositoryInterface } from '../../repositories/interfaces/CoursesRepositoryInterface'


export class GetAllCoursesUseCase {
	constructor(
    private repository: CoursesRepositoryInterface
	) {}

	public async execute(userId: string) {
		const courses = await this.repository.findAllCourses(userId)

		return courses
	}
}