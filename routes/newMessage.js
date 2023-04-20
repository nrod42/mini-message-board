const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

/* GET new message page. */
router.get("/", function (req, res, next) {
  res.render("pages/form");
});

/* POST new message */
router.post("/", async function (req, res) {
  await Message.create({
    message: req.body.message,
    username: req.body.username,
    date: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
