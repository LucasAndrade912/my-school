import { Course } from '../../types/Course'

import { ValidatorAdapter } from '../../adapters/ValidatorAdapter'
import { SqlCoursesRepositoryInterface } from '../../repositories/Course/SqlCoursesRepositoryInterface'


export class CreateCourseUseCase {
	constructor(
    private repository: SqlCoursesRepositoryInterface,
    private validator: ValidatorAdapter
	) {}

	public async execute(ownerId: string, course: Course) {
		const schema = this.validator.createSchema({
			name: this.validator.string(),
			icon: this.validator.string()
		})

		schema.validate(course)

		await this.repository.insert(ownerId, course)
	}
}