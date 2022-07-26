import { gql } from '@apollo/client';


const CREATE_BOOK_PROJECT = gql`
  mutation AddBookProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $bookClientId: ID!
  ) {
    addBookProject(
      name: $name
      description: $description
      status: $status
      bookClientId: $bookClientId
    ) {
      id
      name
      description
      status
      bookClient {
        id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_BOOK_PROJECT = gql`
  mutation DeleteBookProject($id: ID!) {
    deleteBookProject(id: $id) {
      id
    }
  }
`;

const UPDATE_BOOK_PROJECT = gql`
  mutation UpdateBookProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateBookProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      bookClient {
        id
        name
        email
        phone
      }
    }
  }
`;

export { CREATE_BOOK_PROJECT, DELETE_BOOK_PROJECT, UPDATE_BOOK_PROJECT };