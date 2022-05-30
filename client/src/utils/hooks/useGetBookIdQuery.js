import {useQuery, gql} from '@apollo/client';
// test by hardcoding the book with single id
// query GetBookId($id:String!){
    
    // required when dynamically passing prop
    // query GetBookId($id:ID!){
export const GET_BOOK_ID = gql`
query GetBookId($id: ID!){
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
    const { loading, error, data } = useQuery(GET_BOOK_ID,{
        options: (props) => {
            return {
                variables: {
                    id: props.bookId
                }
            }
        }
    });
    return {
        error,
        data,
        loading,
        id
    };
};
