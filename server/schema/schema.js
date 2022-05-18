const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID } = graphql;


const books = [
    {name: "A Fine Gift from Lakshmi", genre: "Short Stories", id: "1", authorId:"1" },
    {name: "Butterfly Dreams", genre: "Short Stories", id: "2",authorId:"1"  },
    {name: "Water on a Lotus Leaf", genre: "Novella", id: "3",authorId:"1"  },
    {name: "The Blue Convertible", genre: "Short Stories", id: "4",authorId:"1"  },
    {name: "Shivaji", genre: "3 Act Play", id: "5",authorId:"1"  },
    {name: "Dravida Purvankkala Kataikal", genre: "Short Stories", id:"6", authorId:"2"},
    {name: "Famous Findings of Police Officer Thanavan", genre: "Short Stories", id:"7", authorId:"2"},
    {name: "Dravida Mattiyakalakkataikal", genre: "Short Stories", id:"8", authorId:"2"}
];

const authors = [

    {name: "Prema Sastri", century: 20 , id: "1" },
    {name: "Pandit Natesa Sastri", century: 19, id: "2" },
    {name: "Angrai T Sadasivam", century: 19 , id: "3" },
    {name: "Kalki", century: 21, id: "4" },
    {name: "Sumi Sastri", century: 20, id: "5" }
    
    ]

const BookType = new GraphQLObjectType({
    name: 'Book',
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
        century: { type: GraphQLInt }
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
                return _.find(books, { id: args.id });
                // with ES6
                // return books.find(book => book.id === args.id)
            }
    },
    // author object
    author: {
        type: AuthorType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args){
         // with ES6
                return authors.find(author => author.id === args.id)
        }
    }
} 
});

module.exports = new GraphQLSchema({
    query: RootQuery
});