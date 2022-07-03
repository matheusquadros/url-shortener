import express from 'express'
import setupRoutes from '@/main/routes'
import setupMiddlewares from '@/main/middlewares'

const app = express()

setupMiddlewares(app)
setupRoutes(app)

export default app
