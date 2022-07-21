# What is a GraphQL query?

Queries are used to query data in a database and are the equivalent of the GET request in a REST API.

Read more [https://app.pluralsight.com/guides/querying-data-with-graphql]

There is only one `RootQuery` where you get a list of key-value pairs or an object by its id.

Queries are strongly typed and are mandatory. The query is shaped as an object and a schema calling the data from its source.

The query operation is composed of:

Operation Name - unique name for the query keyword is `query` this is an anonymous query, you can also have unique named queries

Fields -  query fields are a plain object strongly typed and can reference the types set in the schema.

Args (arguements) - these are the params of the query - the id or the specific key-value pairs your need in a list

Resolver function - in the run-time environment resolves the request in the request header and returns the data requested

__Other fields__

Alias - if there are arguements with the same name, you need to create an alias to avoid errors

Fragments - reusable units (similar to functions - build sets of fields that you can use in mutliple queries) notated with 3 dots like the spread operator in JavaScript

Variables - similar to functions with input arguments

An example:

```
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // book object
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      // get request server-side data - source agnostic
      resolve(parent, args) {
        return Book.findById(args.id);
      },
    },

    // LISTS
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // all books - empty object returns them all - mongoose method
        return Book.find({});
      },
    }
});
```


