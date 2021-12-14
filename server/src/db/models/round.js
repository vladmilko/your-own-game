const { Schema, model } = require('mongoose');

const roundSchema = new Schema({
  date: Date,
  count_card: Number,
  total_score: Number,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: String,
  updatedAt: Date,
},
{ timestamps: true });

module.exports = model('Round', roundSchema);
