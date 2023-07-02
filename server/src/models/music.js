const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const musicSchema = new Schema({
  type: {
    source_url: String,
    name: String,
    img_url: String,
    id: Number,
  },
  required: true,
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

musicSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Music", musicSchema);
