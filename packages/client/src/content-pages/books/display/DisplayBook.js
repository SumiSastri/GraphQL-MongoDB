import React from "react";
// with apollo no prop-drilling and passing data around as it performs local state management
import {useMutation} from "@apollo/client"

// data
import { useGetBookIdQuery } from "../../../utils/hooks/useGetBookIdQuery";
import { GET_BOOK_ID } from '../../../utils/queries/queries';
import {DELETE_BOOK} from "../../../utils/mutations/deleteBookMutation"

// components
import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';

function DisplayBook({bookId}) {
const { error, loading, data, } = useGetBookIdQuery(bookId);
const [deleteBook] = useMutation(DELETE_BOOK,
  {
      variables: {
        id: bookId,
      },
      refetchQueries: [{ query: GET_BOOK_ID}],
    // update(cache, { data: { deleteBook } }) {
    //   const { books } = cache.readQuery({ query: GET_BOOKS });
    //   cache.writeQuery({
    //     query: GET_BOOKS,
    //     data: {
    //       books: books.filter((book => book.id !== deleteBook.id),
    //     },
    //   });
    // },
  })

  

if (error) return <div><ErrorHasOccurredComponent /></div>
if (loading) return <div><Loading /></div>

return (
  <div>
    <h2>{data.book.name}</h2>
      <h5>Genre</h5><p>{data.book.genre}</p>
      <h5>Author</h5><p>{data.book.author.name}</p>
      <h6>More by the same author</h6> 
                      { data.book.author.books.map(item => {                
                          return  <div className="other-books" key={item.id}>
                        <ul id="book-details">
                            <li >{ item.name }</li>
                          <button className="btn-secondary">Update</button>
                          <button 
                          className="btn-primary"
                          onClick={deleteBook}
                          >Delete</button>  
                          </ul>
                          </div>
                      })}      
  </div>
);
}
  

export default DisplayBook;