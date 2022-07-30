import { useState } from "react";
import { Link } from "react-router-dom";
import { FaList, FaUser } from "react-icons/fa";
// data
import { useGetBooksQuery } from "../../../utils/hooks/book/useGetBooksQuery";
import { GET_BOOKS } from "../../../utils/queries/queries";
// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import DisplayBook from "./DisplayBook";

const DisplayBookList = () => {
  const { error, loading, data } = useGetBooksQuery(GET_BOOKS);
//  select filter
  const [selected, setSelected] = useState(null);
  const displayBooks = () => {  
    if (error) return <ErrorHasOccurredComponent />;
    if (loading) return <Loading />; 
      return data.books.map((book) => {
        return (
          <div id='book-details' key={book.id}>
            <ul
              onClick={() => {
                setSelected(book.id);
              }}
            >
              <li>{book.name} </li>
            </ul>
          </div>
        );
      });
    }
  return (
    <div>
       <Link to='/add-book-form'>
       <button className='btn-secondary m-3'>
          <FaList className='icon' />
          <FaUser className='icon' />
      Add A Book & Author
        </button>
      </Link>
      <ul id='book-list'>
        <li>{displayBooks(loading, data, error)}</li>
        <div>{selected && <DisplayBook bookId={selected}  />
        }   </div>
      </ul> 
    </div>
  );
};

export default DisplayBookList;
