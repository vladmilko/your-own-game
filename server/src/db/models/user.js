const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    match: /^[A-Z]\w+$/i,
  },
  email: {
    type: String,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    unique: true,
  },
  password: String,
  createdAt: String,
  updatedAt: Date,
},
{ timestamps: true });

module.exports = model('User', userSchema);
