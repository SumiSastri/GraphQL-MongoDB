// parses graphql - as it is not JS
import { gql } from '@apollo/client';

// function to get the data
const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const GET_AUTHORS = gql`
    {
        authors {
            name
            id
        }
    }
`;

// create is a mutation
const CREATE_BOOK = gql`
mutation {
    addBook(name: "", genre: "", authorId: ""){
        name
        id
    }
}

`

export { GET_AUTHORS, getBooksQuery, CREATE_BOOK }