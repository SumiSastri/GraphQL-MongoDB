import { useState } from "react";

// data
import { useGetBooksQuery } from "../../../utils/hooks/book/useGetBooksQuery";
// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import DisplayBook from "./DisplayBook";

const DisplayBookList = () => {
  const { error, loading, data } = useGetBooksQuery();
  // console.log("BookList:", { error, data, loading });
  const [selected, setSelected] = useState(null);
  const displayBooks = (loading, data) => {
    if (error) {
      return <ErrorHasOccurredComponent />;
    } else if (loading) {
      return <Loading />;
    } else {
      return data.books.map((book) => {
        return (
          <div id='book-details' key={book.id}>
            <ul
              key={book.id}
              onClick={() => {
                setSelected(book.id);
              }}
            >
              <li>{book.name}</li>
            </ul>
          </div>
        );
      });
    }
  };
  return (
    <div>
      <ul id='book-list'>
        <li>{displayBooks(loading, data, error)}</li>
        <div>{selected && <DisplayBook bookId={selected} />}</div>
      </ul>
    </div>
  );
};

export default DisplayBookList;
