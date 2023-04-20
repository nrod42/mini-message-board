const express = require("express");
const app = express();
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const port = process.env.PORT || 8080;
dotenv.config();

const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/newMessage");

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URL;

(async function () {
  await mongoose.connect(mongoDB);
})().catch((err) => console.log(err));

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(port);
console.log(`Server is listening on port ${port}`);
