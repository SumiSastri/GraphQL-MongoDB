// dotenv config
require('dotenv').config();
const schema = require ("./schema/schema")
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const app = express();
const port = process.env.PORT || 3000;

// site security
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');

// middleware to call the methods of the library on the server
app.use(helmet());
app.use(cors());
app.use(express.json());
// parsing JSON from HTTP request headers
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
// GRAPHQL
	app.use('/graphql', graphqlHTTP({
		schema,
	graphiql:true
	}));

// REST
// app.get('/', (req, res) => {
// 	res.send('app home route working');
// });

app.listen(3000, () => console.log(`app server connected on port ${port}`));