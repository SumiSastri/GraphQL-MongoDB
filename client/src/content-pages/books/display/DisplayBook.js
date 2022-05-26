import React from "react";
import { useGetBookIdQuery } from "../../../utils/hooks/useGetBookIdQuery";

import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';

function DisplayBook({bookId}) {
  console.log("displayBook props:", bookId)
// hard code and log to test
  const { error, loading, data } = useGetBookIdQuery(bookId.toString());
  console.log("Book by ID:", {error, data, loading})

  if (error) return <div><ErrorHasOccurredComponent /></div>
  if (loading) return <div><Loading /></div>

  return (
    <div>
      <h2>{data.book.name}</h2>
      <div id="book-details">
      <h4>Author</h4><p>{data.book.author.name}</p>
        <h4>Genre</h4><p>{data.book.genre}</p>
        <h3>More books by the same author</h3>
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