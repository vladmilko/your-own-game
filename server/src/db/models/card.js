const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  deck: String,
  question: String,
  answer: String,
  score: Number,
  createdAt: String,
  updatedAt: Date,
},
{ timestamps: true });

module.exports = model('Card', cardSchema);
