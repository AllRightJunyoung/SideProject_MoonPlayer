const { Schema, model } = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
const { MusicSchema } = require("./music");

const PlayListSchema = new Schema(
  {
    order: { type: Number, required: true },
    playList: [MusicSchema],
    userKey: { type: String, required: true },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

PlayListSchema.plugin(uniqueValidator);
module.exports = model("PlayList", PlayListSchema);
