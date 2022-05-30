import React from "react";
import { useGetBookIdQuery } from "../../../utils/hooks/useGetBookIdQuery";

import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';

function DisplayBook({bookId}) {
   // console.log("displayBook props:", bookId)
// hard code and log to test with one book - "628b5550c3d7458e93b55b5d"
// as it is a prop from DisplayBooksList - pass prop instead
  const { error, loading, data } = useGetBookIdQuery(bookId);
  console.log("Book by ID:", {error, data, loading, bookId})

  if (error) return <div><ErrorHasOccurredComponent /></div>
  if (loading) return <div><Loading /></div>

  if (bookId){
    return (
      <div>
        <h2>{bookId.data.book.name}</h2>
        {/* <div id="book-details">
        <h4>Author</h4><p>{data.book.author.name}</p>
          <h4>Genre</h4><p>{data.book.genre}</p>
          <h3>More books by the same author</h3>
          <ul className="other-books">
                          { data.book.author.books.map(item => {
                              return <li key={item.id}>{ item.name }</li>
                          })}
                      </ul>
        </div> */}
      </div>
  
    );
  }
  
}

export default DisplayBook;