const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  name: {type: String},
  attraction: [String],
  venue: {type: String, trim: true},
  link: {type: String, trim: true },
  image: {type: String, trim: true},
  date: {type: String},
  key: {type: String, unique: true}
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
