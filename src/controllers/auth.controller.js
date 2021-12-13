import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'

export const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body
    if (!email) return res.status(404).json('email is required')
    if (!password) return res.status(404).json('password is required')

    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password)
    })
    if (roles) {
      //Search the collection if the role exists and we save the id
      const foundRoles = await Role.find({ name: { $in: roles } })

      newUser.roles = foundRoles.map(role => role._id)
    } else {
      const role = await Role.findOne({ name: 'user' })

      newUser.roles = [role._id]
    }
    const saveUser = await newUser.save()

    const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
      expiresIn: 86400 // 24 hours
    })
    res.status(200).json({ newUser, token })
  } catch (error) {
    res.status(400).json({ message: `${error} , when creating user` })
  }
}

export const signIn = async (req, res) => {
  const { email, password } = req.body
  const userFound = await User.findOne({ email }).populate('roles')
  if (!userFound) return res.status(400).json({ message: 'User not found' })

  const matchPassword = await User.comparePassword(password, userFound.password)
  if (!matchPassword)
    return res.status(401).json({ token: null, message: 'Invalid password' })
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400
  })
  res.json({ token })
}
