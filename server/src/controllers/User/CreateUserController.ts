import { Request, Response } from 'express'

import { JWTAdapter } from '../../adapters/JwtAdapter'
import { ZodAdapter } from '../../adapters/ZodAdapter'
import { UsersRepository } from '../../repositories/Sql/UsersReposiitory'

import { CreateUserUseCase } from '../../useCases/User/CreateUserUseCase'

export class CreateUserController {
	static async handle(req: Request, res: Response) {
		try {
			const repository = new UsersRepository()
			const jwt = new JWTAdapter()
			const zod = new ZodAdapter()
			const createUserUseCase = new CreateUserUseCase(repository, jwt, zod)

			const data = await createUserUseCase.execute({ accessToken: req.body.accessToken })

			return res.status(201).json(data)
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}