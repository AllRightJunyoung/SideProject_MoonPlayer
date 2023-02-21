const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  profile_image: { type: String, required: true },
  nickname: { type: String, required: true },
  userId: { type: Number, required: true, unique: true },
  provider: { type: String, required: true, unique: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("GoogleUser", userSchema);
