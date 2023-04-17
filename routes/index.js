const express = require('express');
const router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Mini Message Board', messages: messages });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("pages/form");
});

/* POST new message */
router.post("/new", function (req, res) {
  messages.push({text: req.body.message, user: req.body.username, added: new Date()});
  res.redirect("/");
})

module.exports = router;
