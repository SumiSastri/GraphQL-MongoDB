// parses graphql - as it is not JS
import { gql } from 'apollo-boost';

// function to get the data
const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

export {getAuthorsQuery, getBooksQuery}