# What is GraphQL

![Graph based dbs](packages/docs/assets/GraphQL-plotting-the-data-graph.png)

Image from the Net Ninja tutorial

GraphQL is a query language. It is an alternative to REST APIs as a form of querying back-end data.

It was created by Facebook to meet the needs of a mobile application where data must be served quickly and not based on the speed of the server.

It is therefore schema-based method that is agnostic to the data source or the front-end frame work or of the backend servers and the internals of passing data from the frontend to the backend.

**Advantages**
The advantages of this method of querying data is that you can pick and choose the exact data you need in the front end to use in the display. 

The REST HTTP method needs 4 query's one for each method - Create-Read-Update-Delete. GraphQl you need only 1 request. Making it more efficient.

The schema picks up data from different points of the graph isolating the data in a way that is easier to consume.

It is strictly types making it easy to debug and maintain.

**Disadvantages**

It requires a server and client side graphql connection - this means you may have to re-engineer both your front and backend resulting in dealing with migrations/ upgrades of both client-server side infrastructure

