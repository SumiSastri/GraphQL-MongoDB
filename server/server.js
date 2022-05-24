const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// ORM
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;
// site security
const helmet = require('helmet');

// files
const schema = require('./schema/schema');

const app = express();
// allow cross-origin requests
app.use(cors());
// cors defaults
// {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }
// app.options('*', cors())

app.use(helmet());

// middleware to call the methods of the library on the server
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

mongoose.connect(`mongodb+srv://music-app-user:wU2SkhkKmYLzKmFd@cluster0.slip5.mongodb.net/test`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err, "DB: Not connected Check cloud connection, password, IP address"));




app.listen(4000, () => console.log(`app server connected on port ${port}`));
