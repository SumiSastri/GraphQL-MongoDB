import { gql } from '@apollo/client';

// the mutuation should have the same name as back end
const CREATE_BOOK_CLIENT = gql`
  mutation addBookClient($name: String!, $email: String!, $phone: String!) {
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
    deleteBookClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;


export { CREATE_BOOK_CLIENT, DELETE_BOOK_CLIENT };