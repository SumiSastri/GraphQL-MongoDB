import { Link } from "react-router-dom";

import { FaList, FaUser } from "react-icons/fa";
import "../.././App.css";
import DisplayBookList from "./display/DisplayBookList";

const BooksIndex = () => {
  return (
    <div>
      <h2>Books and Authors Page</h2>
      <Link to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
        Back to Home Page
      </Link>
      <Link to='/add-book-form'>
       <button className='btn-secondary m-3'>
          <FaList className='icon' />
          <FaUser className='icon' />
      Add A Book & Author
        </button>
      </Link>
      <DisplayBookList />
      <Link to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
        Back to Home Page
      </Link>
      <div className='container p-3'>
      </div>
    </div>
  );
};

export default BooksIndex;
