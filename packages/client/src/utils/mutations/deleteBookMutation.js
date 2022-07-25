import {gql} from '@apollo/client';

const DELETE_BOOK = gql`
mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      name
      id
    }
  }
`;

export {DELETE_BOOK}


