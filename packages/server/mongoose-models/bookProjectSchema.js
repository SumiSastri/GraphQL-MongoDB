const mongoose = require('mongoose');

const BookProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  bookClientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BookClient',
  },
});

module.exports = mongoose.model('BookProject', BookProjectSchema);