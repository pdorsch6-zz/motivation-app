const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteCategory = new Schema(
  {
    category: {
      type: String,
      minlength: 1
    }
  }
);

module.exports = mongoose.model("QuoteCategory", QuoteCategory);