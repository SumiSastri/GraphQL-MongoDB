const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI
const helmet = require('helmet');

// files
const schema = require('./schema/schema');

// middleware
const app = express();
app.use(cors());
app.use(helmet());
// use the grapqlHTTP library methods
app.use('/graphql', graphqlHTTP({
  schema,
  // if environment changes to production this changes to false
  graphiql: true
}));

// db connect
mongoose.connect(MONGO_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log('SUCCESS: MongoDB Connected...'))
  .catch(err => console.log(err, "DB CHECK: Not connected Check cloud connection, password, IP address"));

app.listen(4000, () => console.log(`GrapQL-MongoDB-App: Express server connected on port ${port}`));
