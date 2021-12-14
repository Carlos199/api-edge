const { Router } = require('express')
const router = Router()

const authCtrl = require('../controllers/auth.controller.js')
const {
  checkRolesExisted,
  checkDuplicateUsernameOrEmail
} = require('../middlewares/verifySignup.js')

router.post(
  '/signup',
  [checkDuplicateUsernameOrEmail, checkRolesExisted],
  authCtrl.signUp
)
router.post('/signin', authCtrl.signIn)

module.exports = router
