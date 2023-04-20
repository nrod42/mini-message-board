const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await Message.find();
  res.render("pages/index", {
    title: "Mini Message Board",
    messages: messages,
  });
});

module.exports = router;
