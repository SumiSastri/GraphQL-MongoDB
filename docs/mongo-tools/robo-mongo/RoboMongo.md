A MongoDB database is one big object containing collections.
Each collection has contextual items, for example, contacts for a database.
Then inside a collection we have documents which are the contacts themselves.
User contact information would be in several indivdual documents.
Inside each document we have the data for each contact, such as address, telephone, email, et cetera.

The document, itself, looks like a JSON object with a key-value pair approach or arrays of data. Mongoose, middleware, allows us to set a schema for a collection and predefine what each key-value pair takes as type.

#### What is the MEAN-MERN stack?

A stack is a collection of technologies used to run an app. The MEAN stack and MERN stack are an end-to-end javascript collection of technologies used to build apps using the Mongo database and mongoose.js/ express.js as a runner, angular.js or react.js for the front-end ui-ux and node.js to connect the Mongo database to the front-end libraries.

The MEAN/MERN stack are a network of applications based on javascript that communicate through the network front-end - midware - backend fluidly. It is often a preferred option for start-ups as fewer language specialisations are required in the dev team.

- The advantages of MEAN/ MERN- (Mongo-Express-Angular (or React)-Node) stack with javascript read: [https://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs] The stack has a robust architecture for small apps, and comes inbuilt with Jestfor unit testing, if you are using React. The article suggests using gulp for automated build tasks and brackets for full text coding. Server side componentization often done with Docker can be achieved with express.js or connect.js.

## Quick Overview of MongoDB tools

**MongoDB Atlas** is adatabase as service platform that provides an interface to manage and deploy MongoDB across cloud providers and regions. It was built to launch and manage your deployments for you, which simplifies the operational overhead of running a deployment.

What that means is that Atlas helps you easily setup and manage your database from your Atlas account on the web. If you're learning how to use MongoDB or creating a small scale application, the free tier is a great option for storing your data. A free cluster is a three server replica set with 512 megabytes of storage. Free tier clusters never expire. Under the free tier, you have access to a subset of Atlas features **Stitch** a serverless platform that makes it easier to use MongoDB and your web in mobile applications and **Charts** allowing you to create visual representations of your data.

**Compass** provides a graphical user interface (GUI) that allows you to explore the data in your database.

**Mongo Shell** which is an interactive JavaScript interface to MongoDB.

The Mongo Shell is great for playing around with all the features that the database has to offer, and really learning about MongoDB query language and functionality.

## What is Atlas?

Atlas is MongoDB's database as a service solution. It provides functionality to set up your database in the cloud without needing to configure the fine details yourself manually using the Shell. The main Atlas page shows all of your clusters.

Atlas also handles replication, which means your database maintains redundant copies of data to increase availability.

Atlas users can deploy clusters, which are groups of servers that store your data. These servers are configured in what we call a replica set, which is a cluster where each server stores the same data. This means that each time you insert or update a document, redundant copies are stored within the set. Using a replica set ensures that if you lose access to a server in your cluster you're not going to lose your data.

All of the servers in your cluster exist in the cloud on the cloud service provider of your choice.

## Why Atlas?

One main reason is the simplicity of setup. Atlas manages the details of creating clusters for you, which simplifies the operational overhead of running a deployment.

The Atlas interface makes it easier to manage and deploy MongoDB across cloud providers and regions. Atlas is also a great way to experiment with new MongoDB tools and features.

We can take a look at the data in our cluster using the Data Explorer by clicking the collections button. Atlas also integrates with several MongoDB services.You can use the Atlas interface to connect your cluster with MongoDB Stitch.

Atlas also allows you to configure users with different privileges levels in your database.

**What is Compass?**
It is GUI (graphical user interface) to get a quick view of the shape and state of your data, as well as test out MongoDB features as you are learning about the database and its functionality. You can use Compass to optimize query performance and manage indexes, among other things.

There has been a number of updates to Compass and the UI keeps changing, the functionality should remain the same.

See the steps below to connect your Atlas instance in the cloud to the database and use the cloud-based interface using Compass.

**What is Robomongo**

RoboMongo is a tool to test our Mongo database and make sure the data we have in our database matches the calls we make to the imports. It is the free, lightweight, open-source MongoDB GUI with an embedded mongo shell, real auto-completion, and support for

[robomongo.org] gives you htwo options: you can download the Studio 3T Only which has a lot of extra features; you can download Robo 3T Only which will connect and do some of the features that we need; or you can download them both and install them.

Robo 3T when downloaded on a Mac, may not immediately install due to the security settings on a Mac. Go to settings and privacy/security and add Robot3T to the list of trusted apps.

When you double click on the app make sure before you start Robo 3T, that MongoDB has been started. Then only will the connect button on the Robot 3T work and connect with the MongoDB via your server. Once MongoDB is connected to the server and app open a new connection in Robo 3T.

## Installing MongoDB locally
**RoboMongo**
To visualise the data download Robot3T now called RoboMongo, Studio3T is free for 30 days, while Robot3T is free forever. Once downloaded you will find your Db in Robot 3T

Go to File -> Connect... and then click on Create (this is at the top of the tool bar not at the bottom as a button do not click connect)

- Once you click create - On the first tab (Connection) just type the name of the connection.
