import { Router } from 'express'

import { ReturnUserDataController } from '../controllers/ReturnUserDataController'
import { CreateUserController } from '../controllers/CreateUserController'

export class ExpressRoutes {
	private routes: Router

	constructor () {
		const router = Router()

		router.get('/me', ReturnUserDataController.handle)
		router.post('/users', CreateUserController.handle)

		this.routes = router
	}

	getRoutes() {
		return this.routes
	}
}