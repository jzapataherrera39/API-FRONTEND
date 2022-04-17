const mongoose = require('mongoose');
const Schena = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String
})

var User = mongoose.model('User', UserSchema);

module.exports = User;