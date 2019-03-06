const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Author = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1
    },
  },
  
);

module.exports = mongoose.model("Author", Author);