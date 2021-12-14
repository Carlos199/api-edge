const { ROLES } = '../models/Role.js'
const User = require('../models/User.js')
const emailvalidator = require('email-validator')

exports.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username })

  if (user) return res.status(400).json({ message: 'The user already exists' })

  if (emailvalidator.validate(req.body.email)) {
    const email = await User.findOne({ email: req.body.email })
    if (email)
      return res.status(400).json({ message: 'The email already exists' })
  } else {
    res.status(400).json('Invalid Email')
  }

  next()
}

exports.checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exists`
        })
      }
    }
    next()
  }
}
