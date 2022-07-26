import { gql } from "@apollo/client";

// function to get the data
const GET_BOOKS = gql`
  {
    books {
      name
      authorId
      id
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const GET_BOOK_CLIENTS = gql`
  query BookClients {
    bookClients {
      id
      name
      email
      phone
    }
  }
`;

const GET_BOOK_PROJECTS = gql`
  query getBookProjects {
    bookProjects {
     id
     name
     status
     description
    }
  }
`;

const GET_BOOK_ID = gql`
  query GetBookId($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        century
        books {
          name
          id
        }
      }
    }
  }
`;

// TODO - debug bookClient
// the bookProject takes id not bookClientId
const GET_BOOK_PROJECT_ID = gql`
  query GetBookProjectId($id: ID!) {
    bookProject(id: $id) {
      id
      name
      description
      status
      # bookClient {
      #   id
      #   name
      #   email
      #   phone
      # }
    }
  }
`;


export {
  GET_AUTHORS,
  GET_BOOKS,
  GET_BOOK_CLIENTS,
  GET_BOOK_PROJECTS,

  GET_BOOK_ID,
  GET_BOOK_PROJECT_ID
};
