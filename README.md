# Lerna and Monorepos
# Scaffolding:

- Global install node
- In your repo create a server side folder 

cd server and install
`npm install express helmet cors dotenv nodemon express-router graphql express-graphql lodash lodash.flowright mongoose --save-dev`

# Scripts:

entry-point in package-json
 `"main": "server.js",`

cd server and `nodemon server` to spin up server in local host (port 4000 || port of your choice)

For graphql in the browser `http://localhost:4000/graphql` once you have set up the express server 

# Dbs
MongoDb