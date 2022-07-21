
// import {gql} from '@apollo/client';

// const CREATE_BOOK = gql`
// mutation CreateBook (
    // $name: String!, 
    // $genre:String!, 
    // $authorId:ID!
    // ) {
//     createBook(
    // name: $name, 
    // genre: $genre, 
    // authorId:$authorId
    // ){
//         name
//         id
//     }
// }
// `

// const UPDATE_BOOK = gql`
// mutation UpdateBook (
    // $id: ID!
    // $name: String!, 
    // $genre:String!, 
    // $authorId:ID!
    // ) {
//     updateBook(
    // id: $id
    // name: $name, 
    // genre: $genre, 
    // authorId:$authorId
    // ){
//         name
//         genre
//         id
//         authorId
//     }
// }
// `

// const DELETE_BOOK = gql`
// mutation DeleteBook($id: ID!) {
//     deleteBook(id: $id) {
//       id
//     }
//   }
// `;


// export { CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK, };