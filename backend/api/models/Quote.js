const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Quote = new Schema(
  {
    quote: {
      type: String,
      required: true,
      minlength: 1
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'QuoteCategory'
    },
    date_added: { type: Date, default: Date.now }
  },
  
);

module.exports = mongoose.model("Quote", Quote);