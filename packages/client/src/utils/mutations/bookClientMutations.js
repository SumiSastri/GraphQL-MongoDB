import { gql } from '@apollo/client';

const ADD_BOOK_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addBookClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_BOOK_CLIENT = gql`
  mutation deleteBookClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_BOOK_CLIENT, DELETE_BOOK_CLIENT };