const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const MusicSchema = new Schema({
  source_url: String,
  name: String,
  img_url: String,
  id: Number,
});

const Music = model("Music", MusicSchema);
MusicSchema.plugin(uniqueValidator);
module.exports = { Music, MusicSchema };
