const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const Book = require("../models/bookSchema");
const Author = require("../models/authorSchema");
const { BookProjects, BookClients } = require("../mocks");

//STEP 1: DEFINE server-side graphQL typeS
const BookType = new GraphQLObjectType({
  name: "Book",
  // void function to call the fields due to call-stack
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    // related nested query
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
    // Link author to a list of books with a constructor
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // mongoose method
        return Book.find({ authorId: parent.id });
      },
    },
  }),
});

// bookClient Type
const BookClientType = new GraphQLObjectType({
  name: "Client",
//   function that returns the graphQL strongly typed object
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// STEP 2: HTTP graphQL query to the db
const RootQuery = new GraphQLObjectType({
  // Single query of nested objects unlike REST
  name: "RootQueryType",
//   query fields are a plain object strongly typed 
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
    // author object
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      },
    },
    // bookClient object
    bookClient: {
      type: BookClientType,
      args: { id: { type: GraphQLID } },
    //   resolver in the query - hard coded with vanilla JS find method
      resolve(parent, args) {
        return BookClients.find(client => client.id === args.id);
      },
    },
    // books and authors as lists
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // all books - empty object returns them all
        return Book.find({});
        // FROM HARD-CODED DATA ARRAY
        // return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({});
        // FROM HARD-CODED DATA ARRAY
        // return authors;
      },
    },
  },
});

// FROM & TO DB
// mutations are the equivalent of the CRUD actions - add, update, create, delete
// findByIdAndUpdate() findByIdAndRemove() - mongoose methods
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
          century: args.century,
        });
        return author.save();
      },
    },
    // to db collection
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
