import { Request, Response } from 'express'

import { GetAllCoursesUseCase } from '../../useCases/Course/GetAllCoursesUseCase'
import { CoursesRepository } from '../../repositories/Sql/Course/CoursesRepository'

export class GetAllCoursesController {
	static async handle(req: Request, res: Response) {
		const repository = new CoursesRepository()
		const getAllCoursesUseCase = new GetAllCoursesUseCase(repository)

		try {
			const courses = await getAllCoursesUseCase.execute(req.sub)

			return res.status(200).json(courses)
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}