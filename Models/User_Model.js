const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
  {
    firstName: { type: String, required: [true, 'Name field is required'] },
    lastName: { type: String, required: [true, 'Lastname field is required'] },
    email: { type: String, required: [true, 'Email field is required'] },
    password: { type: String, required: [true, 'Password field is required'] },
    role: { type: String, default: 'Client' },
  },
  {
    timestamps: true,
    versionKey: false
  }
)
const user = mongoose.model('user', User, 'user');
module.exports = user;