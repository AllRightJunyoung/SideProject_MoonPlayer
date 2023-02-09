const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  nick: { type: String, required: true},
  snsId: { type: Number, required: true},
  provider: { type: String, required: true },
  
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('KakaoUser', userSchema);
