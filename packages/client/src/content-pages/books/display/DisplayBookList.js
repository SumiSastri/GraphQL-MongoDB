import { useState } from "react";

// data
import { useGetBooksQuery } from "../../../utils/hooks/useGetBooksQuery";

// components
import Loading from "../../common-components/loading/Loading";
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";
import DisplayBook from "./DisplayBook";
// import UpdateBook from "../forms/UpdateBook";

const DisplayBookList = () => {
  // call query
  // the query is refetched in the create book component to display and render correctly
  const { error, loading, data } = useGetBooksQuery();
  console.log("BookList:", { error, data, loading });

  // add handleClick logic
  const [selected, setSelected] = useState(null);
  // const [updateBookDetails, setUpdateBookDetails] = useState(null);

  //  custom function to render data
  const displayBooks = (loading, data) => {
    if (error) {
      return <ErrorHasOccurredComponent />;
    } else if (loading) {
      return <Loading />;
    } else {
      return data.books.map((book) => {
        return (    
            <li key={book.id}
                onClick={() => {
                    setSelected(book.id);
                } }
            >
                <li>{book.name}</li>
                      {/* <span onClick={() => {
                    setUpdateBookDetails(book.id);
                }}>Update</span>  */}
            </li>
        );
      });
    }
  };
  return (
    <div>
      <h1>Indian Authors in English</h1>
      <ul id='book-list'>
        <li>{displayBooks(loading, data, error)}</li>
        <li>{selected && <DisplayBook bookId={selected} />}</li>
        {/* <button>{updateBookDetails && <UpdateBook bookId={updateBookDetails} />}Update or Edit Book</button> */}
      </ul>
    </div>
  );
};

export default DisplayBookList;
