import { ExpressAdapter } from './adapters/ExpressAdapter'
import { ExpressRoutes } from './routes/ExpressRoutes'

const routes = new ExpressRoutes().getRoutes()
const { createServer } = new ExpressAdapter()

const { startServer } = createServer(routes)
startServer(3333)