import React from "react";

import logo from "../../assets/annie-spratt-gl7joOaABlI-unsplash-books-pile.jpg"
import DisplayImage from "./DisplayBookImage";
import "./imageStyles.css"

const DisplayLogo = () => {
  return (
    <div>
        <DisplayImage
        className="logo-styles" 
        src={logo}
        alt="A pile of books photo credit annie spratt from unsplash"
        />
    </div>
  );
};
export default DisplayLogo;