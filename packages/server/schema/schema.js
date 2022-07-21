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

const Book = require("../mongoose-models/bookSchema");
const Author = require("../mongoose-models/authorSchema");
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
  name: "BookClient",
//   function that returns the graphQL strongly typed object
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// bookProject Type
const BookProjectType = new GraphQLObjectType({
  name: 'BookProject',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// STEP 2: HTTP graphQL query to the db (Equivalent of GET request)
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
        return BookClient.find(client => client.id === args.id);
      },
    },

      // bookProject object
      bookProject: {
        type: BookProjectType,
        args: { id: { type: GraphQLID } },
      //   resolver in the query - hard coded with vanilla JS find method
        resolve(parent, args) {
          return BookProject.find(project => project.id === args.id);
        },
      },

    // LISTS
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // all books - empty object returns them all
        return Book.find({});
        // FROM HARD-CODED DATA ARRAY
        // return books;
      },
    },
    // authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({});
        // FROM HARD-CODED DATA ARRAY
        // return authors;
      },
    },
    // clients
    bookClients: {
      type: new GraphQLList(BookClientType),
      resolve(parent, args) {
        return BookClient.find({});
      },
    },
    // projects
    bookProjects: {
      type: new GraphQLList(BookProjectType),
      resolve(parent, args) {
        return BookProject.find({});
      },
    },
    
  },
});

// FROM & TO DB
// mutations are the equivalent of the CRUD actions - create(add), update delete
// save() findByIdAndUpdate() findByIdAndRemove() - mongoose methods
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
        // this constructor comes from the mongoose Schema - new payload to save
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
     // Delete book (destructive permanent)
     deleteBook: {
      type: BookType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      resolve(parent, args) {
        return book.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
