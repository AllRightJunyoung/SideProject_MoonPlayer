const { Schema, model } = require("mongoose");

const MusicSchema = new Schema({
  source_url: String,
  name: String,
  img_url: String,
  id: Number,
});

const Music = model("Music", musicSchema);
module.exports = { Music, MusicSchema };
