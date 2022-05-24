import React from "react";
import { useGetBookByIdQuery } from "../../../utils/hooks/useGetBookByIdQuery";

import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';

function DisplayBook() {

  const { error, loading, data } = useGetBookByIdQuery("628b5550c3d7458e93b55b5d");
  // console.log("Book by ID:", {error, data, loading})

  if (error) return <div><ErrorHasOccurredComponent /></div>
  if (loading) return <div><Loading /></div>

  return (
    <div>
      <h2>My Book</h2>
      <div id="book-details">
        <p>Name:{data.book.name}</p>
        <p>Genre:{data.book.genre}</p>
      </div>
    </div>

  );
}

export default DisplayBook;