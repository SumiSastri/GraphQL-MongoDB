import {useQuery, gql} from '@apollo/client';
// query GetBookId($id:String!){
    // query GetBookId($id:ID!){
export const GET_BOOK_ID = gql`
query GetBookId($id:String!){
        book(id: $id) {
            id
            name
            genre
            authorId
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

// export const useGetBookIdQuery = (id) => {
//     const { loading, error, data } = useQuery(GET_BOOK_ID,{
//         variables: {
//             id
//         }
//     });
//     return {
//         error,
//         data,
//         loading,
//     };
// };

export const useGetBookIdQuery = (id) => {
    const { loading, error, data } = useQuery(GET_BOOK_ID,{
        options: (props) => {
            return {
                variables: {
                    id: props.book
                }
            }
        }
    });
    return {
        error,
        data,
        loading,
    };
};