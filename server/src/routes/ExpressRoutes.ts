import { Router } from 'express'

import { ReturnUserDataController } from '../controllers/ReturnUserDataController'

export class ExpressRoutes {
  private routes: Router

  constructor () {
    const router = Router()

    router.get('/me', ReturnUserDataController.handle)

    this.routes = router
  }

  getRoutes() {
    return this.routes
  }
}