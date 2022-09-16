const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone: String,
  birth: Date,
  createdAt: {type: Date, required: true},
  updatedAt: Date,
  isAdmin: {type: Boolean, required: true},
  isActive: {type: Boolean, required: true}
})

module.exports = User