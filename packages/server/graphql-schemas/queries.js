const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

import {BookType, AuthorType, BookClientType, BookProjectType} from "./typeDefinitions"

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      book: {
        type: BookType,
        args: { id: { type: GraphQLString } },
        resolve(parent, args) {
          return Book.findById(args.id);
        },
      },
  
      author: {
        type: AuthorType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Author.findById(args.id);
        },
      },
  
      bookProject: {
        type: BookProjectType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return BookProject.findById(args.id);
        },
      },
  
      bookClient: {
        type: BookClientType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return BookClient.findById(args.id);
        },
      },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          return Book.find({});
        },
      },
  
      authors: {
        type: new GraphQLList(AuthorType),
        resolve(parent, args) {
          return Author.find({});
        },
      },
  
      bookProjects: {
        type: new GraphQLList(BookProjectType),
        resolve(parent, args) {
          return BookProject.find({});
        },
      },
  
      bookClients: {
        type: new GraphQLList(BookClientType),
        resolve(parent, args) {
          return BookClient.find({});
        },
      },
    },
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
  });