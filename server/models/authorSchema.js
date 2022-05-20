const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the book & author models interact with the MongoDb collection and mimic our grapql schema
const authorSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);