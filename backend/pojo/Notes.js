const mongoose = require("mongoose");
const { Schema } = mongoose;
// const { Schema } = mongoose;
const userr = require("../pojo/User");

const NoteSchema = new Schema({
  user: { type: mongoose.ObjectId, ref: userr },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tag: {
    type: String,
    default: "default",
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("note", NoteSchema);
