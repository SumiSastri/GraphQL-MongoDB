import {gql} from '@apollo/client';

const CREATE_BOOK_PROJECT = gql`
mutation AddBookProject($name: String!,   $status: ProjectStatus!, $description:String!, $bookClientId:ID!) {
    addBookProject(name: $name, status: $status, description: $description, bookClientId:$bookClientId){
        name
        id
    }
}
`;
export {CREATE_BOOK_PROJECT}