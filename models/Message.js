const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  username: { type: String, required: true, maxLength: 14 },
  date: { type: Date },
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);
