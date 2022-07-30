import {gql} from '@apollo/client';

const CREATE_BOOK = gql`
mutation AddBook($name: String!, $genre:String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId:$authorId){
        name
        id
    }
}
`;
export {CREATE_BOOK}