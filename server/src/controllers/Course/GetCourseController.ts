import { Request, Response } from 'express'

import { GetCourseUseCase } from '../../useCases/Course/GetCourseUseCase'
import { CoursesRepository } from '../../repositories/Sql/CoursesRepository'

export class GetCourseController {
	static async handle(req: Request, res: Response) {
		const repository = new CoursesRepository()
		const getCourseUseCase = new GetCourseUseCase(repository)

		try {
			const course = await getCourseUseCase.execute({
				ownerId: req.sub,
				courseId: req.params.courseId
			})

			return res.status(200).json(course)
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}