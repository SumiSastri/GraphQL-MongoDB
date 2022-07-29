import { gql } from '@apollo/client';



const CREATE_BOOK_PROJECT = gql`
mutation AddBookProject($name: String!, $description:String!, $status: ProjectStatus!, $bookClientId:ID!) {
    addBookProject(name: $name, description: $description, status: $status, bookClientId:$bookClientId){
        name
        description
        status
        bookClientId
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
    $status: StatusUpdate!
  ) {
    updateBookProject(
      id: $id
      name: $name
      description: $description
      $status: ProjectStatusUpdate!
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