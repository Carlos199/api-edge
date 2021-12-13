import express from 'express'
import { createRoles } from './libs/initialSetup'
//
const app = express()
createRoles()

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('../src/resources/swagger.json')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: false
  })
)
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

export default app
