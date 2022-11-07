const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  createdAt: {type: Date, required: true},
  updatedAt: {type: Date, required: false},
  isAdmin: {type: Boolean, required: true}
})

module.exports = User