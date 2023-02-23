import { Request, Response } from 'express'

import { ReturnUserDataUseCase } from '../useCases/ReturnUserDataUseCase'

export class ReturnUserDataController {
	static async handle(req: Request, res: Response) {
		const returnUserDataUseCase = new ReturnUserDataUseCase()

		const userData = await returnUserDataUseCase.execute()

		res.status(200).json(userData)
	}
}