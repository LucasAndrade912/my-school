import express, { Express, Router } from 'express'
import cors from 'cors'

import { HttpAdapter } from './HttpAdapter'

export class ExpressAdapter implements HttpAdapter<Express, Router> {
  createServer(routes: Router) {
    const server = express()
    
    server.use(express.json())
    server.use(cors())
    server.use(routes)
    
    const startServer = (port: number) => {
      server.listen(port, () => {
        console.log('🚀 Server is running')
      })
    }

    return { startServer }
  }
}