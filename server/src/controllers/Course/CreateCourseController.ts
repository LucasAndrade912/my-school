import { Request, Response } from 'express'

import { ZodAdapter } from '../../adapters/ZodAdapter'
import { CreateCourseUseCase } from '../../useCases/Course/CreateCourseUseCase'
import { CoursesRepository } from '../../repositories/Sql/Course/CoursesRepository'

export class CreateCourseController {
	static async handle(req: Request, res: Response) {
		const repository = new CoursesRepository()
		const zod = new ZodAdapter()
		const createCourseUseCase = new CreateCourseUseCase(repository, zod)

		try {
			await createCourseUseCase.execute({ ownerId: req.sub, data: req.body })

			return res.status(201).send()
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}