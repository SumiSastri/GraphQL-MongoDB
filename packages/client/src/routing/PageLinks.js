import React from "react";
// add links wrapper here
import { Link } from "react-router-dom";

const PageLinks = () => {
  return (
    <div >
          <ul id='book-details'>
            <Link to='/books-and-authors'>
              <li>Books and Authors</li>
            </Link>
            <Link to='/book-clients'>
              <li>Book Clients</li>
            </Link>
            <Link to='/book-projects'>
              <li>Book Projects</li>
            </Link>
          </ul>
          </div>
  );
};
export default PageLinks;