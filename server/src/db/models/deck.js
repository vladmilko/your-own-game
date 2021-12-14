const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
  title: String,
  cards_array: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Card'
    } 
  ],
  createdAt: String,
  updatedAt: Date,
},
{ timestamps: true });

module.exports = model('Deck', deckSchema);
