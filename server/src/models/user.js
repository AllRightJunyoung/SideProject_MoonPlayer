const { Schema, model, Types } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    userKey: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);
module.exports = model("User", userSchema);
