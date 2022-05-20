const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLList } = graphql;

const {Book, Author} = require ("../mocks/index")

// const Book = require ("../models/bookSchema")
// const Author = require ("../models/authorSchema")

const BookType = new GraphQLObjectType({
    name: 'Book',
    // void function to call the fields due to call-stack
    fields: ( ) => ({
        // id: { type: GraphQLString },
        id: { type: graphql.GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        // related nested query
        author: {
            type: AuthorType,
            resolve(parent, args){
            //  logs to node console
            //  console.log(parent)
                    // return _.find(authors, { id: parent.authorId });
                    // with ES6
                    return authors.find(author => author.id === parent.authorId)
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ( ) => ({
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
    resolve(parent, args){
        // console.log(parent)
        // return _.filter(books, {authorId: parent.id})
        // with ES6
               return books.filter(book => book.authorId === parent.id)
               
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
            resolve(parent, args){
                // with lodash
                // console.log(parent)
                // return _.find(books, { id: args.id });
                // with ES6
                return books.find(book => book.id === args.id)
                
            }
    },
    // author object
    author: {
        type: AuthorType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args){
            // console.log(parent)
         // with ES6
                return authors.find(author => author.id === args.id)
               
        }
    },
    // books and authors as lists
    books: {
        type: new GraphQLList(BookType),
        resolve(parent, args){
            return books;
        }
    },
    authors: {
        type: new GraphQLList(AuthorType),
        resolve(parent, args){
            return authors;
        }
    }
}
});

module.exports = new GraphQLSchema({
    query: RootQuery
});