import { Class } from '../../types/Class'
import { CreateClassUseCase } from './CreateClassUseCase'
import { ClassesRepository } from '../../repositories/InMemory/ClassesRepository'
import { ZodAdapter } from '../../adapters/ZodAdapter'

function sutFactory() {
	const courseId = 'default-course-for-tests'
	const repository = new ClassesRepository()
	const validator = new ZodAdapter()
	const sut = new CreateClassUseCase(repository, validator)

	return { courseId, sut }
}

describe('Create Class Use Case', () => {
	it('should be able to create a new class', async () => {
		const { courseId , sut } = sutFactory()

		const today = new Date().getDay()
		const tomorrow = new Date().getDay() + 1

		const data: Class = {
			name: 'Função do 1° grau',
			description: 'Estudar um pouco sobre função do 1°.',
			assisted: false,
			weekDays: [today, tomorrow],
			startTime: 420,
			endTime: 480
		}

		expect(sut.execute({ courseId, data })).resolves.not.toThrow()
	})

	it('should not be able to create a new class if course not exists', async () => {
		const { sut } = sutFactory()

		const today = new Date().getDay()

		const data: Class = {
			name: 'Função do 1° grau',
			description: 'Estudar um pouco sobre função do 1°.',
			assisted: false,
			weekDays: [today],
			startTime: 420,
			endTime: 480
		}

		await expect(sut.execute({ courseId: 'not-exists', data })).rejects.toThrow()
	})

	it('should not be able to create a new class on a day that has passed', async () => {
		const { courseId, sut } = sutFactory()

		const dayHasPassed = new Date().getDay() - 1

		const data: Class = {
			name: 'Função do 1° grau',
			description: 'Estudar um pouco sobre função do 1°.',
			assisted: false,
			weekDays: [dayHasPassed],
			startTime: 420,
			endTime: 480
		}

		expect(sut.execute({ courseId, data })).rejects.toThrow()
	})

	it('should not be able to create a new class with the start time greater than the end time', async () => {
		const { courseId, sut } = sutFactory()

		const today = new Date().getDay()

		const data: Class = {
			name: 'Função do 1° grau',
			description: 'Estudar um pouco sobre função do 1°.',
			assisted: false,
			weekDays: [today],
			startTime: 420,
			endTime: 410
		}

		expect(sut.execute({ courseId, data })).rejects.toThrow()
	})

	it('should not be able to create a new class with a duration of less than 15 minutes', async () => {
		const { courseId, sut } = sutFactory()

		const today = new Date().getDay()

		const data: Class = {
			name: 'Função do 1° grau',
			description: 'Estudar um pouco sobre função do 1°.',
			assisted: false,
			weekDays: [today],
			startTime: 420,
			endTime: 425
		}

		expect(sut.execute({ courseId, data })).rejects.toThrow()
	})

	it('should not be able to create a new class with a schedule that conflicts with another class', async () => {
		const { courseId, sut } = sutFactory()

		const today = new Date().getDay()

		const class1: Class = {
			name: 'Função do 1° grau',
			description: 'Estudar um pouco sobre função do 1°.',
			assisted: false,
			weekDays: [today],
			startTime: 420,
			endTime: 480
		}

		const class2: Class = {
			name: 'Função do 2° grau',
			description: '',
			assisted: false,
			weekDays: [today],
			startTime: 420,
			endTime: 480
		}

		await expect(sut.execute({ courseId, data: class1 })).resolves.not.toThrow()
		expect(sut.execute({ courseId, data: class2 })).rejects.toThrow()
	})
})