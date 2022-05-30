import React from "react";
import { useGetBookIdQuery } from "../../../utils/hooks/useGetBookIdQuery";

import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';

function DisplayBook({bookId}) {
// console.log("displayBook props:", bookId)
const { error, loading, data } = useGetBookIdQuery(bookId);
// console.log("Book by ID:", {error, loading, data, bookId})

// function DisplayBook() {
// // hard code and log to test with one book 
// const { error, loading, data } = useGetBookIdQuery("628b5550c3d7458e93b55b5d");

if (error) return <div><ErrorHasOccurredComponent /></div>
if (loading) return <div><Loading /></div>

return (
  <div>
    <h2>My Book</h2>
    <div id="book-details">
      <p>Name:{data.book.name}</p>
      <p>Genre:{data.book.genre}</p>
      <p>Author:{data.book.author.name}</p>
      <p>More books by the same author:</p>
      <ul className="other-books">
                      { data.book.author.books.map(item => {
                          return <li key={item.id}>{ item.name }</li>
                      })}
                  </ul>
    </div>
  </div>

);
}
  

export default DisplayBook;