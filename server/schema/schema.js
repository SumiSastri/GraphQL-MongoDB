const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } = graphql;

// hardcoded data
// const { Book, Author } = require("../mocks/index")

// move data to db
const Book = require ("../models/bookSchema")
const Author = require ("../models/authorSchema")

const BookType = new GraphQLObjectType({
    name: 'Book',
    // void function to call the fields due to call-stack
    fields: () => ({
        // id: { type: GraphQLString },
        id: { type: graphql.GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        // related nested query
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorId);
                // FROM HARD-CODED DATA ARRAY
                //  console.log(parent)
                // return _.find(authors, { id: parent.authorId });
                // with ES6
                // return authors.find(author => author.id === parent.authorId)
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
        // Link one author to a book
        // books: {
        //     type: BookType
        // }
        // Link author to a list of books with a constructor
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // mongoose method
                return Book.find({ authorId: parent.id });
                      // FROM HARD-CODED DATA ARRAY
                // console.log(parent)
                // return _.filter(books, {authorId: parent.id})
                // with ES6
                // return books.filter(book => book.authorId === parent.id)

            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    // Single query of nested objects unlike REST
    name: 'RootQueryType',
    fields: {
        // book object
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            // get request server-side data - source agnostic
            resolve(parent, args) {
                return Book.findById(args.id);
                      // FROM HARD-CODED DATA ARRAY
                // console.log(parent)
                // return _.find(books, { id: args.id });
                // with ES6
                // return books.find(book => book.id === args.id)

            }
        },
        // author object
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Author.findById(args.id);
                      // FROM HARD-CODED DATA ARRAY
                // console.log(parent)
                // with ES6
                // return authors.find(author => author.id === args.id)

            }
        },
        // books and authors as lists
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // all books - empty object returns them all
                return Book.find({});
                      // FROM HARD-CODED DATA ARRAY
                // return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({});
                      // FROM HARD-CODED DATA ARRAY
                // return authors;
            }
        }
    }
});
      // FROM & TO DB 
// mutations are the equivalent of the CRUD actions - add, update, create, delete
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            // ensure the types are typed correctly 
            args: {
                  // VALIDATION: NonNull makes the key-value pair required
                // name: { type: GraphQLString },
                // century: { type: GraphQLInt },
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
                // mongoose save method - saves data to db
                // author.save()
                // if you do not return it saves it on db but does not return it to fe
                return author.save()
            }
        },
    // to db collection
        addBook: {
            type: BookType,
            args: {
                // name: { type: GraphQLString },
                // genre: { type: GraphQLString },
                // authorId: { type: GraphQLID }
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

// queries and mutations exported for reuse (Commonjs)
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});