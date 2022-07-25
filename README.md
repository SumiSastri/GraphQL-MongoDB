# Table of Contents

Authors Repo using GraphQL-React-MongoDb and Lerna as a package manager

<img src="packages/docs/assets/GraphQL-React-Mongo-App.png" alt="Authors Repo using GraphQL-React-MongoDb" height="350"/>

1. Scaffolding
2. Scripts
3. Dbs
# Scaffolding:

Lerna can be added to manage the 2 repos more efficiently.

1. Install lerna in root `npm install lerna --save-dev`
2. Initialise the package `npx lerna init`
You should have an empty packages folder in root as well as a `lerna.json` and `package.json` file
3. In the `package.json` as well as the `lerna.json` add a version `  "version": "1.0.0",`
4. Add a `.gitignore` file to ignore node modules

Run these package methods if needed.
`npx lerna clean -y` removes duplicate node modules and any mismatches in the existing packages
`npx lerna bootstrap --hoist` - hoists dependencies from all packages in the root node module

Client-side dependencies:
You need to install graphQL both on the FE and BE

Bootstrapped with `npx create-react-app`
`npm install @apollo/client grapql react-router react-router-dom react-icons lodash lodash.flowright`

Add bootstrap CDK to `index.html`

Server-side dependencies:
There are several options like grapql-yoga and systems like graph-cms, etc., 

The libraries used in this repo are:

`npm install express express-router graphql express-graphql helmet cors dotenv nodemon lodash lodash.flowright mongoose colors --save-dev`

express-graphql works well with JavaScript, express in a node environment.
# Scripts:
Update packages:
In root `npx lerna bootstrap`

Client-side:
cd packages/client - `npm run start`
LocalHost: `http://localhost:3000/`

Server-side:
- set up MongoDb/ whitelist IP/ check password and `.env` file for MONGO_URI

cd packages/server - `nodemon server`
cd server and `nodemon server` to spin up server in local host (port 4000 || port of your choice)

entry-point in package-json
 `"main": "server.js",`
LocalHost: `http://localhost:4000/graphql` once you have set up the express server 

__dotenv file__

NODE_ENV="development"
PORT=4000
MONGO_URI=mongodb+srv://username:password@cluster0.slip5.mongodb.net/test? (or name of db)

__graphiql__

`http://localhost:4000/graphql`
# Dbs
MongoDb
Mongoose - ORM
Connect with Mongo Atlas

