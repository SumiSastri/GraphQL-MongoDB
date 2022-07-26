import { Link } from "react-router-dom";

import "../.././App.css";
import DisplayBookClientsList from "./display/DisplayBookClientsList";
import AddBookClient from "./forms/AddBookClient";

const BookClientsIndex = () => {
  return (
    <div>
      <h2>Book Client's Page</h2>
      <Link to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
        Back to Home Page
      </Link>
      <div className='container'>
        <br />
        <AddBookClient />
        <DisplayBookClientsList />
      </div>
    </div>
  );
};

export default BookClientsIndex;
