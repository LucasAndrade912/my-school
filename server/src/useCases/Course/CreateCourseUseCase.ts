import { Course } from '../../types/Course'

import { ValidatorAdapter } from '../../adapters/ValidatorAdapter'
import { CoursesRepositoryInterface } from '../../repositories/interfaces/CoursesRepositoryInterface'

interface CreateCourseUseCaseRequest {
  ownerId: string
  data: Course
}

export class CreateCourseUseCase {
	constructor(
    private repository: CoursesRepositoryInterface,
    private validator: ValidatorAdapter
	) {}

	public async execute({ ownerId, data }: CreateCourseUseCaseRequest) {
		const schema = this.validator.createSchema({
			name: this.validator.string(),
			icon: this.validator.string(),
			color: this.validator.string()
		})

		schema.validate(data)

		await this.repository.insert(ownerId, data)
	}
}