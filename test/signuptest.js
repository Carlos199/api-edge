const mongoose = require('mongoose')
const app = require('../src/app.js')
const chai = require('chai')
const request = require('supertest')
const User = require('../src/models/User.js')

describe('POST /auth/signup', function () {
  it('responds with 400 when email null', function () {
    request(app)
      .post('/api/auth/signup')
      .send({ username: 'carlos', email: '', password: '123' })
      .set('Accept', 'application/json')
      .expect(400)
  })
})

describe('POST /registro', function () {
  it('responds with 200 registration is correct ', function () {
    request(app)
      .post('/api/auth/signup')
      .send({
        username: 'luiscarlos',
        email: 'carlos25@gmail.com',
        password: '123'
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200)
        res.body.success.should.equal(true)
        done()
      })
  })
})
