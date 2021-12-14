const { Schema, model } = require('mongoose')

exports.ROLES = ['user', 'admin', 'moderator']

const rolesSchema = new Schema(
  {
    name: String
  },
  {
    versionKey: false
  }
)

module.exports = model('Role', rolesSchema)
