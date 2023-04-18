const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/Message");

mongoose.set("strictQuery", false);
const mongoDB =
  "mongodb+srv://admin:mkAwAxgnKp7s6HCb@cluster0.qu4m9sh.mongodb.net/mini_message_board?retryWrites=true&w=majority";

(async function () {
  await mongoose.connect(mongoDB);
})().catch((err) => console.log(err));

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await Message.find();
  res.render("pages/index", {
    title: "Mini Message Board",
    messages: messages,
  });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("pages/form");
});

/* POST new message */
router.post("/new", async function (req, res) {
  await Message.create({
    message: req.body.message,
    username: req.body.username,
    date: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
