import React from "react";
// add links wrapper here
import { Link } from "react-router-dom";
import HeaderComponent from "../common/header/HeaderComponent";

const PageLinks = () => {
  return (
    <div >
      <HeaderComponent
        children={
          <ul id='book-details'>
            <Link to='/books-and-authors'>
              <li>Books and Authors</li>
            </Link> 
            <Link to='/books-and-authors/:id'/>   
            <Link to='/book-clients'>
              <li>Book Clients</li>
            </Link>
            <Link to='/book-projects'>
              <li>Book Projects</li>
            </Link>
          </ul>
        }
      />
      <br />
    </div>
  );
};
export default PageLinks;