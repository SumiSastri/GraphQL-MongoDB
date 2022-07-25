import { Link } from "react-router-dom";

import "../.././App.css";
import DisplayBookClientsList from "./display/DisplayBookClientsList";
import AddBookClient from "./forms/AddBookClient";

function BookClientsIndex() {
  return (
    <div>
      <h2>Book Client's Page</h2>
      <Link to='/'>Back to Home Page</Link>
      <div className="container">
       <AddBookClient/>
      <DisplayBookClientsList />
      </div>
    </div>
  );
}

export default BookClientsIndex;
