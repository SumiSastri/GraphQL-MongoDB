import { useState } from "react";
import { useParams } from "react-router-dom";

// queries
import { useGetBooksQuery } from "../../../utils/hooks/book/useGetBooksQuery";
import { GET_BOOKS } from "../../../utils/queries/queries";
// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import DisplayBook from "./DisplayBook";

const DisplayBookList = () => {
  const { id } = useParams();
  const { error, loading, data } = useGetBooksQuery(GET_BOOKS,{
    variables: { id },
  });
//  select filter
  const [selected, setSelected] = useState(null);
  const displayBooks = () => {  
    if (error) return <ErrorHasOccurredComponent />;
    if (loading) return <Loading />; 
      return data.books.map((book) => {
        return (
        //   <Link
        //   to={`/authors-and-books/${book.id}`}
        // >
          <div id='book-details' key={book.id}  
          onClick={() => {
            setSelected(book.id);
          }}>
            <ul>
              <li>{book.name} </li>
            </ul>    
          </div>
          // </Link>
        );
      });
    }
  return (
    <div>
     
      <ul id='book-list'>
       
        <div>    
            {selected && <DisplayBook bookId={selected}  />
        }</div>
         <li>{displayBooks(loading, data, error)}</li>
      </ul> 
    </div>
  );
};

export default DisplayBookList;


