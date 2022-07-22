import {gql} from '@apollo/client';

const DELETE_BOOK = gql`
mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      name
      id
    }
  }
`;

export {DELETE_BOOK}


