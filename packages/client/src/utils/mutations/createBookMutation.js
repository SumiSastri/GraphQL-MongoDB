import {gql} from '@apollo/client';

// CRUD actions are mutations in Graphql - CReate, Update, Delete
const CREATE_BOOK = gql`
mutation addBook($name: String!, $genre:String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId:$authorId){
        name
        id
    }
}
`
export {CREATE_BOOK}