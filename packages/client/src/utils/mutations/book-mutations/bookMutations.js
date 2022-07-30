
import {gql} from '@apollo/client';

const CREATE_BOOK = gql`
mutation AddBook($name: String!, $genre:String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId:$authorId){
        name
        id
    }
}
`;

const DELETE_BOOK = gql`
mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      name
      id
    }
  }
`;

// create update last as it is a create + id as used in the delete operation
const UPDATE_BOOK = gql`
mutation UpdateBook( $id: ID! $name: String!, $genre:String!) {
    updateBook(id: $id, name: $name, genre: $genre){
        name
        id
    }
}
`;


export { CREATE_BOOK,  DELETE_BOOK, UPDATE_BOOK };