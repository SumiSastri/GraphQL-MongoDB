// parses graphql - as it is not JS
import {useQuery, gql} from '@apollo/client';

// function to get the data
const GET_BOOKS = gql`
    query {
        books {
            name
            id
        }
    }
`;

export const useGetBooksQuery = () => {
    const { loading, error, data, refetch } = useQuery(GET_BOOKS);
    return {
        error,
        data,
        loading,
        refetch
    }
}