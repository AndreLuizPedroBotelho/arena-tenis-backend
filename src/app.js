import express from 'express'

import setupRoutes from './configs/routes'
import setupDatabase from './configs/database'
import setupMiddlewares from './configs/middlewares'

const app = express()

setupMiddlewares(app)
setupDatabase()
setupRoutes(app)

export default app