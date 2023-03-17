import { ValidatorAdapter } from '../../adapters/ValidatorAdapter'
import { CoursesRepositoryInterface } from '../../repositories/interfaces/CoursesRepositoryInterface'

interface CreateCourseUseCaseRequest {
  ownerId: string
  data: {
    name: string
    color?: string
    icon?: string
  }
}

export class CreateCourseUseCase {
	constructor(
    private repository: CoursesRepositoryInterface,
    private validator: ValidatorAdapter
	) {}

	public async execute({ ownerId, data }: CreateCourseUseCaseRequest) {
		const schema = this.validator.createSchema({
			name: this.validator.string()
		})

		schema.validate(data)

		await this.repository.insert(ownerId, {
			name: data.name,
			color: data.color ?? '#7353BA',
			icon: data.icon ?? '📚'
		})
	}
}