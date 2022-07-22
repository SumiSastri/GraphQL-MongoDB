const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLEnumType } = graphql;

const Book = require ("../mongoose-models/bookSchema")
const Author = require ("../mongoose-models/authorSchema")
const BookProject = require('../mongoose-models/bookProjectSchema');
const BookClient = require('../mongoose-models/bookClientSchema');

//STEP 1: DEFINE server-side graphQL types
// mongoose methods find() and findById()
const BookType = new GraphQLObjectType({
    name: 'Book',
    // void function to call the fields due to call-stack
    // returns the graphQL strongly typed object no related data
    fields: () => ({
        id: { type: graphql.GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        // related nested query to book joined by a constructor
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorId);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: graphql.GraphQLID },
        name: { type: GraphQLString },
        century: { type: GraphQLInt },    
        // Link author to a list of books with a constructor
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({ authorId: parent.id });
            }
        }
    })
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
  // single binding only book project to client, not client to project
  bookClient: {
    type: BookClientType,
    resolve(parent, args) {
      return BookClient.findById({ bookClientId: parent.id });
    },
  },
});

// STEP 2: QUERY DATA by ID and LISTS
// mongoose methods findById() find({}) - empty object returns list
const RootQuery = new GraphQLObjectType({
   // GET BY ID
    name: 'RootQueryType',
    fields: {
  
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Book.findById(args.id);
            }
        },
        
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Author.findById(args.id);
            }
        },

        bookClient: {
          type: BookClientType,
          args: { id: { type: GraphQLID } },
          resolve(parent, args) {
            return BookClient.findById(args.id);
          }
      },

      bookProject: {
        type: BookProjectType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return BookProject.findById(args.id);
        }
    },
          // QUERY DATA AND GET ALL DATA IN A LIST
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({});
            }
        },

        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({});
            }
        },
    
    bookClients: {
      type: new GraphQLList(BookClientType),
      resolve(parent, args) {
        return BookClient.find({});
      }
    },
  
    bookProjects: {
      type: new GraphQLList(BookProjectType),
      resolve(parent, args) {
        return BookProject.find({});
      }
    },
  
  }  
});

// STEP 3 - mutate data that you have fetched
// Mutations are the equivalent of the CRUD actions - create(add), update delete
// save() findByIdAndUpdate() findByIdAndRemove() - mongoose methods
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
// CREATE - ADD A NEW RESOURCE TO DATABASE
        addAuthor: {
            type: AuthorType,
            // ensure the types are typed correctly 
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                century: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                // this constructor comes from the mongoose Schema
                let author = new Author({
                    name: args.name,
                    century: args.century
                });
                return author.save()
            }
        },
   
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
        },
    

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
      }
    },

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
      }
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
    }
  },
  
    // DELETE DESTRUCTIVE - PERMANENT
    deleteBook: {
      type: BookType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      resolve(parent, args) {
        return Book.findByIdAndRemove(args.id);
      }
    },

       deleteAuthor: {
        type: AuthorType,
        args: {
          id: { type: graphql.GraphQLID },
        },
        resolve(parent, args) {
          return Author.findByIdAndRemove(args.id);
        }
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
      }
    },
    
    deleteBookProject: {
      type: BookProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return BookProject.findByIdAndRemove(args.id);
      }
    },

  }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});