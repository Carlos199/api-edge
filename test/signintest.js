const mongoose = require('mongoose')
const app = require('../src/app.js')
const chai = require('chai')
const request = require('supertest')

describe('POST /auth/signin', function () {
  it('responds with 400 when email null', function () {
    request(app)
      .post('/api/auth/signin')
      .send({ email: '', password: '123' })
      .set('Accept', 'application/json')
      .expect(400)
  })
})

describe('POST /auth/signin', function () {
  it('responds with 400 when email is numbers', function () {
    request(app)
      .post('/api/auth/signin')
      .send({ email: '21224', password: '1234' })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})

describe('POST /login', function () {
  it('responds with 200 when login is correct', function () {
    request(app)
      .post('/api/auth/signin')
      .send({ email: 'carlos25@gmail.com', password: '123' })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200)
        res.body.success.should.equal(true)
        done()
      })
  })
})
