import {gql} from '@apollo/client';

const DELETE_BOOK_PROJECT = gql`
mutation deleteBookProject($id: ID!) {
    deleteBookProject(id: $id) {
      name
      id
    }
  }
`;

export {DELETE_BOOK_PROJECT}