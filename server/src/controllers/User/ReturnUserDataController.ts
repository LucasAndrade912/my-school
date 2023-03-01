import { Request, Response } from 'express'

import { SqlUsersRepository } from '../../repositories/User/SqlUsersReposiitory'
import { ReturnUserDataUseCase } from '../../useCases/User/ReturnUserDataUseCase'

export class ReturnUserDataController {
	static async handle(req: Request, res: Response) {
		const repository = new SqlUsersRepository()
		const returnUserDataUseCase = new ReturnUserDataUseCase(repository)

		try {
			const userData = await returnUserDataUseCase.execute(req.sub)

		  return res.status(200).json(userData)
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}