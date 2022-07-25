import {useQuery, gql} from '@apollo/client';

const GET_BOOK_ID = gql`
    query GetBookId($id:String!){
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

export const useGetBookIdQuery = (id) => {
    const { loading, error, data, refetch } = useQuery(GET_BOOK_ID,{
        variables: {
            id
        }
    });
    return {
        error,
        data,
        loading,
        refetch,
    };
};
