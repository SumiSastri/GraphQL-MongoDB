import {gql} from '@apollo/client';

// Update is similar to create - but you need to add the ID type as well as well
const UPDATE_BOOK = gql`
mutation UpdateBook( 
    $id: ID! 
    $name: String!, 
    $genre:String!
    ) {
    updateBook(
        id: $id, 
        name: $name, 
        genre: $genre
        ){
        id
        name
        genre
    }
}
`;
export {UPDATE_BOOK}