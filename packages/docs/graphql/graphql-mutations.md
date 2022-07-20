# What are mutations in GraphQL?

Mutations are similar to the rest verbs create-update-delete.

A mutation is a strongly typed object that changes the original data to the shape that is required depending on the use case.

GraphQL assumes there will be side-effects ater mutation operations and changes the dataset after mutation key word `mutation` the operation defined in an object.


A resolver function is a function that resolves a value for a type or field in our GraphQL schema. 

Resolvers can return objects or scalars like strings, numbers, Booleans, et cetera. They can also resolve values from another REST API, database, cache, or any other source. 

So, the GraphQL Server is where we'd write these resolver functions that mutate the data.

eg below is in the file `packages/server/schema/schema.js`

```
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            // ensure the types are typed correctly 
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                century: { type: new GraphQLNonNull(GraphQLInt) },
            },
            // make a new instance of the data in the database
            resolve(parent, args) {
                // this constructor comes from the mongoose Schema
                let author = new Author({
                    name: args.name,
                    century: args.century
                });
                return author.save()
            }
        },
    // to db collection
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        }
    }
});
```
