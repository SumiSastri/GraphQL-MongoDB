# What are mutations in GraphQL?

Mutations are similar to the rest verbs create-update-delete.

A mutation is a strongly typed object that changes the original data to the shape that is required depending on the use case.

GraphQL assumes there will be side-effects ater mutation operations and changes the dataset after mutation key word `mutation` the operation defined in an object.

A resolver function is a function that resolves a value for a type or field in our GraphQL schema in the api-environment resolving the header and the response data.

Resolvers can return objects or scalars like strings, numbers, Booleans, et cetera. They can also resolve values from another REST API, database, cache, or any other source. 

eg: below is in the file `packages/server/schema/schema.js`

```
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
<!-- CREATE -->
         addBook: {
      type: BookType,
<!-- ensure the types are typed correctly and that if type is GraphQLNonNull it is a constructor with they key word new -->
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
<!-- make a new instance of the data in the database -->
      resolve(parent, args) {
<!-- this constructor comes from the mongoose Schema - new payload to save -->
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
    
<!-- DELETE DESTRUCTIVE - PERMANENT -->
            deleteBook: {
      type: BookType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      resolve(parent, args) {
        return Book.findByIdAndRemove(args.id);
      },
    },   
});
```
