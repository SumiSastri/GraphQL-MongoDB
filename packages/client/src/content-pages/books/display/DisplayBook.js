import React from "react";
// data
import { useGetBookIdQuery } from "../../../utils/hooks/useGetBookIdQuery";
// components
import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';

function DisplayBook({bookId}) {
const { error, loading, data } = useGetBookIdQuery(bookId);

if (error) return <div><ErrorHasOccurredComponent /></div>
if (loading) return <div><Loading /></div>

return (
  <div>
    <h2>{data.book.name}</h2>
    <div id="book-details">
      <h5>Genre</h5><p>{data.book.genre}</p>
      <h5>Author</h5><p>{data.book.author.name}</p>
      <h6>More by the same author</h6>
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