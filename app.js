const express = require("express");
const app = express();
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const port = 3000;

const indexRouter = require("./routes/index");

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
dotenv.config();
const mongoDB = process.env.MONGO_URI;

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

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// new message page
app.get("/new", function (req, res) {
  res.render("pages/new");
});

app.listen(port);
console.log(`Server is listening on port ${port}`);
