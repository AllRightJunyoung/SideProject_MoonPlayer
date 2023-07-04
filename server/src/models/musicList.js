const { Schema, model, Types } = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
const { MusicSchema } = require("./music");

const MusicListSchema = new Schema(
  {
    id: { type: Types.ObjectId, required: true },
    musicList: [MusicSchema],
    creator: { type: Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

musicListSchema.plugin(uniqueValidator);
module.exports = model("MusicList", MusicListSchema);
