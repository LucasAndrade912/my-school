import { Router } from 'express'

import { AuthMiddleware } from '../middleware/AuthMiddleware'

import { CreateUserController } from '../controllers/User/CreateUserController'
import { ReturnUserDataController } from '../controllers/User/ReturnUserDataController'

import { CreateCourseController } from '../controllers/Course/CreateCourseController'
import { GetAllCoursesController } from '../controllers/Course/GetAllCoursesController'

import { CreateClassController } from '../controllers/Class/CreateClassController'

export class ExpressRoutes {
	private routes: Router

	constructor () {
		const router = Router()

		router.get('/me',
			AuthMiddleware.handle,
			ReturnUserDataController.handle
		)
		router.post('/users', CreateUserController.handle)

		router.get('/courses',
			AuthMiddleware.handle,
			GetAllCoursesController.handle
		)
		router.post('/courses',
			AuthMiddleware.handle,
			CreateCourseController.handle
		)
		router.post('/courses/:id/classes',
			AuthMiddleware.handle,
			CreateClassController.handle
		)

		this.routes = router
	}

	getRoutes() {
		return this.routes
	}
}