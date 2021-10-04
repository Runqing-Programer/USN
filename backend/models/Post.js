const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
{
  userId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    max: 500,
    required: true,
  },
  img: {
    type: String,
    default: "",
  },
  likes: {
    type: Array,
    default: [],
  },
  role: {
    type: Array,
    default : [],
    required: false,
  },
},
{ timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
