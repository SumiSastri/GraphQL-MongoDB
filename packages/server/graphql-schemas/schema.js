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
  GraphQLEnumType,
} = graphql;

const Book = require("../mongoose-models/bookSchema");
const Author = require("../mongoose-models/authorSchema");
// const { bookProjects, bookClients } = require("../mocks");
const BookProject = require("../mongoose-models/bookProjectSchema");
const BookClient = require("../mongoose-models/bookClientSchema");

//STEP 1: DEFINE server-side graphQL types
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
  //   function that returns the graphQL strongly typed object no related data
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// bookProject Type with connected data
const BookProjectType = new GraphQLObjectType({
  name: "BookProject",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
  // related data projects-clients in a nested query
  bookClient: {
    type: BookClientType,
    resolve(parent, args) {
      // in mongoose schema
      return BookClient.findById({ bookClientId: parent.id });
      // in mocks bookClients has bookClientId
      // return bookClients.findById(parent.bookClientId);
    },
  },
});

// STEP 2: HTTP graphQL query to the db (Equivalent of GET request)
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // book object
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
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
        //  resolve with mongoose-model data
        return BookClient.findById(args.id);
      },
      // // in mocks bookClients - hard coded test first
      // return bookClients.find((client) => client.id === args.id);
    },
  },
  // bookProject object
  bookProject: {
    type: BookProjectType,
    args: { id: { type: GraphQLID } },
    //   resolver in the query - hard coded with vanilla JS find method
    resolve(parent, args) {
      //  resolve with mongoose model data
      return BookProject.findById(args.id);
    },
    //       // in mocks bookProjectss - hard coded test first
    // return bookProjects.find((project) => project.id === args.id);
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
    },
  },
  // clients
  bookClients: {
    type: new GraphQLList(BookClientType),
    resolve(parent, args) {
      // From mongoose models
      return BookClient.find({});
      // From mocks
      // return bookClients;
      // },
    },
  },
  // projects
  bookProjects: {
    type: new GraphQLList(BookProjectType),
    resolve(parent, args) {
      // From mongoose models
      return BookProject.find({});
      // From mocks
      // return bookProjects;
      // },
    },
  },
});

// STEP 3 - mutate data that you have fetched
// Mutations are the equivalent of the CRUD actions - create(add), update delete
// save() findByIdAndUpdate() findByIdAndRemove() - mongoose methods
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
// CREATE - ADD A NEW RESOURCE TO DATABASE
  // book
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
    // author
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        century: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          century: args.century,
        });
        return author.save();
      },
    },
    //client
    addBookClient: {
      type: BookClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let bookClient = new BookClient({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return bookClient.save();
      },
    },
      //project with enum type for status
    addBookProject: {
      type: BookProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatus',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'Completed' },
            },
          }),
          defaultValue: 'Not Started',
        },
        bookClientId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const bookProject = new BookProject({
          name: args.name,
          description: args.description,
          status: args.status,
          bookClientId: args.clientId,
        });
        return bookProject.save();
      },
    },

// UPDATE
    updateBookProject: {
      type: BookProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            // names must be unique - no spaces
            name: 'ProjectStatusUpdate',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'Completed' },
            },
          }),
        },
      },
      resolve(parent, args) {
        return BookProject.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },

    // DELETE DESTRUCTIVE - PERMANENT
    // book
    deleteBook: {
      type: BookType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      resolve(parent, args) {
        return Book.findByIdAndRemove(args.id);
      },
    },
       // author
       deleteAuthor: {
        type: AuthorType,
        args: {
          id: { type: graphql.GraphQLID },
        },
        resolve(parent, args) {
          return Author.findByIdAndRemove(args.id);
        },
      },
    // client -??
    deleteClient: {
      type: BookClientType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        BookProject.find({ bookClientId: args.id })
        .then((bookProjects) => {
          bookProjects.forEach((bookProject) => {
            bookProject.remove();
          });
        });
        return BookClient.findByIdAndRemove(args.id);
      },
    },
    // project
    deleteBookProject: {
      type: BookProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return BookProject.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
