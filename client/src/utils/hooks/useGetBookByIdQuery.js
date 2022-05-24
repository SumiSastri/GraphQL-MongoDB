import {useQuery, gql} from '@apollo/client';

const GET_BOOK_ID = gql`
    query GetBook($id:String!){
        book(id:$id) {
            name
            id
            genre
        }
        author{
            name
            century
        }
    }
`;

export const useGetBookByIdQuery = (id) => {
    const { loading, error, data } = useQuery(GET_BOOK_ID,{
        variables: {
            id
        }
    });
    return {
        error,
        data,
        loading
    };
};