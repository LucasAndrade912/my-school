import { Request, Response } from 'express'

import { ZodAdapter } from '../../adapters/ZodAdapter'
import { CreateCourseUseCase } from '../../useCases/Course/CreateCourseUseCase'
import { SqlCoursesRepository } from '../../repositories/Course/SqlCoursesRepository'

export class CreateCourseController {
	static async handle(req: Request, res: Response) {
		const repository = new SqlCoursesRepository()
		const zod = new ZodAdapter()
		const createCourseUseCase = new CreateCourseUseCase(repository, zod)

		try {
			await createCourseUseCase.execute(req.sub, req.body)

			return res.status(201).send()
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}