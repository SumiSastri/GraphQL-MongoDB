graphql-express is a library that ships with the global `graphqlHTTP` method that can be used in an express server, it is imported into the server and the methods of the library. Once the method has been instantiated, a local instance can be used to access the methods of the library.

We can use the Express method `app.use()` and use the schemas and graphqlHTTP methods.

```
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
```