const express = require('express')

const productsRoutes = require('./routes/products.routes.js')
const authRoutes = require('./routes/auth.routes.js')
const { createRoles } = require('./libs/initialSetup')

const app = express()
createRoles()

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

module.exports = app
