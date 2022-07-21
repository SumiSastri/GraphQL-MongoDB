const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
  const dbConnection = await mongoose.connect(MONGO_URI, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) .then(() => console.log(`SUCCESS: MongoDB Connected`.cyan.underline.bold))
    .catch(err => console.log(err, "DB CHECK: Not connected Check cloud connection, password, IP address"));
};

module.exports = connectDB;