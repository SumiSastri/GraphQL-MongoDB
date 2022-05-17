const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
const books = [
    {name: "A Fine Gift from Lakshmi", genre: "Short Stories", id: "1" },
    {name: "Butterfly Dreams", genre: "Short Stories", id: "2" },
    {name: "Water on a Lotus Leaf", genre: "Novella", id: "3" },
    {name: "The Blue Convertible", genre: "Short Stories", id: "4" },
    {name: "Shivaji", genre: "3 Act Play", id: "5" }
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});