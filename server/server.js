require('dotenv').config();
const port = process.env.PORT || 4000;
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// site security
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require("mongoose")
const app = express();

// files
const schema = require('./schema/schema');

// middleware to call the methods of the library on the server
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
// REST
// app.get('/', (req, res) => {
// 	res.send('app home route working');
// });
app.use(cors());
app.use(helmet());


mongoose.connect(``, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err, "DB: Not connected Check cloud connection, password, IP address"));

app.listen(4000, () => console.log(`app server connected on port ${port}`));
