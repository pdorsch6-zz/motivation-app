const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");


const API_PORT = 3001;
const app = express();

app.use(cors());

// this is our MongoDB database
const dbRoute = 'mongodb+srv://pdorsch6:hzAOJZF0eNNfKASW@motivationcluster-3p32s.mongodb.net/test?retryWrites=true';

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

require('./api/models/Quote');
require('./api/models/QuoteCategory');

const quoteRouter = require("./api/routes/quote");
const categoryRouter = require("./api/routes/quoteCategory");

app.use('/api/quote', quoteRouter);
app.use('/api/category', categoryRouter);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));