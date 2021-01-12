// instantiate ORM
const mongoose = require("mongoose");

// instantiate the mongoose.Schema() method
const Schema = mongoose.Schema;

// create the data model constructor - note upper cases
const DataModel = new Schema({
  userName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

// use Node module.exports() method toe xport this into the api-routes
module.exports = mongoose.model("Validation data", DataModel);
// OR module.exports = Validation data = mongoose.model('Validation data', DataModel);
