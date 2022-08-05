const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = graphql;

const Book = require("../mongoose-models/bookSchema");
const Author = require("../mongoose-models/authorSchema");
const BookProject = require("../mongoose-models/bookProjectSchema");
const BookClient = require("../mongoose-models/bookClientSchema");


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
      id: { type: graphql.GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      // related nested query to book joined by a constructor
      author: {
        type: AuthorType,
        resolve(parent, args) {
          return Author.findById(parent.authorId);
        },
      },
    }),
  });
  
  const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
      id: { type: graphql.GraphQLID },
      name: { type: GraphQLString },
      century: { type: GraphQLInt },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          return Book.find({ authorId: parent.id });
        },
      },
    }),
  });
  

  const BookClientType = new GraphQLObjectType({
    name: "BookClient",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
    }),
  });
  
  const BookProjectType = new GraphQLObjectType({
    name: "BookProject",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      status: { type: GraphQLString },
    }),
    bookClient: {
      type: BookClientType,
      resolve(parent, args) {
        return BookClient.findById({ bookClientId: parent.id });
      },
    },
  });
  