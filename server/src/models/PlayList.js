const { Schema, model, Types } = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
const { MusicSchema } = require("./music");

const PlayListSchema = new Schema(
  {
    order: { type: Number, required: true },
    playList: [MusicSchema],
    userId: { type: String, required: true, ref: "User" },
  },
  { timestamps: true }
);

PlayListSchema.plugin(uniqueValidator);
module.exports = model("PlayList", PlayListSchema);
