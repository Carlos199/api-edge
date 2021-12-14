const app = require('../src/app.js')
const chai = require('chai')
const request = require('supertest')
const jwtAccessTokenDashboard = require('../config.test.js')

describe('GET /products', function () {
  it('It should GET products', function () {
    request(app)
      .get('/api/products')
      .expect(200)
      .end((err, response) => {
        console.log(response, 'response')
        response.status(404)
      })
  })
})

describe('POST /products', function () {
  it('responds with json', function () {
    request(app)
      .post('/api/products')
      .send({
        name: 'notebook acer',
        category: 'informatica',
        price: 'fsf',
        imgUrl: 'http:image'
      })
      .set('Content-Type', 'application/json')
      .expect(200)
      .expect(res => {
        console.log(res.body)
      })
  })
})
