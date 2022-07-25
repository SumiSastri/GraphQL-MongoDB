import {gql} from "@apollo/client";

// function to get the data
const GET_BOOKS = gql`
    {
        books {
            name
            authorId
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

const GET_BOOK_CLIENTS = gql`
    {
        bookClients {
            name
            email
            phone
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
                century
                books {
                    name
                    id
                }
            }
        }
    }
`;

// create is a mutation
const CREATE_BOOK = gql`
mutation {
    addBook(name: "", genre: "", authorId: ""){
        name
        id
        genre
        authorId
    }
}
`;
// the query field here must be the same as the back end
const CREATE_BOOK_CLIENT = gql`
mutation {
    addBookClient(name: "", email: "", phone: ""){
        name
        email
        phone
    }
}
`;

export { GET_AUTHORS, GET_BOOKS, GET_BOOK_CLIENTS, GET_BOOK_ID, CREATE_BOOK, CREATE_BOOK_CLIENT }