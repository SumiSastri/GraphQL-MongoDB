### Using CLI to populate MongoDB

With the installation of MongoDB, you will get the command line interface (CLI) tools called MongoShell.

Check you have MongoDB installed type mongo --version in terminal for version you should get an output of something like this [MongoDB shell version v4.2.1] - you are now ready to use MongoShell locally.

Follow the steps in Method1: To create a directory and access permissions to the directory in the main folder. If your `show dbs` has worked you can now run all the other commands.

Go to the terminal `use dbName` You will get a prompt `switched to dbName` - the name of the db you have just created. In terminal now initialise your db as the user using this command.\

```
db.createUser({ user: 'dbName', pwd: 'dbName', roles: [ "readWrite", "dbAdmin" ] })
```

You have now created yourself as the new user of this db.

If you already have set up a db in the cloud and want to access it

user: chat-app-user

### Frequently used MongoShell commands
show dbs [show databases]
db [check which db you are in]
db.drop nameOfDb [delete a db created]

use nameOfDb [switch to database created
eg. ```use products-db```]

db.CreateCollection('nameOfCollection') [create a collection of documents
eg. ```db.CreateCollection('products')```]

show collections [shows all collections of documents in db]
db.nameOfCollection.insert({}) [insert data/documents/rows]

```
db.products.insert({
service: "New Co Ltd",
products:"Small Wongle",
price: 5,
tags:["uk", "eu", "usa"],
user: {
	name:"Jack Ma",
	email:'jack@ma.com'
},
date:Date()
})
```

db.nameOfCollection.insertMany([{}]) [insert multiple documents as an array of objects]

```
db.products.insertMany([

{
service: "Old Co Ltd",
price: 10,
tags:["uk", "eu", "usa"],
user: {
	name:"Joe May",
	email:'joe@may.com'
},
date:Date()
},

{
service: "New Co Ltd",
products:"Medium Wongle",
price: 12,
tags:["uk", "eu", "usa"],
user: {
	name:"Jamila Manzoor",
	email:'jamila@manzoor.com'
},
date:Date()
},

{
service: "New Co Ltd",
products:"Large Wongle",
price: 15,
tags:["uk", "eu", "usa"],
user: {
	name:"Jayanthi Maniranthnam",
	email:'jaya@manirathnam.com'
},
date:Date()
}

])
```

db.nameOfCollection.find({}).pretty() [see the whole collection in a readable format eg. ```db.products.find().pretty()```]

db.nameOfCollection.find({key: "value"}).pretty() [see a particular part of the data entry eg. ```db.products.find({products: "Small Wongle"}).pretty()``` ]

db.nameOfCollection.find({}).sort({key:-1}).pretty() [sort in descending order eg. ```db.products.find().sort({price: -1}).pretty()```]
db.nameOfCollection.find({}).sort({key:1}).pretty() [sort in ascending order]

READ[https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp][http://mongodb.github.io/node-mongodb-native/3.2/tutorials/connect/] Understanding how assert works [https://stackoverflow.com/questions/28129223/node-js-assert-module-in-mongodb-driver-documentation] Understanding the syntax and call back function within MongoDB [https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html]
