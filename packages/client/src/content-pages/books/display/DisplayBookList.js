import { useState } from "react";

// data
import { useGetBooksQuery } from "../../../utils/hooks/useGetBooksQuery";

// components
import Loading from "../../common-components/loading/Loading";
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";
import DisplayBook from "./DisplayBook";

const DisplayBookList = () => {
  // call query
  // the query is refetched in the create book component to display and render correctly
  const { error, loading, data } = useGetBooksQuery();
  console.log("BookList:", { error, data, loading });

  // add handleClick logic
  const [selected, setSelected] = useState(null);

  //  custom function to render data
  const displayBooks = (loading, data) => {
    if (error) {
      return <ErrorHasOccurredComponent />;
    } else if (loading) {
      return <Loading />;
    } else {
      return data.books.map((book) => {
        return (
          <div key={book.id}>
            <li 
                onClick={() => {
                    setSelected(book.id);
                } }
            >
                <li>{book.name}</li>
            </li>
            </div>    
        );
      });
    }
  };
  return (
    <div >
      <ul id='book-list'>
        <li>{displayBooks(loading, data, error)}</li>
      </ul>
      <div>{selected && <DisplayBook bookId={selected} />}</div>
    </div>
  );
};

export default DisplayBookList;
