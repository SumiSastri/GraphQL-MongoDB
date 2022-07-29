
import {gql} from '@apollo/client';

const CREATE_BOOK = gql`
mutation addBook($name: String!, $genre:String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId:$authorId){
        name
        id
    }
}
`;



const DELETE_BOOK = gql`
mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      name
      id
    }
  }
`;



export { CREATE_BOOK,  DELETE_BOOK };