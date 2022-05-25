// parses graphql - as it is not JS
import {gql} from "@apollo/client";

// function to get the data
const GET_BOOKS = gql`
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

const GET_BOOK_ID = gql`
    query GetBookId($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

// create is a mutation
const addBookMutation = gql`
mutation {
    addBook(name: "", genre: "", authorId: ""){
        name
        id
    }
}

`

export { GET_AUTHORS, GET_BOOKS, GET_BOOK_ID, addBookMutation }