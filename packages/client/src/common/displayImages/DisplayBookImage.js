import React from "react";

import bookImage from "../../assets/gulfer-ergin-LUGuCtvlk1Q-unsplash-open-books.jpg"
import DisplayImage from "./DisplayBookImage";
import "./imageStyles.css"

const DisplayBookImage = () => {
  return (
    <div>
      <DisplayImage
        className="book-image-styles"
        alt="open books on display for the more books by the author page"
        src={bookImage}
      />
    </div>
  );
};
export default DisplayBookImage;
