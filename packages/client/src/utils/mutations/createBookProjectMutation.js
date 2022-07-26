import {gql} from '@apollo/client';

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
export {CREATE_BOOK_PROJECT}