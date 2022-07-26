import { Link } from "react-router-dom";

import "../.././App.css";
import DisplayBookList from "./display/DisplayBookList";
import AddBook from "./forms/AddBook";

function BooksIndex() {
  return (
    <div>
      <h2>Books and Authors Page</h2>
      <Link to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>Back to Home Page</Link>
      <DisplayBookList />
      <AddBook />
    </div>
  );
}

export default BooksIndex;
