import { Request, Response } from 'express'

import { ReturnUserDataUseCase } from '../useCases/ReturnUserDataUseCase'

export class ReturnUserDataController {
  static handle(req: Request, res: Response) {
    const userData = ReturnUserDataUseCase.execute()

    res.status(200).json(userData)
  }
}