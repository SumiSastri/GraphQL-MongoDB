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
    ref: 'Book Client',
  },
});

module.exports = mongoose.model('Book Project', BookProjectSchema);