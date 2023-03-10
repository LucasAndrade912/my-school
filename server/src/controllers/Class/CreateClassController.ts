import { Request, Response } from 'express'

import { ZodAdapter } from '../../adapters/ZodAdapter'
import { SqlClassRepository } from '../../repositories/Class/SqlClassRepository'
import { CreateClassUseCase } from '../../useCases/Class/CreateClassUseCase'

export class CreateClassController {
	static async handle(req: Request, res: Response) {
		const repository = new SqlClassRepository()
		const zod = new ZodAdapter()
		const createClassUseCase = new CreateClassUseCase(repository, zod)

		try {
			await createClassUseCase.execute(req.params.id, req.body)

			return res.status(201).send()
		} catch (err) {
			console.log(err)
			let statusCode = 500

			if (err instanceof Error) {
				statusCode = 400
			}

			return res.status(statusCode).send(err)
		}
	}
}